<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <div class="swiper-content">
          <div class="sub-swiper-content">
            <div class="text-content text-start">
              <h3>Our Mission</h3>
              <p>
                We import and distribute pharmaceuticals and medical pplianc-es
                of high quality and affordable prices for improving and
                extend-ing the life of an ever increasing number of patients in
                our coun-try. We meet current and future customer needs through
                continu-ous expansion of our products portfolio.
              </p>
              <img src="../../assets/GGGG/sliderabout.png" alt="sliderabout" />
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-content">
          <div class="sub-swiper-content">
            <div class="text-content text-start">
              <h3>Our Mission</h3>
              <p>
                We import and distribute pharmaceuticals and medical pplianc-es
                of high quality and affordable prices for improving and
                extend-ing the life of an ever increasing number of patients in
                our coun-try. We meet current and future customer needs through
                continu-ous expansion of our products portfolio.
              </p>
              <img src="../../assets/GGGG/sliderabout.png" alt="sliderabout" />
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

// import swiper module styles
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

export default {
  name: "carouselabout",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1,
        spaceBetween: 30,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper-content {
  .sub-swiper-content {
    background-image: linear-gradient((#013299, #395faf));
    border-radius: 149px;
    padding: 20px 20px 20px 40px;
    display: flex;
    justify-content: flex-end;
    width: 90%;
    @media (min-width: 1367px) {
      width: 75%;
    }
    @media (max-width: 991px) {
      display: block;
    }
    margin: auto;
    position: relative;
    z-index: 2;
    .text-content {
      width: 665px;
      color: #edeff5;
      border-radius: 20px;
      z-index: 2;
      @media (max-width: 991px) {
        width: 100%;
        padding: 20px;
        text-align: center;
      }
      img {
        position: absolute;
        width: 30%;
        left: -14px;
        top: -5px;
        @media (min-width: 1367px) {
          width: 30%;
        }
        @media (max-width: 991px) {
          display: none;
        }
      }

      h2 {
        font-size: 30px;
        margin-bottom: 23.1px;
        @media (max-width: 991px) {
          font-weight: bold;
        }
      }
      p {
        font-size: 24px;
        line-height: 29px;
        @media (max-width: 991px) {
          font-size: 20px;
        }
      }
    }
  }
}
</style>