/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-template */
const path = require('path')
const fs = require('fs')
const processSvg = require('./processSvg')
const { parseName } = require('./utils')
const defaultStyle = process.env.npm_package_config_style || 'stroke'
const { getAttrs, getElementCode } = require('./template')
const icons = require('../src/data.json')

const rootDir = path.join(__dirname, '..')

// where icons code in
const srcDir = path.join(rootDir, 'src')
const iconsDir = path.join(rootDir, 'src/icons')

// generate index and d.ts file
const generateIndex = () => {
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir)
    fs.mkdirSync(iconsDir)
  } else if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir)
  }

  fs.writeFileSync(path.join(rootDir, 'src', 'index.js'), '', 'utf-8');
}

// generate attributes code
const attrsToString = (attrs, style) => {
  console.log(style)
  return Object.keys(attrs).map((key) => {
    // should distinguish fill or stroke
    if (key === 'width' || key === 'height' || key === style) {
      return key + '={' + attrs[key] + '}';
    }
    return key + '="' + attrs[key] + '"';
  }).join(' ');
};

// generate icon code separately
const generateIconCode = async ({name}) => {
  const names = parseName(name, defaultStyle)
  const location = path.join(rootDir, 'src/svg', `${names.name}.svg`)
  const destination = path.join(rootDir, 'src/icons', `${names.name}.vue`)
  const code = fs.readFileSync(location)
  const svgCode = await processSvg(code)
  const ComponentName = names.componentName
  const component = getElementCode(ComponentName, attrsToString(getAttrs(names.style), names.style), svgCode)

  fs.writeFileSync(destination, component, 'utf-8');

  console.log('Successfully built', ComponentName);
  return {ComponentName, name: names.name}
}

// append export code to index.js
const appendToIndex = ({ComponentName, name}) => {
  const exportString = `export { default as Icon${ComponentName} } from './icons/${name}.vue';\r\n`;
  fs.appendFileSync(
    path.join(rootDir, 'src', 'index.js'),
    exportString,
    'utf-8',
  );
}

generateIndex()

Object
  .keys(icons)
  .map(key => icons[key])
  .forEach(({name}) => {
    generateIconCode({name})
      .then(({ComponentName, name}) => {
        appendToIndex({ComponentName, name})
      })
  })
