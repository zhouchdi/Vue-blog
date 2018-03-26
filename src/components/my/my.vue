<template>
  <div class="my">
    <el-tabs type="card">
      <el-tab-pane label="个人资料">
        <!--第一页-->
        <ul class="page1">
          <li class="page1_li">
            <b class="page1_li_b animated flip">周昌狄</b>
          </li>
          <li class="page1_li"><p>外号：小六，90后新进程序员，正在前端的道路上前行</p></li>
          <li class="page1_li"><p class="page1_li_p">正和程序处于1年的新婚蜜月期</p></li>
          <li class="page1_li">
            <ul>
              <li class="animated rollIn">
                <img class="my_pict" src="../../assets/images/my/tou1.png" alt="程序员头部变迁史">
                <p>现在</p>
                <p>怀揣计算机天才梦的帅气少年
                  超级小白</p>
              </li>
              <li class="animated rollIn">
                <img class="my_pict" src="../../assets/images/my/tou2.png" alt="程序员头部变迁史">
                <p>3年后</p>
                <p>热爱编程变得不修边幅
                  项目组长</p>
              </li>
              <li class="animated rollIn">
                <img class="my_pict" src="../../assets/images/my/tou3.png" alt="程序员头部变迁史">
                <p>6年后</p>
                <p>头发最终没战胜辐射和头油
                  技术负责人</p>
              </li>
            </ul>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="个人评价">
        <!--第二页-->
        <ul class="page2">
          <li class="page2_li fadeInDown animated"><b class="page2_li_b">朴实无华的前端程序猿</b></li>
          <li class="page2_li">
            <p>非常喜欢这句诗：</p>
            <p>人生弱丧自迷方。来往恰如狂。</p>
            <p>泥里弄泥团。竟不识、神珠夜光。</p>
            <p>几多风雨，几回磨岁，争肯暂恫惶。</p>
            <p>何处是家乡。便指与、疑心怎忘。</p>
          </li>
          <li class="page2_li"><p class="page2_li_p">程序生涯的见证者</p></li>
          <li class="page2_li animated lightSpeedIn">
            <img src="../../assets/images/my/cat.png" alt="猫名：灯泡">
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="专业技术">
        <div class="page3">
          <div class="page3_div">
            <p>前端开发技能</p>
            <ul>
              <li class="animated zoomInDown">
                <div>
                  <img src="../../assets/images/my/html5.png" alt="html5">
                </div>
                <div class="page3_div_title">HTML + CSS3</div>
                <div class="page3_div_text">熟练度：85%</div>
                <div class="page3_div_nav">学程序就开始用，已经用了2年，对新的HTML5+CSS不能说100%掌握</div>
              </li>
              <li class="animated zoomInDown">
                <div>
                  <img src="../../assets/images/my/javascript.png" alt="javascript">
                </div>
                <div class="page3_div_title">JavaScript</div>
                <div class="page3_div_text">熟练度：80%</div>
                <div class="page3_div_nav">
                  很早就开始使用，能独立写一些JavaScript插件。
                </div>
              </li>
              <li class="animated zoomInDown">
                <div>
                  <img src="../../assets/images/my/jquery.png" alt="jquery">
                </div>
                <div class="page3_div_title">JQuery</div>
                <div class="page3_div_text">熟练度：85%</div>
                <div class="page3_div_nav">
                  比原生js要用的顺手些。
                </div>
              </li>
              <li class="animated zoomInDown">
                <div>
                  <img src="../../assets/images/my/less.png" alt="less">
                </div>
                <div class="page3_div_title">Less</div>
                <div class="page3_div_text">熟练度：70%</div>
                <div class="page3_div_nav">适合大中型项目中css的编写</div>
              </li>
              <li class="animated zoomInDown">
                <div>
                  <img src="../../assets/images/my/node.png" alt="node">
                </div>
                <div class="page3_div_title">Node</div>
                <div class="page3_div_text">熟练度：50%</div>
                <div class="page3_div_nav">只能说基础基本掌握，但是缺乏实践</div>
              </li>
              <li class="animated zoomInDown">
                <div>
                  <img src="../../assets/images/my/vue.png" alt="vue">
                </div>
                <div class="page3_div_title">Vue</div>
                <div class="page3_div_text">熟练度：60%</div>
                <div class="page3_div_nav">基本掌握vue全家桶，但是还不够熟练</div>
              </li>
            </ul>
          </div>
          <div class="page3_div">
            <p>后端开发技能</p>
            <ul>
              <li class="animated zoomInDown">
                <div>
                  <img src="../../assets/images/my/webpack.png" alt="webpack">
                </div>
                <div class="page3_div_title">Webpack</div>
                <div class="page3_div_text">熟练度：50%</div>
                <div class="page3_div_nav">为了学习vue学习的webpack,基本配置已经可以掌握</div>
              </li>
              <li class="animated zoomInDown">
                <div>
                  <img src="../../assets/images/my/git.png" alt="git">
                </div>
                <div class="page3_div_title">Git</div>
                <div class="page3_div_text">熟练度：50%</div>
                <div class="page3_div_nav">前端工作者必备工具</div>
              </li>
            </ul>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="项目经验">
        <div class="page4">
          <ul class="page4_ul1">
            <li class="page4_ul1_li rotateIn animated">
              <div><b>630天</b></div>
              <p>项目实战磨练 技术心智慢慢成熟</p>
            </li>
            <li class="page4_ul1_li rotateIn animated">
              <div><b>50 +  页</b></div>
              <p>Web制作经历 踩坑无数 不断成长</p>
            </li>
            <li class="page4_ul1_li rotateIn animated">
              <div><b>1 + 1年</b></div>
              <p>从实习到工作的2年的前端生涯</p>
            </li>
          </ul>
          <div>重点项目</div>
          <ul class="page4_ul2">
            <li class="page4_ul2_li bounceInDown animated">
              <div><img src="../../assets/images/my/huaseng.png" alt="华森"></div>
              <p>华森官网</p>
            </li>
            <li class="page4_ul2_li bounceInDown animated">
              <div><img src="../../assets/images/my/huaseng.png" alt="华森"></div>
              <p>华森官网</p>
            </li>
            <li class="page4_ul2_li bounceInDown animated">
              <div><img src="../../assets/images/my/huaseng.png" alt="华森"></div>
              <p>华森官网</p>
            </li>
            <li class="page4_ul2_li bounceInDown animated">
              <div><img src="../../assets/images/my/huaseng.png" alt="华森"></div>
              <p>华森官网</p>
            </li>
          </ul>
        </div>
      </el-tab-pane>
      <el-tab-pane label="工作经历">
        <!--第五页-->
        <ul class="page5">
          <li class="page5_li"><b class="page5_li_b">简单的工作经历</b></li>
          <li class="page5_li">
            <p>2017-10至2018-2： 在宁波市浙江满益网络科技有限公司实习</p>
            <p>2018-6： 从宁波学院毕业</p>
            <p>2018-7至2018至今： 在杭州沸点网络科技有限公司工作</p>
          </li>
        </ul>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import animate from 'animate.css'
    export default {
        name: "my"
    }
</script>

<style scoped lang="less">
  @marginTop:10vh;
  @marginBottom:5vh;
  @Orange: #FF6700;

  .b(@fontSize:6vw){
    font-size: @fontSize;
    color: #666666;
  }

  .p1(@fontSize:1.17em){
    font-size:@fontSize;
    opacity: .8;
    line-height: 1.5em;
  }

  .p2(){
    font-size: 2em;
    line-height: 1.5em;
    text-align: left;
    font-weight: 500;
    margin-top: .3em;
    margin-bottom: .3em;
  }

  .my {
    width: 100vw;
    height: 100vh;
  }
  /*第一页*/
  .page1{
    margin-top: @marginTop;
    .page1_li {
      margin-bottom: @marginBottom;
      b{
        .b();
        display: inline-block;
      }

      p{
        .p1();
      }

      p.page1_li_p{
        color: @Orange;
      }

      ul{
        overflow: hidden;
        width: 80%;
        margin: 0 auto;
        li{
          float: left;
          width: 20vw;
          margin: 0 3vw;
          img.my_pict{
            width: 100px;
            height: 100px;
            border: 0;
          }
        }
      }
    }
  }
  /*第二页*/
  .page2{
    margin-top: @marginTop;
    .page2_li{
      margin-bottom: @marginBottom;
      .page2_li_b {
        .b(3vw);
      }

      p{
        .p1();
      }

      .page2_li_p{
        color: @Orange;
      }
      img{
        width: 30vw;
        height: 25vh;
      }
    }
  }

  /*第三页*/
  .page3{
    width: 70%;
    margin: 0 auto;
    margin-top: 6vh;
    .page3_div{
      p{
        .p2();
      };
      ul{
        overflow: hidden;
        li{
          float: left;
          width: 20%;
          height: 20%;
          position: relative;
          margin-bottom: .5em;
          div{
            img{
              width: 50%;
              height: auto;
            }
          }
          div.page3_div_title{
            .p1(.95em)
          }
          div.page3_div_text{
            .p1(.95em);
            color:@Orange;
          }
          div.page3_div_nav{
            position: absolute;
            opacity: 0;
            background: #000;
            color: #fff;
            top: 0;
            -webkit-border-radius: 7px;
            -moz-border-radius: 7px;
            border-radius: 7px;
            bottom: 0;
            line-height: 1.5em;
            padding: 1em;
          }
          div.page3_div_nav:hover{
            opacity: 1;
          }
        }
      }
    }
  }

  /*第四页*/
  .page4{
    width: 80%;
    margin: 0 auto;
    margin-top: @marginTop;
    >div {
      font-size: 2.5em;
    }
    ul.page4_ul1{
      overflow: hidden;
      margin-bottom: 4em;
      li.page4_ul1_li{
        float: left;
        width: 33%;
        b{
          font-size: 3em;
        }
        p{
          font-size:1em
        }
      }
    }
    ul.page4_ul2{
      overflow: hidden;
      margin-top: 4em;
      li.page4_ul2_li{
        float:left;
        width: 25%;
        div{
          margin-bottom: 1em;
          >img{
            border-radius: 60%;
            width: 75%;
          }
        }
        p{
          color:@Orange;
        }
      }
    }
  }

  /*第五页*/
  .page5{
    margin-top: @marginTop;
    .page5_li{
      margin-bottom: @marginBottom;
      .page5_li_b{
        .b(3vw);
      }
      p{
        .p1();
      }
    }
  }
</style>
