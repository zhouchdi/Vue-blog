<template>
    <div class="breadcrumbs">
      当前位置：
      <ul>
        <li><a href="">技术胖-胜洪宇关注web前端技术 <small>></small></a></li>
        <li><a href="">视频教程 <small>></small></a></li>
        <li><a href="">Vue.js视频教程 <small>></small></a></li>
      </ul>
      正文
    </div>
</template>

<script>
    export default {
        name: "breadcrumbs"
    }
</script>

<style lang="less">
  div.breadcrumbs{
    padding: 15px 0;
    font-size: 12px;
    text-align: left;
    background-color: #fff;
    color: #999;
    margin:0 15px;
    ul{
      display: inline-block;
      li{
        display: inline-block;
        a{
          color: #999;
        }
        a:hover{
          color: #000;
        }
      }
    }
  }

  @media (min-width: 1280px){
    div.breadcrumbs {
      margin: 0 auto;
      max-width: 1280px;
    }
  }
</style>
