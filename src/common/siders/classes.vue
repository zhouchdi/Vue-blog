<template>
  <div class="class sidebar_fadiv">
    <!--标题-->
    <ul class="sidebar_fadiv_ul1_active">
    </ul>
    <!--内容-->
    <ul class="class_ul">
      <li v-for="item in classes">
        <a href="">{{ item.text }}</a><span>({{ item.num }})</span>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "classes",
      data(){
          return {
            classes:[
              {
                'text':'CocosCreator',
                'num':'1'
              },
              {
                'text':'Vue',
                'num':'8'
              },
              {
                'text':'代码管理',
                'num':'7'
              },
              {
                'text':'Git',
                'num':'6'
              },
              {
                'text':'每日一题',
                'num':'6'
              },
              {
                'text':'python',
                'num':'4'
              },
              {
                'text':'ES6',
                'num':'3'
              },
              {
                'text':'JavaScript',
                'num':'2'
              },
              {
                'text':'React',
                'num':'2'
              },
              {
                'text':'Fabric',
                'num':'1'
              },
              {
                'text':'JQuery',
                'num':'1'
              },
              {
                'text':'JS特效',
                'num':'1'
              },
              {
                'text':'node',
                'num':'1'
              },
              {
                'text':'读书',
                'num':'1'
              }
            ]
          }
      }
    }
</script>

<style lang="less">
  @green: #8AC78F;
  .class{
    .class_ul{
      padding: 15px;
      overflow: hidden;
      li{
        background-color: #f6f6f6;
        float: left;
        width: 31.3333%;
        margin: 0 1% 1% 0;
        padding: 0 8px;
        font-size: 12px;
        height: 29px;
        line-height: 29px;
        overflow: hidden;
        color: #999;
        a{
          color: #999;
        }
      }
      li:hover{
        background-color: @green;
        color: #fff;
        a{
          color: #fff;
        }
      }
    }
  }
</style>
