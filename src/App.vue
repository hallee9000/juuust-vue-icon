<template>
  <div class="container">
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

  export default {
    name: "App",
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
      }
    }
  };
</script>

<style lang="css">
  body{
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
  }
  .container {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  .wrapper {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 30px;
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
