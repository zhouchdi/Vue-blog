<template>
  <li>
    <div class="comment_text">
      <div class="comment_author_img">
        <img src="../../assets/images/jspang/none.png" alt="人物">
      </div>
      <div class="comment_text_info">
        <p>{{ comment.txt }}</p>
        <p><span>匿名</span><time>{{comment.times}}</time><span>回复</span></p>
      </div>
      <div class="comment_text_floor" v-show="showFloor">
        #<span>{{ index }}</span>
      </div>
    </div>
    <!--子回答-->
    <ul class="comment_text_children" v-show="isFolder">
      <!--组件自调-->
      <Says
        v-for="(comment, index) in comment.children"
        :key="index"
        :showFloor="false"
        :comment="comment"
      ></Says>
    </ul>
  </li>
</template>

<script>
    export default {
      name: "Says",
      props:{
        comment:Object,
        showFloor:Boolean,
        index:Number
      },
      computed: {
        isFolder: function () {
          return this.comment.children &&
            this.comment.children.length
        }
      }
    }
</script>

<style lang="less">

</style>
