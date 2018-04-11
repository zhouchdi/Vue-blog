<template>
  <div class="nav-bar-father">
    <div class="nav-bar">
      <!--上-->
      <div class="top_line">
        <ul class="top_line_ul">
          <li class="top_line_li"><a href="">Vue.js视频教程</a></li>
          <li class="top_line_li"><a href="">其它教程</a></li>
          <li class="top_line_li">
            <a href="">关注本站<i class="icon iconfont icon-31shouqi smallxiala" style="transform: rotateX(180deg) translateY(2px);"></i></a>
            <!--RSS订阅-->
            <div class="top_line_li_dingyue" style="display:none"><i class="icon iconfont icon-dingyue"></i><span>RSS订阅</span></div>
          </li>
        </ul>
      </div>
      <!--下-->
      <div class="bottom_line">
        <!--下左-->
        <ul class="bottom_line_ul1">
          <li style="vertical-align: bottom;"><a href="" title="zcd的博客"><img src="../../assets/images/my/logo.png" alt="logo"></a></li>
          <li id="bottom_line_ul1_last_li"><p>关注WEB前端技术<br>每年帮助超过01人前端爱好者学习</p></li>
        </ul>
        <!--下右-->
        <ul class="bottom_line_ul2">
          <li><a>首页</a></li>
          <li><a>视频教程</a></li>
          <li><a>前端日记</a></li>
          <li><a>生活趣事</a></li>
          <li><a>自我介绍</a></li>
          <li>
            <i class="icon iconfont icon-sousuo" id="bottom_search"></i>
          </li>
        </ul>
      </div>
    </div>
    <!--缩略符-->
    <div class="thumb">
      <i class="icon iconfont icon-fenlei"></i>
      <div class="thumb_mask" style="display: none;">
        <ul>
          <li><a>首页</a></li>
          <li><a>视频教程</a></li>
          <li><a>前端日记</a></li>
          <li><a>生活趣事</a></li>
          <li><a>自我介绍</a></li>
        </ul>
        <div class="thumb_mask_blank"></div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        mounted(){
          // 订阅动画
          let dingyue = $('.top_line_li_dingyue');
          $($('.top_line_li')[2]).hover(function(){
            if($(dingyue).attr('style')){
              $(dingyue).removeAttr('style').addClass('animated bounceIn');
              $(this).find('a>i').removeAttr('style').addClass('animated lightSpeedIn');
            }

            setTimeout(function(){
              $(dingyue).removeClass('animated bounceIn');
                $($('.top_line_li')[2]).find('a>i').removeClass('animated lightSpeedIn');
            },500)
          },function(){
            if(!$(dingyue).attr('style')){
              $(dingyue).addClass('animated bounceOut');
              $(this).find('a>i').addClass('animated lightSpeedOut');
            }

            setTimeout(function(){
              $(dingyue).removeClass('animated bounceOut').attr('style','display:none');
              $($('.top_line_li')[2]).find('a>i').removeClass('animated lightSpeedOut').attr('style','transform: rotateX(180deg) translateY(2px);');
            },500);
          });

          // 缩略图
          let thumbMask = $('div.thumb>div.thumb_mask');
          $('div.thumb>i.icon-fenlei').on('click',function(){
            if($(thumbMask).attr('style')){
              $(thumbMask).removeAttr('style').addClass('animated slideInLeft');
            }

            setTimeout(function(){
              if($(thumbMask).hasClass('slideInLeft')){
                $(thumbMask).removeClass('animated slideInLeft');
              }
            },1000)
          });

          $('div.thumb_mask>div.thumb_mask_blank').on('click',function(){
            if(!$(thumbMask).attr('style')){
              $(thumbMask).addClass('animated slideOutLeft');
            }

            setTimeout(function(){
              if($(thumbMask).hasClass('slideOutLeft')){
                $(thumbMask).removeClass('animated slideOutLeft').attr('style','display:none');
              }
            },1000)
          });
        }
    }
</script>

<style lang="less">
  @greenColor:#8AC78F;
  @height:32px;
  .blockH(){
    display: inline-block;
    height: @height;
  }

  .nav-bar:before,.nav-bar:after{
    box-sizing: border-box;
  }
  .nav-bar-father{
    position: relative;
    margin-bottom: 15px;
    .nav-bar {
      margin: 4em 15px 15px 15px;
      position: relative;
      height: @height;
      box-sizing: border-box;
      /*上*/
      div.top_line{
        position: absolute;
        right: 0;
        left: 0;
        top:-45px;
        ul.top_line_ul{
          float: right;
          .top_line_li{
            float: left;
            a{
              padding: 0 15px;
              color: #bbb;
              display: block;
              .smallxiala{
                font-size: 10px;
                font-weight: bold;
                margin-left: 5px;
                display: inline-block;
                vertical-align: middle;
              }
            }
            a:hover{
              color: @greenColor;
            }
            /*RSS订阅*/
            .top_line_li_dingyue{
              position: absolute;
              right: 6px;
              color: #999;
              font-weight: bold;
              font-size: 12px;
              width: 112px;
              height: @height;
              border: 1px solid #ddd;
              border-radius: 4px;
              line-height: @height;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              background-color: #ffffff;
              z-index: 2;
              cursor: pointer;
              i{
                font-size: 13px;
                display: inline-block;
                margin-right: 8px;
              }
            }
            .top_line_li_dingyue:hover{
              color: @greenColor;
              background: #EAEAEA;
            }
          }
          /*关注本站*/
          .top_line_li:nth-child(3){
            position: relative;
          }
        }
      }
      /*下*/
      div.bottom_line{
        position: absolute;
        width: 100%;
        /*下左*/
        ul.bottom_line_ul1{
          float: left;
          .blockH();
          li{
            .blockH();
            a{
              .blockH();
              img{
                .blockH();
              }
            }
            p{
              border-left: 2px solid #eaeaea;
              height: @height;
              color: #bbb;
              text-align: left;
              padding-left: 10px;
              font-size: 14px;
              line-height: 16px;
              margin-bottom: 2px;
            }
          }
          @media (max-width: 1024px){
            li#bottom_line_ul1_last_li{
              display: none;
            }
          }
        }
        @media (max-width: 720px){
          ul.bottom_line_ul1{
            float: none;
          }
        }
        /*下右*/
        ul.bottom_line_ul2{
          float: right;
          margin-top: 9px;
          li{
            float: left;
            padding: 0 15px;
            i{
              font-weight: bolder;
              margin-top: 4px;
              display: inline-block;
              cursor: pointer;
            }
            a{
              font-size: 18px;
              cursor: pointer;
            }
            a:hover{
              color: @greenColor;
            }
          }
          li:nth-child(1){
            color: @greenColor;
          }
          li:nth-child(6){
            i:hover{
              color: @greenColor;
            }
            i.icon-31guanbi{
              color: @greenColor;
            }
          }
        }
        @media (max-width: 720px){
          ul.bottom_line_ul2{
            margin-top: 5px;
            li:not(:last-child){
              display: none;
            }
            li:last-child{
              i{
                margin-top: 0;
              }
            }
          }
        }
      }
    }
  }

  /*缩略图*/
  div.thumb{
    position: absolute;
    top: 3px;
    left: 15px;
    display: none;
    cursor: pointer;
    div.thumb_mask{
      position: fixed;
      color: #eee;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 10;
      display: flex;
      ul{
        background-color: black;
        width: 65%;
        padding: 0 10px;
        li{
          text-align: left;
          padding: 20px;
          box-sizing: border-box;
          border-bottom: 1px solid #303C4A;
        }
      }
      div.thumb_mask_blank{
        width: 35%;
        background: #111;
        opacity: 0.2;
      }
    }
  }
  @media (max-width: 720px){
    .nav-bar-father>.nav-bar {
      margin:15px;
      position: relative;
      height: @height;
      padding-bottom:0;
    }
  }
  @media (max-width: 720px) {
    /*搜索框*/
    div.bottom_line_search {
      form {
        padding: 25px 3%;
      }
    }
    /*缩略图*/
    div.thumb{
      display: block;
    }
  }
  /*上*/
  @media (max-width: 860px){
    .nav-bar-father>.nav-bar>div.top_line{
      display: none;
    }
  }
  @media (min-width: 1280px){
    .nav-bar-father>.nav-bar {
      margin: 0 auto;
      max-width: 1280px;
      margin-top: 4em;
      margin-bottom: 15px;
    }
  }

</style>
