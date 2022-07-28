
<template>
  <div class="position-relative">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <div class="first_div"><companylogo-icon /></div>
      </swiper-slide>
      <swiper-slide>
        <div class="first_div"><companylogo-icon /></div>
      </swiper-slide>
      <swiper-slide>
        <div class="first_div"><companylogo-icon /></div>
      </swiper-slide>
      <swiper-slide>
        <div class="first_div"><companylogo-icon /></div>
      </swiper-slide>
      <swiper-slide>
        <div class="first_div"><companylogo-icon /></div>
      </swiper-slide>
      <swiper-slide>
        <div class="first_div"><companylogo-icon /></div>
      </swiper-slide>
      <swiper-slide>
        <div class="first_div"><companylogo-icon /></div>
      </swiper-slide>
      <swiper-slide>
        <div class="first_div"><companylogo-icon /></div>
      </swiper-slide>
      <swiper-slide>
        <div class="first_div">silde 1</div>
      </swiper-slide>
    </swiper>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "carouselcompany",
  title: "Loop mode with multiple slides per group",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.first_div {
  width: 237px;
  height: 180px;
  background-color: #fafafa;
}
.swiper-button-next,
.swiper-button-prev {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #013299;
}
.swiper-button-prev:after,
.swiper-button-next:after {
  font-size: 16px;
  color: #fff;
}
.swiper-button-next {
  right: -44px;
  
}
.swiper-button-prev {
  left: -44px;
}
</style>