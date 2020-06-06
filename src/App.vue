<template>
  <div class="container">
    <Banner/>
    <ul class="wrapper">
      <li
        class="item"
        v-for="iconComponentName in iconNames"
        :key="iconComponentName"
        :title="iconComponentName"
        @click="copyName(iconComponentName)"
      >
        <component
          :is="iconComponentName"
          :size="36"
        />
        <div>{{iconComponentName}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  import 'normalize.css'
  import Banner from './components/Banner'

  export default {
    name: "App",
    components: {
      Banner
    },
    data () {
      return {
        iconNames: this.ICON_NAMES
      }
    },
    methods: {
      copyName(name) {
        const input = document.createElement('input')
        input.setAttribute('readonly', 'readonly')
        input.setAttribute('value', name)
        document.body.appendChild(input)
        input.setSelectionRange(0, 9999)
        input.select()
        if (document.execCommand('copy')) {
          document.execCommand('copy')
        }
        document.body.removeChild(input)
        this.$message.success('复制成功')
      }
    }
  };
</script>

<style lang="css">
  *{
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  body{
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
  }
  .container {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px;
  }
  .wrapper {
    list-style: none;
    display: flex;
    flex-flow: wrap;
    margin: 0;
    padding: 15px 0;
  }
  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    padding: 20px;
    border-radius: 6px;
    cursor: pointer;
    color: #486491;
    transition: background-color 0.2s;
  }
  .item:hover{
    background-color: #e7ecf3;
  }
  .item svg{
    margin-bottom: 12px;
  }
</style>
