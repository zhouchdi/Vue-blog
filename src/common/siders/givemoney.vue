<template>
  <div class="giveMoney sidebar_fadiv">
    <!--标题-->
    <ul class="sidebar_fadiv_ul1_default">
      <li><b>求打赏</b></li>
    </ul>
    <!--内容-->
    <!--打赏分支以及特权-->
    <ul class="giveMoney_ul1">
      <li class="active"><span>微信打赏</span></li>
      <li><span>支付宝打赏</span></li>
      <li><span>获取特权</span></li>
    </ul>
    <!--具体的打赏支付方式，以及具体的特权内容-->
    <ul class="giveMoney_ul2">
      <!--微信打赏-->
      <li class="giveMoney_ul2_li1 giveMoney_ul2_li_show">
        <ul>
          <li><img src="../../assets/images/jspang/Wechat002.jpeg" alt="微信打赏"></li>
          <li><span>打赏获得5项特权</span></li>
          <li>
            <p>1.技术胖免费视频离线高清版下载（共210集）;</p>
            <p>2.纯金网站15元代金券，用于购买技术胖收费课程;</p>
            <p>3.加入技术胖微信群，享有更多互动和人脉资源;</p>
            <p>4.和11年程序老兵技术胖成为微信好友;</p>
            <p>5.定期收听前端职场软技能分享。</p>
          </li>
        </ul>
      </li>
      <!--支付宝打赏-->
      <li class="giveMoney_ul2_li2">
        <ul>
          <li><img width="100%" src="../../assets/images/jspang/dashangalipay.jpg" alt="支付宝打赏"></li>
          <li><span>打赏获得5项特权</span></li>
          <li>
            <p>1.技术胖免费视频离线高清版下载（共210集）;</p>
            <p>2.纯金网站15元代金券，用于购买技术胖收费课程;</p>
            <p>3.加入技术胖微信群，享有更多互动和人脉资源;</p>
            <p>4.和11年程序老兵技术胖成为微信好友;</p>
            <p>5.定期收听前端职场软技能分享。</p>
          </li>
        </ul>
      </li>
      <!--获取特权-->
      <li class="giveMoney_ul2_li3">
        <ul>
          <li><span>非常感谢你的打赏,你可以通过下面的3步获得特权：</span></li>
          <li>
            <p>1.微信扫下方二维码，加技术胖为好友；</p>
            <p>2.发送打赏截图给技术胖；</p>
            <p>3.技术胖拉你进微信群，特权获取方法在群公告里。</p>
          </li>
          <li>
            <img width="60%" src="../../assets/images/jspang/erweima.jpg" alt="获取特权">
            <p>打赏后先不要着急，因为是人工操作;</p>
            <p>每天中午12点审核.晚上19点审核。</p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "givemoney",
      methods:{

      },
      mounted(){
          // 切换页头
        let ulObj = $('ul.giveMoney_ul1>li');
        for(let i = 0; i < ulObj.length; i ++){
          $(ulObj[i]).on('click',function(){
            if(!$(this).hasClass('active')){
              $(this).addClass('active').siblings().removeClass('active');
            }

            let ul2_li = $($('ul.giveMoney_ul2').children('li')[i]);

            if(!$(ul2_li).hasClass('giveMoney_ul2_li_show')){
              $(ul2_li).addClass('giveMoney_ul2_li_show').siblings().removeClass('giveMoney_ul2_li_show');
            }
          });
        }
      }
    }
</script>

<style lang="less">
  .giveMoney{
    /*打赏分支*/
    .giveMoney_ul1{
      clear: both;
      margin-left: 5px;
      margin-top: 5px;
      overflow: hidden;
      li{
        float: left;
        font-size: 14px;
        background-color:#fafafa;
        border: 1px solid #e7e7e7 ;
        padding: 15px 18px;
        cursor: pointer;
        margin-bottom: 20px;
      }
      li.active{
        background-color:#81d742 ;
        border:1px solid #68be29;
        color: #fff;
      }
      li:not(:last-child){
        border-right: 0;
      }
    }
    /*打赏详细信息*/
    .giveMoney_ul2{
      padding: 0 20px;
      >li{
        display: none;
        ul{
          li{
            span{
              display: block;
              color:#ff0000;
              margin-top: 20px;
            }
            span,p{
              text-align: left;
              font-size: 14px;
              font-weight: 700;
              line-height: 20px;
              margin-bottom: 15px;
            }
          }
        }
      }
      li:last-child{
        ul{
          li:last-child{
            text-align: left;
            img{
              max-width: 100%;
            }
            p{
              margin: 0;
              font-weight:normal;
              font-size: 12px;
            }
          }
        }
      }
      li.giveMoney_ul2_li_show{
        display: block !important;
      }
    }
  }
</style>
