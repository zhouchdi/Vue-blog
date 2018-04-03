<template>
  <div class="content">
    <div class="article">
      <!--标题-->
      <div class="article_title">
        <h2><a href="#">2018年减肥计划开始 目标50斤</a></h2>
        <p><span>2018-03-13</span><span>分类：<a href="#">生活趣事</a></span><span>阅读(1617)</span><span>评论(38)</span></p>
      </div>
      <!--主要内容-->
      <div class="article_content">
        <!--目录组件-->
        <articleList :artsList="artsList"></articleList>
        <p>2017年我减肥减掉了50斤，但是过年时开始得意忘形，大吃大喝，有时候一天喝三顿，过的非常放肆。但这个世界就是公平的，过年20几天里，以每天一斤的速度反弹着，今天早上称重回到了244.3斤。我吓傻了，竟然反弹了20几斤。今年一月份我还承诺要减掉50斤体重，现在目标实现了-20斤。记得听过一句话：</p>
        <blockquote>只要你不认输，就不会失败，只是在成功的路上。</blockquote>
        <p>我重新开始减肥，我相信今年一定可以完成我减肥的目标50斤，现在建立一个微信群（100人已满），希望有想减肥的小伙伴，我们一起入群加油，互相鼓励，一起完成今年的减肥目标。更希望有减肥成功经历的高手进入，进行指点。</p>
        <p>这篇文章我会尽量达到周更新，给小伙伴一个正面的反馈，因为技术胖的业余爱好很少，可能这篇文章也算我除程序工作外的业余生活了，所以也会发布一些生活趣事在里边。算是对2018自己生活的一个反省记录。</p>
        <h1><span id="001-242">001.勇敢的面对自己的放肆-242斤</span></h1>
        <p>日期：2018-3-13  体重： <strong>242斤</strong></p>
        <p>这是减肥的第一天，我建立了一个微信群，准备和小伙伴们一起减肥。运动是去健身房游泳一个小时，但是感觉没有游透，力气没有用完。</p>
        <p>游泳回家之后非常的饿，吃了一个苹果，三个火腿肠（非常后悔吃火腿肠）。</p>
        <h1><span id="002-240">002.第二天采用自由泳的姿势游一个小时-240.2斤</span></h1>
        <p>日期：2018-3-14 体重：<strong>240.2斤</strong></p>
        <p>目标：用自由泳的姿势游泳一个小时，并且晚上回家后只吃苹果。</p>
        <p>目标并没有实现，体重增重0.8斤。在游完泳之后，和完一起健身的小伙伴去撸串，吃了200多元钱的肉串。一边吃一边互相鼓励，这是我们的最后一顿。</p>
        <h1><span id="003-241">003.今天不去运动，但是晚饭一定不吃-241斤</span></h1>
        <p>日期：2018-3-15  体重：<strong>241斤</strong></p>
        <p>目标：中午吃玉米和两个苹果，晚上不晚饭，一个苹果代替</p>
        <p>今天晚上要陪女神看电影，所以晚上不能去运动，但是一定要控制住饮食，争取约女神去散步一小时。</p>
        <h1><span id="004-239">004.减肥5天了，作个小总结-239.8</span></h1>
        <p>日期：2018-3-18 体重：<strong>239.8斤</strong></p>
        <p>总结：5天时间，一共减重2.2斤。这个成绩自己是不满意的。让我自己找找原因：</p>
        <p>这几天运动坚持的还挺好，只有一天没去运动。但是饮食方面就没有注意了。</p>
        <p>* 3月14日：运动后去撸串并喝了三瓶啤酒。</p>
        <p>* 3月15日：和老婆吃周黑鸭60元钱的，并喝饮料1瓶。</p>
        <p>* 3月17日：和老婆中午吃火锅一顿，饮料奶茶各一瓶。</p>
        <p>* 其他是晚上吃小食品，录完课停不下来的吃。</p>
        <p>所以这周减肥效果并不好，今天开始解决晚上零食，就是一个苹果，一杯奶昔。</p>
        <h1><span id="005-244">005.深圳出差胖了5斤肉</span></h1>
        <p>日期：2018-3-27 体重：<strong>244.8斤</strong></p>
        <p>总结：深圳出差了一周多，由于出差需要跟同事一起吃饭，还有些小伙伴约饭。回来后又觉的出差很辛苦，补了两顿火锅和烤肉，今天一量体重，胖了5斤。哎，内心崩溃了。
          但是说了些减肥流水日记，就不能停下来，继续减肥。</p>
      </div>
      <!--版权申明-->
      <div class="article_copyright">
        <a href="#">未经允许不得转载：技术胖-胜洪宇关注web前端技术 » 2018年减肥开始 目标50斤</a>
      </div>
      <!--分享-->
      <div class="article_share">
        <!--百度分享配置-->
        <div class="bdsharebuttonbox bdshare-button-style">
          <span>分享到：</span>
          <a class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
          <a class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
          <a class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
          <a class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a>
          <a class="bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a>
          <a class="bds_bdhome" data-cmd="bdhome" title="分享到百度新首页"></a>
          <a class="bds_tqf" data-cmd="tqf" title="分享到腾讯朋友"></a>
          <a class="bds_youdao" data-cmd="youdao" title="分享到有道云笔记"></a>
          <a class="bds_more" data-cmd="more">更多</a> <span>(</span><a class="bds_count" data-cmd="count" title="累计分享0次">0</a><span>)</span>
        </div>
      </div>
      <!--前后跳转路由-->
      <div class="article_route">
        <!--上一篇-->
        <div class="article_route_last">
          <span>上一篇</span>
          <a href="">这几天公司疯狂加班 导致没时间回复留言</a>
        </div>
        <!--下一篇-->
        <div class="article_route_next">
          <span>下一篇</span>
          <a href="">非常抱歉实战课程推迟</a>
        </div>
      </div>
      <!--推荐内容-->
      <recommend></recommend>
      <!--评论-->
      <comment></comment>
    </div>
  </div>
</template>

<script>
  // 目录组件
  import articleList from './articlelist'
  // 推荐
  import recommend from './recommend'
  // 评论
  import comment from './comment'
    export default {
        name: "articlesimple",
      // 组件
      components:{
        articleList:articleList,
        recommend:recommend,
        comment:comment
      },
      data(){
        return {
          // 文章目录
          artsList:[
            {
              _id:'001-242',
              _title:'001.勇敢的面对自己的放肆-242斤'
            },
            {
              _id:'002-240',
              _title:'002.第二天采用自由泳的姿势游一个小时-240.2斤'
            },
            {
              _id:'003-241',
              _title:'003.今天不去运动，但是晚饭一定不吃-241斤'
            },
            {
              _id:'004-239',
              _title:'004.减肥5天了，作个小总结-239.8'
            },
            {
              _id:'005-244',
              _title:'005.深圳出差胖了5斤肉'
            }
          ]
        }
      },
      mounted(){
        this.$nextTick(function(){
          // 百度分享配置
          window._bd_share_config = {
            common : {
              "bdText"     : "",
              "bdMini"     : "2",
              "bdMiniList" : false,
              "bdPic"      : "",
              "bdStyle"    : "0",
              "bdSize"     : "24"
            }
          };
          const s = document.createElement('script');
          s.type = 'text/javascript';
          s.src = 'http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=' + ~(-new Date() / 36e5);
          (document.getElementsByClassName('article_share')[0]).appendChild(s);
        });
      }
    }
</script>

<style lang="less">
  @import '../../assets/less/article.less';
  .article{
    /*主要内容*/
    .article_content{
      blockquote{
        margin: 30px;
        padding: 15px 20px;
        font-size: 16px;
        color: #999;
        border-left: 5px solid #eee;
        user-select: none;
      }
    }
  }
</style>
