<template>
  <div class="article sidebar_fadiv">
    <!--标题-->
    <ul class="sidebar_fadiv_ul1_active">
      <li><b>近期文章</b></li>
    </ul>
    <!--内容-->
    <ul class="article_ul">
      <li v-for="(item,index) in articles" :key="index">
        <a href="">{{ item.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "articles",
      data(){
          return {
            articles:[
              {
                'text':'密码保护：【出差总结】第二届中国零售智能信息化高峰论坛'
              },
              {
                'text':'非常抱歉实战课程推迟'
              },
              {
                'text':'2018年减肥开始 目标50斤'
              },
              {
                'text':'这几天公司疯狂加班 导致没时间回复留言'
              },
              {
                'text':'Nuxt.js免费视频教程 开启SSR渲染'
              }
            ]
          }
      }
    }
</script>

<style lang="less">
  @green: #8AC78F;
  .article{
    .article_ul{
      li{
        text-align: left;
        border-bottom: 1px solid #eee;
        padding: 8px 15px;
        a{
          color: #666;
          font-size: 14px;
        }
        a:hover{
          color:@green;
        }
      }
    }
  }
</style>
