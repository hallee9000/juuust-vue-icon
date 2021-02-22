const getAttrs = (style) => {
  const baseAttrs = {
    'xmlns': 'http://www.w3.org/2000/svg',
    ':width': 'size',
    ':height': 'size',
    'viewBox': '0 0 24 24',
    'aria-hidden': 'true',
    'v-on': '$listeners'
  }
  const fillAttrs = {
    ':fill': 'color'
  }
  const strokeAttrs = {
    ':stroke': 'color',
    'fill': 'none',
    'stroke-width': 2,
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }
  return Object.assign({}, baseAttrs, style==='fill' ? fillAttrs : strokeAttrs)
}
  
const getElementCode = (ComponentName, attrs, svgCode) => `
  <template>
    <svg
      ${attrs}
    >
      ${svgCode}
      <defs>
        <linearGradient id="primary-gradiant" x1="0.542969" y1="60.582" x2="60.543" y2="0.582212" gradientUnits="userSpaceOnUse">
          <stop stop-color="var(--color-stop-1)" /><stop offset="1" stop-color="var(--color-stop-2)" />
        </linearGradient>
      </defs>
    </svg>
  </template>
  <script>
    export default {
      name: "Icon${ComponentName}",
      props: {
        size: {
          type: Number,
          default: 20
        },
        color: {
          type: String,
          default: "currentColor"
        }
      }
    };
  </script>
`

module.exports = { getAttrs, getElementCode }
