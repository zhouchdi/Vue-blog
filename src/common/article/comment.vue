<template>
  <div class="comment">
    <div class="comment_title">
      <h3>
        评论<b>92</b>
      </h3>
    </div>
    <div class="comment_textarea">
      <form action="" method="post">
        <div class="comment_author_img">
          <img src="../../assets/images/jspang/none.png" alt="人物">
        </div>
        <div class="comment_textarea_text">
          <textarea name="" id="" cols="30" rows="10" placeholder="你的评论可以一针见血"></textarea>
          <div class="comment_textarea_button">
            <button type="submit">提交评论</button>
          </div>
        </div>
      </form>
    </div>
    <ul class="comments">
      <!--单个回答-->
      <Says
        v-for="(comment,index) in reverseComments"
        :comment="comment"
        :key="index"
        :showFloor="true"
        :index="comsLength(index)"
      ></Says>
    </ul>
  </div>
</template>

<script>
  // 评论的楼数
  let commentsLength = 0;
  import Says from './says'
    export default {
        name: "comment",
      components:{
          Says:Says
      },
      data(){
          return {
            comments:[
              {
                'txt':'123',
                'times':'2个月前'
              },
              {
                'txt':'234',
                'times':'1个月前'
              },
              {
                'txt':'345',
                'times':'4星期前',
                children:[
                  {
                    'txt':'346',
                    'times':'4星期前'
                  }
                ]
              },
              {
                'txt':'456',
                'times':'3星期前',
                children:[
                  {
                    'txt':'457',
                    'times':'2星期前'
                  },
                  {
                    'txt':'468',
                    'times':'2星期前',
                    children:[
                      {
                        'txt':'479',
                        'times':'1星期前'
                      }
                    ]
                  }
                ]
              }
            ]
          }
      },
      computed:{
        // 将评论逆转使得最新的评论出现在最上面
        reverseComments:function(){
          return this.comments.reverse();
        }
      },
      methods:{
        //  评论楼层数
        comsLength:function(index){
          commentsLength = this.comments.length;
          commentsLength -= index;
          return commentsLength;
        }
      }
    }
</script>

<style lang="less">
  .comment_author_img(){
    color: #999;
    float: left;
    width: 36px;
    margin-left: -46px;
    img{
      height: 36px;
      width: 36px;
      border-radius: 50%;
      margin-bottom: 5px;
    }
  }
  .comment{
    .comment_title{
      margin-bottom: 15px;
      overflow: hidden;
      border-bottom: 1px solid #eaeaea;
      padding: 10px 0;
      h3{
        font-size: 20px;
        float: left;
        font-weight: 500;
        b{
          font-weight: normal;
          color: #ff5e52;
          display: inline-block;
          margin-left: 5px;
        }
      }
    }
    .comment_textarea{
      padding-bottom: 25px;
      position: relative;
      padding-left: 46px;
      overflow: hidden;
      .comment_author_img{
        .comment_author_img();
      }
      .comment_textarea_text{
        float: left;
        border: 2px solid #ccd4d9;
        border-top-right-radius: 3px;
        border-top-left-radius: 3px;
        padding: 5px;
        padding-bottom: 0;
        background-color: #fff;
        width: 100%;
        textarea{
          width: 100%;
          resize: none;
          overflow-x: hidden;
          overflow-y: auto;
          border: none;
          line-height: 22px;
          font-size: 14px;
          outline: 0;
          color: #666;
          height: 68px;
        }
        .comment_textarea_button{
          background-color: #fbfbfb;
          border-top: 1px solid #f2f2f2;
          border-bottom: 1px solid #ccd4d9;
          height: 36px;
          position: relative;
          bottom: -1px;
          margin-left: -11px;
          left: 6px;
          overflow: inherit;
          button{
            outline:none;
            border: 0;
            background-color: #8AC78F;
            color: #fff;
            width: 100px;
            font-size: 16px;
            text-align: center;
            line-height: 36px;
            position: absolute;
            right: 0;
            bottom: -1px;
          }
        }
      }
    }
    .comments{
      li{
        .comment_text{
          border-bottom: #eee 1px solid;
          padding: 25px 0 25px 46px;
          position: relative;
          overflow: hidden;
          max-height: 300px;
          .comment_author_img{
            .comment_author_img();
          }
          .comment_text_info{
            float: left;
            text-align: left;
            color: #888;
            line-height: 22px;
            font-size: 14px;
            margin-right: 60px;
            p:last-child{
              font-size: 12px;
              color: #bbb;
              time{
                padding: 0 15px;
              }
            }
          }
          .comment_text_floor{
            float: right;
            color: #bbb;
            margin-left: -60px;
          }
        }
        >ul.comment_text_children{
          margin-left: 46px;
        }
      }
      li:hover{
        .comment_text_floor{
          color: #000;
        }
      }
    }
  }
</style>
