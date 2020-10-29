<template>
  <div>
    <h1 class="banner">3Fiftynine Vue Icon</h1>
    <div class="code">
      <div>
        <h3>Installation</h3>
        <pre><code>npm install @3fiftynine/3fiftynine-icons --save<br/>yarn add @3fiftynine/3fiftynine-icons</code></pre>
      </div>
      <div>
        <h3>Usage</h3>
        <pre><code>import { IconHome } from '@3fiftynine/3fiftynine-icons'<br/>&lt;IconHome :size="36" color="#009C22" &gt;</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Banner"
  };
</script>

<style lang="css">
  .banner{
    padding-top: 30px;
    text-align: center;
  }
  .code{
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 720px;
  }
  .code div{
    width: 48%;
  }
  pre{
    width: 100%;
    padding: 20px;
    border-radius: 6px;
    color: #476391;
    background-color: #e7ecf3;
    overflow: auto;
  }
  h3{
    width: 100%;
    max-width: 360px;
    margin: 0 auto;
    padding: 10px 0;
  }
</style>
