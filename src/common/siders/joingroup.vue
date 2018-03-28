<template>
  <div class="joinGp sidebar_fadiv">
    <!--标题-->
    <ul class="sidebar_fadiv_ul1_default">
      <li><b>加入组织</b></li>
    </ul>
    <!--内容-->
    <ul class="joinGp_ul">
      <!--二维码图-->
      <li><img src="../../assets/images/jspang/weixinpingtai.jpg" alt="微信二维码"></li>
      <!--qq群-->
      <li>
        <ul>
          <li><strong>QQ群1：364140450</strong><span>(2500/5000人)</span><a href="" target="_blank"><img src="../../assets/images/jspang/group.png" alt="加入qq群"></a></li>
          <li><strong>QQ群2：524520566</strong><span>(2000/2000满)</span><a href="" target="_blank"><img src="../../assets/images/jspang/group.png" alt="加入qq群"></a></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "joingroup"
    }
</script>

<style lang="less">
  @red:#f44336;
  div.joinGp{
    ul.joinGp_ul{
      padding-bottom: 10px;
      padding-left: 5px;
      padding-right: 5px;
      >li:first-child{
        border-bottom:1px solid #eaeaea;
      }
      >li ul {
        font-size: 14px;
        padding-top: 12px;
        li{
          strong{
            color: @red;
          }
          a{
            display: inline-block;
            vertical-align: middle;
            padding-left: 10px;
          }
        }
      }
    }
  }
</style>
