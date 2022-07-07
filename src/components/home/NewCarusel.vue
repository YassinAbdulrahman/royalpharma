<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <div class="swiper-content">
          <div class="img-content">
            <swiper-img-icon />
          </div>
          <div class="inner-text">
            <h2>Generic prescription pharmaceuticals</h2>
            <ul>
              <li>cradiovascular</li>
              <li>Infectious Diseases</li>
              <li>Urology</li>
              <li>Women’s Health</li>
              <li>Respiratory Diseases</li>
              <li>Central Nervous System</li>
              <li>Pain Management</li>
              <li>Gastrointestinal Diseases</li>
              <li>cradiovascular</li>
            </ul>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-content">
          <div class="img-content">
            <swiper-img-icon />
          </div>
          <div class="inner-text">
            <h2>Generic prescription pharmaceuticals</h2>
            <ul>
              <li>cradiovascular</li>
              <li>Infectious Diseases</li>
              <li>Urology</li>
              <li>Women’s Health</li>
              <li>Respiratory Diseases</li>
              <li>Central Nervous System</li>
              <li>Pain Management</li>
              <li>Gastrointestinal Diseases</li>
              <li>cradiovascular</li>
            </ul>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-content">
          <div class="img-content">
            <swiper-img-icon />
          </div>
          <div class="inner-text">
            <h2>Generic prescription pharmaceuticals</h2>
            <ul>
              <li>cradiovascular</li>
              <li>Infectious Diseases</li>
              <li>Urology</li>
              <li>Women’s Health</li>
              <li>Respiratory Diseases</li>
              <li>Central Nervous System</li>
              <li>Pain Management</li>
              <li>Gastrointestinal Diseases</li>
              <li>cradiovascular</li>
            </ul>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-content">
          <div class="img-content">
            <swiper-img-icon />
          </div>
          <div class="inner-text">
            <h2>Generic prescription pharmaceuticals</h2>
            <ul>
              <li>cradiovascular</li>
              <li>Infectious Diseases</li>
              <li>Urology</li>
              <li>Women’s Health</li>
              <li>Respiratory Diseases</li>
              <li>Central Nervous System</li>
              <li>Pain Management</li>
              <li>Gastrointestinal Diseases</li>
              <li>cradiovascular</li>
            </ul>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-content">
          <div class="img-content">
            <swiper-img-icon />
          </div>
          <div class="inner-text">
            <h2>Generic prescription pharmaceuticals</h2>
            <ul>
              <li>cradiovascular</li>
              <li>Infectious Diseases</li>
              <li>Urology</li>
              <li>Women’s Health</li>
              <li>Respiratory Diseases</li>
              <li>Central Nervous System</li>
              <li>Pain Management</li>
              <li>Gastrointestinal Diseases</li>
              <li>cradiovascular</li>
            </ul>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-content">
          <div class="img-content">
            <swiper-img-icon />
          </div>
          <div class="inner-text">
            <h2>Generic prescription pharmaceuticals</h2>
            <ul>
              <li>cradiovascular</li>
              <li>Infectious Diseases</li>
              <li>Urology</li>
              <li>Women’s Health</li>
              <li>Respiratory Diseases</li>
              <li>Central Nervous System</li>
              <li>Pain Management</li>
              <li>Gastrointestinal Diseases</li>
              <li>cradiovascular</li>
            </ul>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-content">
          <div class="img-content">
            <swiper-img-icon />
          </div>
          <div class="inner-text">
            <h2>Generic prescription pharmaceuticals</h2>
            <ul>
              <li>cradiovascular</li>
              <li>Infectious Diseases</li>
              <li>Urology</li>
              <li>Women’s Health</li>
              <li>Respiratory Diseases</li>
              <li>Central Nervous System</li>
              <li>Pain Management</li>
              <li>Gastrointestinal Diseases</li>
              <li>cradiovascular</li>
            </ul>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
      <swiper-slide>Slide 10</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import SwiperClass, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

// import swiper module styles
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
// more module style...

export default {
  name: "newcarusel",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
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
.swiper-slide {
  height: 700px;
  display: grid;
  place-content: center;
  .swiper-content {
    display: grid;
    place-content: center;
    width: 500px;
    height: 500px;
    background-color: #e2f3ff;
    border-radius: 50% 50% 50% 50%/70% 70% 32% 32%;
    margin: auto;
   
    @media only screen and (max-width: 1366px) {
      width: 415px;
      height: 415px;
    }
     @media screen and (max-width: 768px) {
      width: 370px;
      height: 370px;
    }
    .img-content {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      @media screen and (max-width: 768px) {
        top: 2%;
        left: 50%;
      }
    }
    .inner-text {
      display: grid;
      place-items: center;
      text-align: left;
      h2 {
        width: 240px;
        height: 62px;
        font-size: 24px;
        @media screen and (max-width: 768px) {
          font-size: 20px;
          text-align: center;
        }
      }
    }
  }
}
</style>



