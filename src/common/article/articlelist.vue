<template>
    <div class="articlelist">
      <!--目录标题-->
      <div class="articlelist_title">
        <h3>目录 <span>[<a href="#" @click.prevent="hideList">隐藏</a>]</span></h3>
      </div>
      <!--目录内容-->
      <ul class="articlelist_content">
        <li v-for="item in artsList">
          <a :href="'#'+item._id">{{ item._title }}</a>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "articlelist",
      props:{
        artsList:Array
      },
      methods:{
        hideList:function(){
          let uul = $('ul.articlelist_content')
            if($(uul).attr('style')){
              $(uul).attr('style','').addClass('animated lightSpeedIn');

              setTimeout(function(){
                $(uul).removeClass('animated lightSpeedIn');
              },1000);
            }else{
              $(uul).addClass('animated lightSpeedOut');

              setTimeout(function(){
                $(uul).removeClass('animated lightSpeedOut').attr('style','display:none');
              },1000);
            };
        }
      }
    }
</script>

<style lang="less">
  @green:#8AC78F;
  .articlelist{
    background: #f9f9f9;
    border: 1px solid #aaa;
    padding: 10px;
    width: auto;
    display: table;
    font-size: 95%;
    margin-left: 10px;
    margin-bottom: 1em;
    float: right;
    .articlelist_title{
      h3{
        text-align: center;
        span{
          font-weight: normal;
          a{
            color:@green;
            font-size: 85%;
          }
          a:hover{
            color: red;
          }
        }
      }
    }
    .articlelist_content{
      text-align: left;
      margin-top: 2em;
      font-size: 80%;
      li{
        padding-left: 12px;
        height: 18px;
        a{
          color:@green;
        }
        a:hover{
          color: red;
        }
      }
    }
  }
</style>
