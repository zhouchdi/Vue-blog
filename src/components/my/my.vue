<template>
  <div class="my">
    <el-tabs type="card">
      <el-tab-pane label="个人资料">
        <!--第一页-->
        <ul class="page1">
          <li class="page1_li"><b class="page1_li_b">周昌狄</b></li>
          <li class="page1_li"><p>外号：小六，90后新进程序员，正在前端的道路上前行</p></li>
          <li class="page1_li"><p class="page1_li_p">正和程序处于1年的新婚蜜月期</p></li>
          <li class="page1_li">
            <ul>
              <li>
                <img class="my_pict" src="../../assets/images/my/tou1.png" alt="程序员头部变迁史">
                <p>现在</p>
                <p>怀揣计算机天才梦的帅气少年
                  超级小白</p>
              </li>
              <li>
                <img class="my_pict" src="../../assets/images/my/tou2.png" alt="程序员头部变迁史">
                <p>3年后</p>
                <p>热爱编程变得不修边幅
                  项目组长</p>
              </li>
              <li>
                <img class="my_pict" src="../../assets/images/my/tou3.png" alt="程序员头部变迁史">
                <p>6年后</p>
                <p>头发最终没战胜辐射和头油
                  技术负责人</p>
              </li>
            </ul>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="个人评价">消息中心</el-tab-pane>
      <el-tab-pane label="专业技术">角色管理</el-tab-pane>
      <el-tab-pane label="项目经验">定时任务补偿</el-tab-pane>
      <el-tab-pane label="工作经历">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
    export default {
        name: "my"
    }
</script>

<style scoped lang="less">
  @fsbig:8vw;
  @fssmall:2vw;

  .my {
    width: 100vw;
    height: 100vh;
  }
  /*第一页*/
  .page1{
    margin-top: 10vh;
    .page1_li {
      margin-bottom: 5vh;
      b(@fsbig) when (@fsbig){
        font-size: 8vw;
        color: #666666;
      }

      p {
        font-size:2vw;
        opacity: .8;
      }

      p.page1_li_p{
        color: #FF8A3B;
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
            width: 10vw;
            height: 10vh;
            border: 0;
          }
        }
      }
    }
  }
</style>
