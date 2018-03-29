<template>
  <div class="recommend">
    <!--标题-->
    <div class="recommend_title">
      <h3>相关推荐</h3>
    </div>
    <!--推荐内容-->
    <ul class="recommend_content">
      <li>
        <a href="">
          <img src="../../assets/images/jspang/2018.jpg" alt="">
        </a>
        <a href="">赢战2018 放空自己 蜕变重生</a>
      </li>
      <li>
        <a href="">
          <img src="../../assets/images/jspang/jianfei.jpg" alt="">
        </a>
        <a href="">[非技术]我的减肥辛(心)路</a>
      </li>
      <li>
        <a href="">
          <img src="../../assets/images/jspang/2018.jpg" alt="">
        </a>
        <a href="">赢战2018 放空自己 蜕变重生</a>
      </li>
      <li>
        <a href="">
          <img src="../../assets/images/jspang/jianfei.jpg" alt="">
        </a>
        <a href="">2017年展望 一命二运三风水，四积阴功五读书</a>
      </li>
      <li>
        <a href="">
          <img src="../../assets/images/jspang/2018.jpg" alt="">
        </a>
        <a href="">2016年只要坚持,梦想总是可以实现的!</a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "recommend"
    }
</script>

<style lang="less">
  @green: #8AC78F;
  .recommend{
    .recommend_title{
      overflow: hidden;
      margin-bottom: 20px;
      padding-bottom: 10px;
      padding-top: 10px;
      border-bottom: 1px solid #eaeaea;
      h3{
        color: #555;
        font-size: 20px;
        float: left;
        font-weight: normal;
      }
    }
    .recommend_content{
      overflow: hidden;
      li{
        width: 22%;
        margin-right: 3%;
        float: left;
        text-align: left;
        margin-bottom: 20px;
        a{
          color: #777;
          font-size: 14px;
          img{
            max-width: 100%;
            margin-bottom: 5px;
          }
        }
        a:last-child{
          display: block;
        }
        a:hover{
          color: @green;
        }
      }
      @media (max-width:720px){
        li{
          width: 30.333%;
        }
      }
    }
  }
</style>
