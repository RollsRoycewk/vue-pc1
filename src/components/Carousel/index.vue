<template>
  <div class="swiper-container" id="mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in bannersList" :key="banner.id">
        <img :src="banner.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import "swiper/swiper-bundle.css";

import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
Swiper.use([Navigation, Pagination, Autoplay]);

export default {
  name: "Carousel",
  props: {
    bannersList: {
      type: Array,
      required: true,
    },
  },
  watch: {
    bannersList() {
      this.initBanner();
    },
  },
  methods: {
    initBanner() {
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          // direction: "vertical", // 垂直切换选项
          loop: true, // 循环模式选项

          autoplay: {
            delay: 1000,
            disableOnInteraction: false,
          },

          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },

          // 如果需要前进后退按钮
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },

          // // 如果需要滚动条
          // scrollbar: {
          //   el: ".swiper-scrollbar",
          // },
        });
      });
    },
  },

  mounted() {
    this.initBanner();
  },
};
</script>

<style lang="less" scoped>
</style>
