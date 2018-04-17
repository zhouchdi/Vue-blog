<template>
  <div class="rollbarcomment" style="display:none">
      <i class="icon iconfont icon-community"></i>
  </div>
</template>
<script>
    export default {
        name:'rollbarcomment'
    }
</script>
<style lang="less">
    .rollbarcomment{
        position: fixed;
        bottom: 75px;
        right: 20px;
        opacity: 0;
        width: 50px;
        height: 50px;
        cursor: pointer;
        >i{
            background-color: #666;
            opacity: .45;
            width: 50px;
            height: 50px;
            display: inline-block;
            color: #fff;
            font-size: 25px;
            line-height: 50px;
        }
    }
</style>
