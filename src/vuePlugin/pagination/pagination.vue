<template>
  <div class="page-bar">
    <ul>
      <li>
        <a
        :class="setButtonClass(0)"
        v-on:click="prvePage(curIndex)">上一页
        </a>
      </li>
      <li
       v-for="index in indexs"
       v-bind:class="{ active: curIndex == index }">
        <a
        v-on:click="btnClick(index)">{{ index < 1 ? "..." : index }}
        </a>
      </li>
      <li>
        <a
        :class="setButtonClass(1)"
        v-on:click="nextPage(curIndex)">下一页
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
     props: ['cur', 'all'],
     data() {
      return{
        curIndex: 1
      };
     },
     computed: {
      indexs: function () {
        var left = 1;
        var right = this.all;
        var ar = [];
        if (this.all >= 11) {
          if (this.curIndex > 5 && this.curIndex < this.all - 4) {
            left = this.curIndex - 5;
            right = this.curIndex + 4;
          } else {
            if (this.curIndex <= 5) {
              left = 1;
              right = 10;
            } else {
              right = this.all;
              left = this.all - 9;
            }
          }
        }
        while (left <= right) {
          ar.push(left);
          left++;
        }
        if (ar[0] > 1) {
          ar[0] = 1;
          ar[1] = -1;
        }
        if (ar[ar.length - 1] < this.all) {
          ar[ar.length - 1] = this.all;
          ar[ar.length - 2] = 0;
        }
        return ar;
      }
    },
    methods: {
    // 页码点击事件
      btnClick: function (data) {
        if (data < 1) return;
        if (data != this.curIndex) {
          this.curIndex = data;
        }
      },
      // 下一页
      nextPage: function (data) {
        if (this.curIndex >= this.all) return;
        this.btnClick(this.curIndex + 1);
      },
      // 上一页
      prvePage: function (data) {
        if (this.curIndex <= 1) return;
        this.btnClick(this.curIndex - 1);
      },
      // 设置按钮禁用样式
      setButtonClass: function (isNextButton) {
        if (isNextButton) {
          return this.curIndex >= this.all ? "page-button-disabled" : "";
        }
        else {
          return this.curIndex <= 1 ? "page-button-disabled" : "";
        }
      }
    }
  }
</script>

<style scoped lang="less">
   @import "./pagination.less";
</style>
