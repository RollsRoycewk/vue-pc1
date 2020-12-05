<template>
  <div class="pagination">
    <button>上一页</button>
    <button class="active">1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button>{{ totalPagas }}</button>
    <button>下一页</button>
    <button>总数:{{ total }}</button>
    <button>{{ totalPagas }}</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  // 接收父组件传递过来的数据
  props: {
    // 当前页面,默认是第一个
    currentPage: {
      type: Number,
      default: 1,
    },
    // 显示按钮的数量
    pagerCount: {
      type: Number,
      validator(val) {
        // 验证通过才会有用,大于5小于21的奇数,返回true验证成功,返回false验证失败
        return val >= 5 && val <= 21 && val % 2 === 1;
      },
      default: 7,
    },
    // 每页条数
    pageSize: {
      type: Number,
      default: 10,
    },
    // 总数,必须要有的属性
    total: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      // 将来页面数据要修改,但是props不能直接修改,要修改这个值所以定义变量,其他值不修改所以不定义
      myCurrentPage: this.currentPage,
    };
  },
  computed: {
    // 总页数
    totalPagas() {
      return Math.ceil(this.total / this.pageSize);
    },
    // 计算中间按钮的开始和结束的按钮值
    startEnd() {
      const { myCurrentPage, pagerCount, totalPagas } = this;
      // 中间按钮的数量,不包含开头和结尾
      const count = pagerCount - 2;
      // 中间的一半
      const halfCount = Math.floor(count / 2);

      let start, end;

      if (myCurrentPage >= totalPagas - halfCount) {
        start = totalPages - count;
      } else {
        start = myCurrentPage - halfCount;
      }

      if (start <= 1) {
        start = 2;
      }

      end = start + count - 1;

      if (end >= totalPages) {
        end = totalPages - 1;
      }

      return {
        start,
        end,
      };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  font-weight: 700;
  button {
    margin: 0 5px;
    padding: 0 4px;
    background-color: #f4f4f5;
    color: #606266;
    border-radius: 2px;
    border: none;
    outline: none;
    min-width: 30px;
    height: 28px;
    cursor: pointer;
    line-height: 28px;
  }
}

button.active {
  background-color: #409eff;
  color: #fff;
}
</style>
