<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
}
* {
  margin: 0; padding: 0;
  box-sizing: border-box;
}
html {
  margin: 0; padding: 0; border-image: none;
}
a,a:visited,a:hover,a:active,a:focus {
  text-decoration: none;
}
ul,li {
  list-style: none;
}
img {
  border:0; border-image: none; display: inline;
}
input,textarea,div {
  resize: none;
}
.clear {
  clear: both;
}
</style>
