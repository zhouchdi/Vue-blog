<template>
    <!--搜索框-->
    <div class="bottom_line_search" style="display: none">
        <form action="" method="get">
        <input type="text" placeholder="输入关键字">
        <button type="submit"><i class="icon iconfont icon-sousuo"></i></button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
          return {

          };
        },
        methods: {

        },
        mounted(){
          //  搜索框
          let bottomLineSearch = $('div.bottom_line_search');
          $('#bottom_search').on('click',function(e){
              if($(this).hasClass('icon-sousuo')){
                $(this).removeClass('icon-sousuo').addClass('icon-31guanbi');
                $(bottomLineSearch).removeAttr('style').addClass('animated bounceInLeft');
              }else if($(this).hasClass('icon-31guanbi')){
                $(this).removeClass('icon-31guanbi').addClass('icon-sousuo');
                $(bottomLineSearch).addClass('animated bounceOutRight');
              }
              e.preventDefault();
              setTimeout(function(){
                if($(bottomLineSearch).hasClass('bounceInLeft')){
                  $(bottomLineSearch).removeClass('animated bounceInLeft');
                }else if($(bottomLineSearch).hasClass('bounceOutRight')){
                  $(bottomLineSearch).removeClass('animated bounceOutRight').attr('style','display:none');
                }
              },500)
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
  /*搜索框*/
  div.bottom_line_search{
    position: absolute;
    margin: 0 auto;
    max-width: 1200px;
    padding: 0;
    top: 47px;
    left: 0;
    right: 0;
    width: 100%;
    opacity: .95;
    background: #ffffff;
    z-index: 10;
    form{
      padding: 25px 20%;
      overflow: hidden;
      input{
        float: left;
        color: #999;
        border: solid 1px #ddd;
        width: 85%;
        height: 50px;
        padding: 4px 12px;
        border-right: none;
        font-size: 16px;
        border-radius: 2px 0 0 2px;
        outline: none;
        box-sizing: border-box;
      }
      button{
        float: left;
        text-align: center;
        font-size: 16px;
        border-radius: 0 2px 2px 0;
        width: 15%;
        height: 50px;
        border: none;
        outline: none;
        color: #fff;
        font-weight: bold;
        background: @greenColor;
        cursor: pointer;
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
