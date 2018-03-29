<template>
    <div class="articlelist">
      <!--目录标题-->
      <div class="articlelist_title">
        <h3>目录 <span>[<a href="#">隐藏</a>]</span></h3>
      </div>
      <!--目录内容-->
      <ul class="articlelist_content">
        <li>
          <a href="#">001.勇敢的面对自己的放肆-242斤</a>
        </li>
        <li>
          <a href="#">002.第二天采用自由泳的姿势游一个小时-240.2斤</a>
        </li>
        <li>
          <a href="#">003.今天不去运动，但是晚饭一定不吃-241斤</a>
        </li>
        <li>
          <a href="#">004.减肥5天了，作个小总结-239.8</a>
        </li>
        <li>
          <a href="#">005.深圳出差胖了5斤肉</a>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "articlelist"
    }
</script>

<style lang="less">
  @green:#8AC78F;
  .articlelist{
    background: #f9f9f9;
    border: 1px solid #aaa;
    padding: 10px;
    width: auto;
    display: table;
    font-size: 95%;
    margin-left: 10px;
    margin-bottom: 1em;
    float: right;
    .articlelist_title{
      h3{
        span{
          font-weight: normal;
          a{
            color:@green;
            font-size: 85%;
          }
          a:hover{
            color: red;
          }
        }
      }
    }
    .articlelist_content{
      text-align: left;
      margin-top: 2em;
      font-size: 80%;
      li{
        padding-left: 12px;
        height: 18px;
        a{
          color:@green;
        }
        a:hover{
          color: red;
        }
      }
    }
  }
</style>
