<template>
  <div class="rollbar" style="display:none">
      <div class="rollbar-icon">
          <i class="icon iconfont icon-jiantoushang jiantoushang"></i>
      </div>
      <h4>
          去顶部
          <i></i>
        </h4>
  </div>
</template>
<script>
    export default{
        name:'rollbar'
    }
</script>
<style lang='less'>
    .rollbar{
        position: fixed;
        bottom: 20px;
        right: 20px;
        opacity: 0;
        cursor: pointer;
        div.rollbar-icon{
            background-color: #666;
            height: 50px;
            width: 50px;
            color: #fff;
            opacity: .45;
            display: inline-block;
            line-height: 50px;
            z-index: 10;
            i.jiantoushang{
                font-size:25px;
            }
        }
        h4{
            position: absolute;
            z-index: 1;
            top: 50%;
            opacity: 0;
            right: 0;
            transition:all .25s;
            margin: -13px 10px 0 0;
            line-height: 26px;
            font-size: 12px;
            background-color: #666;
            color: #fff;
            width: 53px;
            border-radius: 2px;
            text-align: center;
            i{
                position: absolute;
                border-left: 7px solid #666;
                border-top: 6px solid transparent;
                border-bottom: 6px solid transparent;
                display: inline-block;
                right: -7px;
                top: 32%;
            }
        }
    }
    .rollbar:hover{
        div.rollbar-icon{
            opacity: 1;
        }
        h4{
            right: 105%;
            opacity: 1;
        }
    }
</style>
