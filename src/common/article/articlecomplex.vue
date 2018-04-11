<template>
  <div class="content">
    <div class="article">
      <!--标题-->
      <div class="article_title">
        <h2><a href="#">技术胖的vuex视频教程</a></h2>
        <p><span>2017-05-03</span><span>分类：<a href="#">Vue.js视频教程</a></span><span>阅读(59528)</span><span>评论(82)</span></p>
      </div>
      <!--主要内容-->
      <div class="article_content">
        <!--目录组件-->
        <articlelist :artsList="artsList"></articlelist>
        <h3>前言：</h3>
        <p>公司项目中大量的使用了vue，感觉对vue知识的掌握也越来越熟练了，录制视频教程也让我受益匪浅，自己成长的同时，我更希望帮助其他前端小伙伴一起成长。这篇文章我们主要讲解vuex。</p>
        <p><b>vuex</b>是一个专门为vue.js设计的集中式<b>状态</b>管理架构。状态？我把它理解为在data中的属性需要共享给其他vue组件使用的部分，就叫做状态。简单的说就是<b>data中需要共用的属性</b>。比如：我们有几个页面要显示用户名称和用户等级，或者显示用户的地理位置。如果我们不把这些属性设置为状态，那每个页面遇到后，都会到服务器进行查找计算，返回后再显示。
          在中大型项目中会有很多共用的数据，所以尤大神给我们提供了vuex。</p>
        <h1><span id="001">第1节：初出茅庐 来个小Demo</span></h1>
        <p>我们还是利用vue-cli 的webpack生成我们的项目结构,如果你对vue-cli的知识不了解，可以花二三十分钟去看一下这个视频教程：<a href="#">http://jspang.com/2017/04/10/vue-cli/</a>  。项目目录生成后，引入我们的Vuex插件。</p>
        <h3>引入vuex</h3>
        <p>1.利用npm包管理工具，进行安装 vuex。在控制命令行中输入下边的命令就可以了。</p>

        <p>需要注意的是这里一定要加上 --save，因为你这个包我们在生产环境中是要使用的。</p>
        <p>2.新建一个vuex文件夹（这个不是必须的），并在文件夹下新建store.js文件，文件中引入我们的vue和vuex。</p>

        <p>3.使用我们vuex，引入之后用Vue.use进行引用。</p>

        <p>通过这三步的操作，vuex就算引用成功了，接下来我们就可以尽情的玩耍了。</p>
        <h3>入门小Demo(推荐视频观看)：</h3>
        <p>我们这个小案例先声明一个state的count状态，在页面中使用显示这个count，然后可以利用按钮进行加减，如果你看过我的文章，你一定知道，在我们学基础知识 的时候经常编写这个程序。我们来张图片帮大家回忆一下。</p>
        <p><img src="../../assets/images/jspang/20170227091542.png" alt="demo示例图"></p>
        <p>就是这个程序，不过我们这次要用的是vuex来进行制作，并实现数据的共享。</p>
        <p>1.现在我们store.js文件里增加一个常量对象。store.js文件就是我们在引入vuex时的那个文件。</p>
        <div class=dp-highlighter>
          <ol class=dp-c>
          <li class=alt><span><span class=keyword>const</span><span>&nbsp;state={ &nbsp;&nbsp;</span></span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;count:1 &nbsp;&nbsp;</span></li>
          <li class=alt><span>}&nbsp;&nbsp;</span></li></ol>
        </div>
        <p>2.用export default 封装代码，让外部可以引用。</p>
        <div class=dp-highlighter><div class=bar></div>
          <ol class=dp-c>
          <li class=alt><span><span class=keyword>export</span><span>&nbsp;</span><span class=keyword>default</span><span>&nbsp;</span><span class=keyword>new</span><span>&nbsp;Vuex.Store({ &nbsp;&nbsp;</span></span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;state &nbsp;&nbsp;</span></li>
          <li class=alt><span>})&nbsp;&nbsp;</span></li></ol>
        </div>
        <p>3.新建一个vue的模板，位置在components文件夹下，名字叫count.vue。在模板中我们引入我们刚建的store.js文件，并在模板中用<span v-pre>{{$store.state.count}}</span>输出count 的值。</p>      
        <div class=dp-highlighter v-pre>
          <ol class=dp-c>
          <li class=alt><span><span>&lt;template&gt; &nbsp;&nbsp;</span></span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt; &nbsp;&nbsp;</span></li>
          <li class=alt><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;{{msg}}&lt;/h2&gt; &nbsp;&nbsp;</span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;hr/&gt; &nbsp;&nbsp;</span></li>
          <li class=alt><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h3&gt;{{$store.state.count}}&lt;/h3&gt; &nbsp;&nbsp;</span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt; &nbsp;&nbsp;</span></li>
          <li class=alt><span>&lt;/template&gt; &nbsp;&nbsp;</span></li>
          <li><span>&lt;script&gt; &nbsp;&nbsp;</span></li>
          <li class=alt><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class=keyword>import</span><span>&nbsp;store&nbsp;from&nbsp;'@/vuex/store' &nbsp;&nbsp;</span></span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class=keyword>export</span><span>&nbsp;</span><span class=keyword>default</span><span>{ &nbsp;&nbsp;</span></span></li>
          <li class=alt><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data(){ &nbsp;&nbsp;</span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class=keyword>return</span><span>{ &nbsp;&nbsp;</span></span></li>
          <li class=alt><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;msg:'Hello&nbsp;Vuex', &nbsp;&nbsp;</span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;&nbsp;</span></li>
          <li class=alt><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}, &nbsp;&nbsp;</span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;store &nbsp;&nbsp;</span></li>
          <li class=alt><span>&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;&nbsp;</span></li>
          <li><span>&lt;/script&gt;&nbsp;&nbsp;</span></li></ol>
        </div>
        <p>4.在store.js文件中加入两个改变state的方法。</p>
        <div class=dp-highlighter>
          <ol class=dp-c>
          <li class=alt><span><span class=keyword>const</span><span>&nbsp;mutations={ &nbsp;&nbsp;</span></span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;add(state){ &nbsp;&nbsp;</span></li>
          <li class=alt><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state.count++; &nbsp;&nbsp;</span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;}, &nbsp;&nbsp;</span></li>
          <li class=alt><span>&nbsp;&nbsp;&nbsp;&nbsp;reduce(state){ &nbsp;&nbsp;</span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state.count--; &nbsp;&nbsp;</span></li>
          <li class=alt><span>&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;&nbsp;</span></li>
          <li><span>}&nbsp;&nbsp;</span></li></ol>
        </div>
        <p>这里的mutations是固定的写法，意思是改变的，我们到时候会用一节课专门讲这个mutations，所以你先不用着急，只知道我们要改变state的数值的方法，必须写在mutations里就可以了。</p>
        <p>5.在count.vue模板中加入两个按钮，并调用mutations中的方法。</p>
        <div class=dp-highlighter v-pre>
          <ol class=dp-c>
          <li class=alt><span><span>&lt;div&gt; &nbsp;&nbsp;</span></span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;button&nbsp;@click=</span><span class=string>"$store.commit('add')"</span><span>&gt;+&lt;/button&gt; &nbsp;&nbsp;</span></span></li>
          <li class=alt><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;button&nbsp;@click=</span><span class=string>"$store.commit('reduce')"</span><span>&gt;-&lt;/button&gt; &nbsp;&nbsp;</span></span></li>
          <li><span>&lt;/div&gt;&nbsp;&nbsp;</span></li></ol>
        </div>
        <p>这样进行预览就可以实现对vuex中的count进行加减了。</p>
    
        <h1><span id="002">第2节：state访问状态对象</span></h1>
        <p>在第1节我们已经写了一个 const state ，这个就是我们说的访问状态对象，它就是我们SPA（单页应用程序）中的共享值。今天我们主要学习状态对象赋值给内部对象，也就是把stroe.js中的值，赋值给我们模板里data中的值。我们有三种赋值方式，我们一个一个来学习一下。</p>
        <h3>一、通过computed的计算属性直接赋值</h3>
        <p>computed属性可以在输出前，对data中的值进行改变，我们就利用这种特性把store.js中的state值赋值给我们模板中的data值。</p>
        <div class=dp-highlighter>
          <ol class=dp-c>
          <li class=alt><span><span>computed:{ &nbsp;&nbsp;</span></span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;count(){ &nbsp;&nbsp;</span></li>
          <li class=alt><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class=keyword>return</span><span>&nbsp;</span><span class=keyword>this</span><span>.$store.state.count; &nbsp;&nbsp;</span></span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;&nbsp;</span></li>
          <li class=alt><span>}&nbsp;&nbsp;</span></li></ol>
        </div>
        <p>这里需要注意的是return this.$store.state.count这一句，一定要写this，要不你会找不到$store的。这种写法很好理解，但是写起来是比较麻烦的，那我们来看看第二种写法。</p>
        <h3>二、通过mapState的对象来赋值</h3>
        <p>我们首先要用import引入mapState。</p>
        <div class=dp-highlighter>
          <ol class=dp-c>
          <li class=alt><span><span class=keyword>import</span><span>&nbsp;{mapState}&nbsp;from&nbsp;'vuex';&nbsp;&nbsp;</span></span></li></ol>
        </div>
        <p>然后还在computed计算属性里写如下代码：</p>
        <div class=dp-highlighter><ol class=dp-c>
          <li class=alt><span><span>computed:mapState({ &nbsp;&nbsp;</span></span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count:state=&gt;state.count &nbsp;&nbsp;</span></li>
          <li class=alt><span>&nbsp;})&nbsp;&nbsp;</span></li></ol>
        </div>
        <p>这里我们使用ES6的箭头函数来给count赋值。</p>
        <h3>三、通过mapState的数组来赋值</h3>
        <div class=dp-highlighter>
          <ol class=dp-c>
          <li class=alt><span><span>computed:mapState([</span><span class=string>"count"</span><span>])&nbsp;&nbsp;</span></span></li></ol>
        </div>
        <p>这个算是最简单的写法了，在实际项目开发当中也经常这样使用。</p>
        <p>这就是三种赋值方式，是不是很简单，虽然简单，但是在实际项目中经常使用，一定要自己动手练习两遍啊。</p>

        <h1><span id="003">第3节：Mutations修改状态</span></h1>
        <p>上节课我们学习了怎么样读取state，那今天我们学习一下怎么样修改状态。这个常量我们在第一节课的时候也碰到过，并且进行了加减的操作。那这节课我们就具体学习一下，如何操作Mutations。</p>
        <h3>$store.commit( )</h3>
        <p>Vuex提供了commit方法来修改状态，我们粘贴出第一节课的代码内容，简单回顾一下，我们在button上的修改方法。</p>
        <div class=dp-highlighter>
          <ol class=dp-c>
          <li class=alt><span><span>&lt;button&nbsp;@click=</span><span class=string>"$store.commit('add')"</span><span>&gt;+&lt;/button&gt; &nbsp;&nbsp;</span></span></li>
          <li><span>&lt;button&nbsp;@click=</span><span class=string>"$store.commit('reduce')"</span><span>&gt;-&lt;/button&gt;&nbsp;&nbsp;</span></span></li></ol>
        </div>
        <p>store.js文件：</p>
        <div class=dp-highlighter>
          <ol class=dp-c>
          <li class=alt><span><span class=keyword>const</span><span>&nbsp;mutations={ &nbsp;&nbsp;</span></span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;add(state){ &nbsp;&nbsp;</span></li>
          <li class=alt><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state.count++; &nbsp;&nbsp;</span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;}, &nbsp;&nbsp;</span></li>
          <li class=alt><span>&nbsp;&nbsp;&nbsp;&nbsp;reduce(state){ &nbsp;&nbsp;</span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state.count--; &nbsp;&nbsp;</span></li>
          <li class=alt><span>&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;&nbsp;</span></li>
          <li><span>}&nbsp;&nbsp;</span></li></ol>
        </div>
        <h3>传值：</h3>
        <p>这只是一个最简单的修改状态的操作，在实际项目中我们常常需要在修改状态时传值。比如上边的例子，是我们每次只加1，而现在我们要通过所传的值进行相加。其实我们只需要在Mutations里再加上一个参数，并在commit的时候传递就就可以了。我们来看具体代码：</p>
        <p>现在store.js文件里给add方法加上一个参数n。添加的地方我已经标黄了。</p>
        <div class=dp-highlighter>
          <ol class=dp-c>
          <li class=alt><span><span class=keyword>const</span><span>&nbsp;mutations={ &nbsp;&nbsp;</span></span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;add(state,n){ &nbsp;&nbsp;</span></li>
          <li class=alt><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state.count+=n; &nbsp;&nbsp;</span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;}, &nbsp;&nbsp;</span></li>
          <li class=alt><span>&nbsp;&nbsp;&nbsp;&nbsp;reduce(state){ &nbsp;&nbsp;</span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state.count--; &nbsp;&nbsp;</span></li>
          <li class=alt><span>&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;&nbsp;</span></li>
          <li><span>}&nbsp;&nbsp;</span></li></ol>
        </div>
        <p>在Count.vue里修改按钮的commit( )方法传递的参数，我们传递10，意思就是每次加10.</p>
        <div class=dp-highlighter>
          <ol class=dp-c>
          <li class=alt><span><span>&lt;p&gt; &nbsp;&nbsp;</span></span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&lt;button&nbsp;@click=</span><span class=string>"$store.commit('add',10)"</span><span>&gt;+&lt;/button&gt; &nbsp;&nbsp;</span></span></li>
          <li class=alt><span>&nbsp;&nbsp;&nbsp;&lt;button&nbsp;@click=</span><span class=string>"$store.commit('reduce')"</span><span>&gt;-&lt;/button&gt; &nbsp;&nbsp;</span></span></li>
          <li><span>&lt;/p&gt;&nbsp;&nbsp;</span></li></ol>
        </div>
        <p>这样两个简单的修改我们就完成了传值，我们可以在浏览器中实验一下了。</p>
        <h3>模板获取Mutations方法</h3>
        <p>实际开发中我们也不喜欢看到$store.commit( )这样的方法出现，我们希望跟调用模板里的方法一样调用。</p>
        <p>例如：@click="reduce"   就和没引用vuex插件一样。</p>
        <p>要达到这种写法，只需要简单的两部就可以了：</p>
        <ol class="ol">
          <li>
            在模板count.vue里用import 引入我们的mapMutations：
            <div class=dp-highlighter style="margin-top:10px">
              <ol class=dp-c>
              <li class=alt><span><span class=keyword>import</span><span>&nbsp;{&nbsp;mapState,mapMutations&nbsp;}&nbsp;from&nbsp;'vuex';&nbsp;&nbsp;</span></span></li></ol>
            </div>
          </li>
          <li>
            在模板的< script>标签里添加methods属性，并加入mapMutations
            <div class=dp-highlighter style="margin-top:10px"><ol class=dp-c>
              <li class=alt><span><span>methods:mapMutations([ &nbsp;&nbsp;</span></span></li>
              <li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'add','reduce' &nbsp;&nbsp;</span></li>
              <li class=alt><span>]),&nbsp;&nbsp;</span></li></ol>
            </div>
          </li>
        </ol>
        <p>通过上边两部，我们已经可以在模板中直接使用我们的reduce或者add方法了，就像下面这样。</p>
        <div class=dp-highlighter>
          <ol class=dp-c>
          <li class=alt><span><span>&lt;button&nbsp;@click=</span><span class=string>"reduce"</span><span>&gt;-&lt;/button&gt;&nbsp;&nbsp;</span></span></li></ol>
        </div>
        <h1><span id="004">第4节：getters计算过滤操作</span></h1>
        <p>getters从表面是获得的意思，可以把他看作在获取数据之前进行的一种再编辑,相当于对数据的一个过滤和加工。你可以把它看作store.js的计算属性。</p>
        <h3>getters基本用法：</h3>
        <p>比如我们现在要对store.js文件中的count进行一个计算属性的操作，就是在它输出前，给它加上100.</p>
        <p>我们首先要在store.js里用const声明我们的getters属性。</p>
        <div class=dp-highlighter>
          <ol class=dp-c>
          <li class=alt><span><span class=keyword>const</span><span>&nbsp;getters&nbsp;=&nbsp;{ &nbsp;&nbsp;</span></span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;count:</span><span class=keyword>function</span><span>(state){ &nbsp;&nbsp;</span></span></li>
          <li class=alt><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class=keyword>return</span><span>&nbsp;state.count&nbsp;+=100; &nbsp;&nbsp;</span></span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;&nbsp;</span></li>
          <li class=alt><span>}&nbsp;&nbsp;</span></li></ol>
        </div>
        <p>写好了gettters之后，我们还需要在Vuex.Store()里引入，由于之前我们已经引入了state盒mutations，所以引入里有三个引入属性。代码如下，</p>
        <div class=dp-highlighter>
          <ol class=dp-c>
          <li class=alt><span><span class=keyword>export</span><span>&nbsp;</span><span class=keyword>default</span><span>&nbsp;</span><span class=keyword>new</span><span>&nbsp;Vuex.Store({ &nbsp;&nbsp;</span></span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;state,mutations,getters &nbsp;&nbsp;</span></li>
          <li class=alt><span>})&nbsp;&nbsp;</span></li></ol>
        </div>
        <p>在store.js里的配置算是完成了，我们需要到模板页对computed进行配置。在vue 的构造器里边只能有一个computed属性，如果你写多个，只有最后一个computed属性可用，所以要对上节课写的computed属性进行一个改造。改造时我们使用ES6中的展开运算符"..."。</p>
        <div class=dp-highlighter>
          <ol class=dp-c>
          <li class=alt><span><span>computed:{ &nbsp;&nbsp;</span></span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;...mapState([</span><span class=string>"count"</span><span>]), &nbsp;&nbsp;</span></span></li>
          <li class=alt><span>&nbsp;&nbsp;&nbsp;&nbsp;count(){ &nbsp;&nbsp;</span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class=keyword>return</span><span>&nbsp;</span><span class=keyword>this</span><span>.$store.getters.count; &nbsp;&nbsp;</span></span></li>
          <li class=alt><span>&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;&nbsp;</span></li>
          <li><span>},&nbsp;&nbsp;</span></li></ol>
        </div>
        <p>需要注意的是，你写了这个配置后，在每次count 的值发生变化的时候，都会进行加100的操作。</p>
        <h3>用mapGetters简化模板写法：</h3>
        <p>我们都知道state和mutations都有map的引用方法把我们模板中的编码进行简化，我们的getters也是有的，我们来看一下代码。</p>
        <p>首先用import引入我们的mapGetters</p>
        <div class=dp-highlighter>
          <ol class=dp-c>
          <li class=alt><span><span class=keyword>import</span><span>&nbsp;{&nbsp;mapState,mapMutations,mapGetters&nbsp;}&nbsp;from&nbsp;'vuex';&nbsp;&nbsp;</span></span></li></ol>
        </div>
        <p>在computed属性中加入mapGetters</p>
        <div class=dp-highlighter>
          <ol class=dp-c>
          <li class=alt><span><span>...mapGetters([</span><span class=string>"count"</span><span>])&nbsp;&nbsp;</span></span></li></ol>
        </div>
        <p>相信大家已经会了getters的用法，那我们下节课见了。</p>

        <h1><span id="005">第5节：actions异步修改状态</span></h1>
        <p>actions和之前讲的Mutations功能基本一样，不同点是，actions是异步的改变state状态，而Mutations是同步改变状态。至于什么是异步什么是同步这里我就不做太多解释了，如果你不懂自己去百度查一下吧。（视频中有讲解）</p>
        <h3>在store.js中声明actions</h3>
        <p>actions是可以调用Mutations里的方法的，我们还是继续在上节课的代码基础上进行学习，在actions里调用add和reduce两个方法。</p>
        <div class=dp-highlighter>
          <ol class=dp-c>
          <li class=alt><span><span class=keyword>const</span><span>&nbsp;actions&nbsp;={ &nbsp;&nbsp;</span></span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;addAction(context){ &nbsp;&nbsp;</span></li>
          <li class=alt><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;context.commit('add',10) &nbsp;&nbsp;</span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;}, &nbsp;&nbsp;</span></li>
          <li class=alt><span>&nbsp;&nbsp;&nbsp;&nbsp;reduceAction({commit}){ &nbsp;&nbsp;</span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;commit('reduce') &nbsp;&nbsp;</span></li>
          <li class=alt><span>&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;&nbsp;</span></li>
          <li><span>}&nbsp;&nbsp;</span></li></ol>
        </div>
        <p>在actions里写了两个方法addAction和reduceAction，在方法体里，我们都用commit调用了Mutations里边的方法。细心的小伙伴会发现这两个方法传递的参数也不一样。</p>
        <ul>
          <li>context：上下文对象，这里你可以理解称store本身。</li>
          <li>{commit}：直接把commit对象传递过来，可以让方法体逻辑和代码更清晰明了。</li>
        </ul>
        <h3>模板中的使用</h3>
        <p>我们需要在count.vue模板中编写代码，让actions生效。我们先复制两个以前有的按钮，并改成我们的actions里的方法名，分别是：addAction和reduceAction。</p>
        <div class=dp-highlighter>
          <ol class=dp-c>
          <li class=alt><span><span>&lt;p&gt; &nbsp;&nbsp;</span></span></li>
          <li><span>&nbsp;&nbsp;&lt;button&nbsp;@click=</span><span class=string>"addAction"</span><span>&gt;+&lt;/button&gt; &nbsp;&nbsp;</span></span></li>
          <li class=alt><span>&nbsp;&nbsp;&lt;button&nbsp;@click=</span><span class=string>"reduceAction"</span><span>&gt;-&lt;/button&gt; &nbsp;&nbsp;</span></span></li>
          <li><span>&lt;/p&gt;&nbsp;&nbsp;</span></li></ol>
        </div>
        <p>改造一下我们的methods方法，首先还是用扩展运算符把mapMutations和mapActions加入。</p>
        <div class=dp-highlighter><ol class=dp-c>
          <li class=alt><span><span>methods:{ &nbsp;&nbsp;</span></span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;...mapMutations([&nbsp;&nbsp; &nbsp;&nbsp;</span></li>
          <li class=alt><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'add','reduce' &nbsp;&nbsp;</span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;]), &nbsp;&nbsp;</span></li>
          <li class=alt><span>&nbsp;&nbsp;&nbsp;&nbsp;...mapActions(['addAction','reduceAction']) &nbsp;&nbsp;</span></li>
          <li><span>},&nbsp;&nbsp;</span></li></ol>
        </div>
        <p>你还要记得用import把我们的mapActions引入才可以使用。</p>
        <h3>增加异步检验</h3>
        <p>我们现在看的效果和我们用Mutations作的一模一样，肯定有的小伙伴会好奇，那actions有什么用，我们为了演示actions的异步功能，我们增加一个计时器（setTimeOut）延迟执行。在addAction里使用setTimeOut进行延迟执行。</p>
        <div class=dp-highlighter><ol class=dp-c>
          <li class=alt><span><span>setTimeOut(()=&gt;{context.commit(reduce)},3000); &nbsp;&nbsp;</span></span></li>
          <li><span>console.log('我比reduce提前执行');&nbsp;&nbsp;</span></li></ol>
        </div>
        <p>我们可以看到在控制台先打印出了‘我比reduce提前执行’这句话。</p>

        <h1><span id="006">第6节：module模块组</span></h1>
        <p>随着项目的复杂性增加，我们共享的状态越来越多，这时候我们就需要把我们状态的各种操作进行一个分组，分组后再进行按组编写。那今天我们就学习一下module：状态管理器的模块组操作。</p>
        <h3>声明模块组：</h3>
        <p>在vuex/store.js中声明模块组，我们还是用我们的const常量的方法声明模块组。代码如下：</p>
        <div class=dp-highlighter>
          <ol class=dp-c>
          <li class=alt><span><span class=keyword>const</span><span>&nbsp;moduleA={ &nbsp;&nbsp;</span></span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;state,mutations,getters,actions &nbsp;&nbsp;</span></li>
          <li class=alt><span>}&nbsp;&nbsp;</span></li></ol>
        </div>
        <p>声明好后，我们需要修改原来 Vuex.Stroe里的值：</p>
        <div class=dp-highlighter>
          <ol class=dp-c>
          <li class=alt><span><span class=keyword>export</span><span>&nbsp;</span><span class=keyword>default</span><span>&nbsp;</span><span class=keyword>new</span><span>&nbsp;Vuex.Store({ &nbsp;&nbsp;</span></span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;modules:{a:moduleA} &nbsp;&nbsp;</span></li>
          <li class=alt><span>})&nbsp;&nbsp;</span></li></ol>
        </div>
        <h3>在模板中使用</h3>
        <p>现在我们要在模板中使用count状态，要用插值的形式写入。</p>
        <div class=dp-highlighter v-pre><ol class=dp-c>
          <li class=alt><span><span>&lt;h3&gt;{{$store.state.a.count}}&lt;/h3&gt;&nbsp;&nbsp;</span></span></li></ol>
        </div>
        <p>如果想用简单的方法引入，还是要在我们的计算属性中rutrun我们的状态。写法如下：</p>
        <div class=dp-highlighter>
          <ol class=dp-c>
          <li class=alt><span><span>computed:{ &nbsp;&nbsp;</span></span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;count(){ &nbsp;&nbsp;</span></li>
          <li class=alt><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class=keyword>return</span><span>&nbsp;</span><span class=keyword>this</span><span>.$store.state.a.count; &nbsp;&nbsp;</span></span></li>
          <li><span>&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;&nbsp;</span></li>
          <li class=alt><span>},&nbsp;&nbsp;</span></li></ol>
        </div>

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
  import articlelist from '@/common/article/articlelist'
  // 推荐
  import recommend from '@/common/article/recommend'
  // 评论
  import comment from '@/common/article/comment'
    export default {
      name: "articlecomplex",
      components:{
        articlelist:articlelist,
        recommend:recommend,
        comment:comment
      },
      data(){
        return {
          // 文章目录
          artsList:[
            {
              _id:'001',
              _title:'第1节：初出茅庐 来个小Demo'
            },
            {
              _id:'002',
              _title:'第2节：state访问状态对象'
            },
            {
              _id:'003',
              _title:'第3节：Mutations修改状态'
            },
            {
              _id:'004',
              _title:'第4节：getters计算过滤操作'
            },
            {
              _id:'005',
              _title:'第5节：actions异步修改状态'
            },
            {
              _id:'006',
              _title:'第6节：module模块组'
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
              "bdMinilist" : false,
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
  @import '../../assets/css/highlight.css';
  .article{
    .article_content{
      .articlelist{
        ul{
          margin:0;
          list-style:none;
          li{
            list-style:none;
          }
        }
      }
      h3{
        margin: 20px 0;
        font-size: 16px;
      }
      p{
        >img{
          display: block;
          margin: 0 auto;
        }
        a{
          color: @green;
          text-decoration: underline;
        }
        a:hover{
          color: red;
        }
      }
      ul{
        list-style: disc;
        margin: 0 0 20px 50px;
        li{
          list-style: disc;
          margin-bottom: 6px;
        }
      }
      .dp-highlighter{
        margin-bottom:20px;
        ol{
          padding:0;
          list-style: decimal;
          margin: 0px 0px 0px 34px;
          background-color: #f8f8ff;
          li{
            list-style: decimal;
          }
        }
      }
      ol.ol{
        list-style: decimal;
        margin: 0 0 20px 50px;
        background-color: #fff;
        li{
          list-style: decimal;
          margin-bottom: 6px;
          ol{
            li{
              margin-bottom:0;
            }
          }
        }
      }
    }
  }
</style>
