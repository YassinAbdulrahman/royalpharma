<template>
  <div>
    <swiper
      class="swiper"
      :options="swiperOption"
      :pagination="{ clickable: true }"
    >
      <swiper-slide>
        <img
          src="../../assets/homeslider/download (2).png"
          class="img-fluid"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="../../assets/homeslider/secondcompany.png"
          class="img-fluid"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="../../assets/homeslider/secondcompany.png"
          class="img-fluid"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="../../assets/homeslider/secondcompany.png"
          class="img-fluid"
          alt=""
      /></swiper-slide>
      <swiper-slide>
        <img
          src="../../assets/homeslider/secondcompany.png"
          class="img-fluid"
          alt=""
      /></swiper-slide>
      <swiper-slide>
        <img
          src="../../assets/homeslider/secondcompany.png"
          class="img-fluid"
          alt=""
      /></swiper-slide>
      <swiper-slide>
        <img
          src="../../assets/homeslider/secondcompany.png"
          class="img-fluid"
          alt=""
      /></swiper-slide>
      <swiper-slide>
        <img
          src="../../assets/homeslider/secondcompany.png"
          class="img-fluid"
          alt=""
      /></swiper-slide>
      <swiper-slide>
        <img
          src="../../assets/homeslider/secondcompany.png"
          class="img-fluid"
          alt=""
      /></swiper-slide>
      <swiper-slide>
        <img
          src="../../assets/homeslider/secondcompany.png"
          class="img-fluid"
          alt=""
      /></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import SwiperClass, { Pagination } from "vue-awesome-swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

// import swiper module styles
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

export default {
  name: "carouselcompany",
  title: "Navigation",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Pagination],
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper-button-prev , .swiper-button-next{
  background: #013299;
  color: #fff;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  padding: 20px;
}
.swiper-button-prev:after,
.swiper-button-next:after {
  font-size: 15px !important;
}
</style>