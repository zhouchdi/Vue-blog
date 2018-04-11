<template>
  <article class="article-no-img">
    <header>
      <a href="">
        Vue.js视频教程
        <i></i>
      </a>
      <h2><a target="_blank" href="" title="VUE学习路线 ，让你不迷路 ，请按此顺序学习。-技术胖-胜洪宇关注web前端技术">VUE学习路线 ，让你不迷路 ，请按此顺序学习。<span>(10集)</span></a></h2>
      <span>置顶</span>
    </header>
    <p class="article_p1">
      <time><i class="icon iconfont icon-shijian"></i>2018-01-21</time>
      <span class="article_author"><i class="icon iconfont icon-31wode"></i><a href="">zcd</a></span>
      <span><i class="icon iconfont icon-chakan2"></i>阅读(74840)</span>
      <a href=""><i class="icon iconfont icon-31pinglun"></i>评论(45)</a>
    </p>
    <p class="article_p2">有很多新来的前端爱好者，到了博客，不知道从何开始学习VUE，该从那篇文章开始看起，这里为了解决小伙伴的疑惑。
      文章介绍了Vue的学习过程，你只要安装这个顺序学习，就可以对Vue有个基本的了解。希望可以帮助更多的前端小伙伴学会Vue这个框架...</p>
  </article>
</template>

<script>
    export default {
      name: "essayNoImg"
    }
</script>

<style lang="less">
  @green: #8AC78F;
  .p(){
    text-align: left;
    color: #999;
    font-size: 12px;
    margin-bottom: 10px;
  }
  .article_text{
    padding-left: 20px;
  }
  article.article-no-img{
    max-width: 978px;
    border-radius: 4px 4px 0 0;
    border: 1px solid #eaeaea;
    padding: 20px;
    overflow: hidden;
    background-color: #fff;
    margin-bottom: -1px;
    >header{
      margin-bottom: 10px;
      text-align: left;
      >a{
        background-color: #8AC78F;
        color: #fff;
        padding: 5px 6px;
        font-size: 12px;
        position: relative;
        margin-right: 12px;
        top: -2px;
        >i{
          right: -10px;
          top: 7px;
          position: absolute;
          border-left: 5px solid #8AC78F;
          border-top: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 5px solid transparent;
        }
      }
      >h2{
        display: inline;
        font-size: 18px;
        line-height: 24px;
        a{
          color: #000;
          span{
            color: #FF5E52;
          }
        }
      }
      >span{
        display:inline-block;
        background: #FF5E52;
        font-size: 12px;
        padding: 2px 4px;
        color: #fff;
        position: relative;
        top: -1px;
        border-radius:2px;
        margin-left: 6px;
      }
    }
    >p.article_p1{
      .p();
      time,span,a{
        display: inline-block;
        margin-right: 20px;
      }
      i{
        margin-right: 4px;
        font-size:12px;
      }
      a{
        color:#999;
      }
      a:hover{
        color:@green;
      }
    }
    >p.article_p2{
      .p();
      word-wrap: break-word;
      line-height: 20px;
    }
  }
  article:hover{
    background-color: #f6f6f6;
  }
  @media (max-width: 640px){
    article{
      padding: 10px 10px 10px 180px;
      >a{
        margin-left: -170px;
        width: 160px;
        img{
          width: 160px;
        }
      }
      >header{
        >a{
          display: none;
        }
        >h2{
          font-size: 16px;
          line-height: 18px;
        }
      }
      >p.article_p2{
        display: none;
      }
    }
  }
  @media (max-width: 480px){
    article{
      padding: 10px 10px 10px 120px;
      >a{
        margin-left: -110px;
        width: 100px;
        img{
          width: 100px;
        }
      }
      >p.article_p1{
        span.article_author{
          display: none;
        }
      }
    }
  }
</style>
