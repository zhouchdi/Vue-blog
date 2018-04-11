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

  /*搜索框*/
  div.bottom_line_search{
    position: absolute;
    margin: 0 auto;
    // max-width: 1200px;
    padding: 0;
    top: 105px;
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

  @media (max-width:1240px){
    div.bottom_line_search{
      form{
        padding: 25px 0;
        margin: 0 15px;
      }
    }
  }

  @media (max-width:720px){
    div.bottom_line_search{
      top: 64px;
    }
  }

</style>
