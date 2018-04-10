<template>
  <div class="list sidebar_fadiv">
    <!--标题-->
    <ul class="sidebar_fadiv_ul1_active">
      <li><b>分类目录</b></li>
    </ul>
    <!--内容-->
    <ul class="list_ul">
      <li v-for="(item,index) in lists" :key="index">
        <a href="">{{ item.text }}</a><span>({{ item.num }})</span>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "splist",
      data(){
          return {
            lists:[
              {
                'text':'Python学习',
                'num':5
              },
              {
                'text':'前端成神软技能',
                'num':2
              },
              {
                'text':'前端日记',
                'num':35
              },
              {
                'text':'生活趣事',
                'num':5
              },
              {
                'text':'网站公告',
                'num':10
              },
              {
                'text':'视频教程',
                'num':35
              },
              {
                'text':'读书笔记',
                'num':5
              }
            ]
          }
      }
    }
</script>

<style lang="less">
  @green: #8AC78F;
  .list{
    .list_ul{
      overflow: hidden;
      padding: 15px;
      color: #999;
      li{
        list-style: disc;
        float: left;
        width: 43%;
        text-align: left;
        margin-bottom: 7px;
        margin-left: 20px;
        a{
          color: #777;
        }
        a:hover{
          color: @green;
        }
      }
    }
  }
</style>
