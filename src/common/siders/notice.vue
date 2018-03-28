<template>
  <div class="notices sidebar_fadiv">
    <!--标题-->
    <ul class="sidebar_fadiv_ul1_active">
      <li><b>网站公告</b></li>
    </ul>
    <!--内容-->
    <ul class="notices_ul">
      <li v-for="item in notices">
        <a href="">{{ item.text }}</a><time>{{ item.time }}</time>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "notice",
        data(){
          return{
            notices:[
              {
                'text':'非常抱歉实战课程推迟',
                'time':'03-15'
              },
              {
                'text':'这几天公司疯狂加班 导致没时间回复留言',
                'time':'03-09'
              },
              {
                'text':'狗年大吉大利 开工上班',
                'time':'02-22'
              },
              {
                'text':'祝大家春节快乐 回来我要放大招',
                'time':'02-13'
              },
              {
                'text':'感冒好多了，开始继续更新课程',
                'time':'01-10'
              }
            ]
          };
        }
    }
</script>

<style lang="less">
  @green: #8AC78F;
  .notices{
    height: 200px;
    /*标题*/
    /*内容*/
    ul.notices_ul{
      padding: 15px;
      li{
        margin-bottom: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 12px;
        clear: both;
        a{
          display: inline-block;
          float: left;
          color: #666;
        }
        a:hover{
          color:@green;
        }
        time{
          display: inline-block;
          float: right;
        }
      }
      li:first-child{
        a{
          font-weight: bold;
        }
      }
    }
  }
</style>
