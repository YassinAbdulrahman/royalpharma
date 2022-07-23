<template>
  <div class="home">
    <div class="first-section">
      <app-headertwo />
      <div class="container">
        <div class="row align-items-center">
          <div class="text-md-start col-md-6">
            <div class="text-div">
              <h1>A True Devotion to</h1>
              <h4>A deep passion for Healthcare</h4>
              <p>
                Royal Pharma was founded in 2006 by Dr. Talal AL-Shbbary as a
                pharmaceuticals importing and distribution company.
              </p>
            </div>
            <div class="left-btn d-flex justify-content-end">
              <button>Read More</button>
            </div>
          </div>
          <div class="col-md-6">
            <img
              class="img-fluid"
              src="../assets/GGGG/royalpharmara.png"
              alt="left_logo"
            />
          </div>
          <a href="#second-section">
            <div class="scroll">
              <div class="scrolldown">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p>Scroll</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="second-section" id="second-section">
      <div class="container">
        <h2>Our Offerings</h2>
        <div class="sub-second-section">
          <div class="row first-row">
            <div class="col-lg-4">
              <ouroffering />
            </div>
            <div class="col-lg-4">
              <ouroffering />
            </div>
            <div class="col-lg-4">
              <ouroffering />
            </div>
          </div>
          <div class="row justify-content-center second-row">
            <div class="col-lg-4">
              <ouroffering />
            </div>
            <div class="col-lg-4">
              <ouroffering />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="thired-section">
      <div class="container">
        <h2>latest News</h2>
        <div class="subsection">
          <div class="row g-4">
            <div class="col-md-4">
              <div class="card">
                <img
                  src="../assets/cards/doctorimg.png"
                  class="card-img-top"
                  alt="card-img-top"
                />
                <div class="card-body text-start">
                  <span class="badge">20 jan 2022</span>
                  <h5 class="card-title">Get to know the sinovac vaccine</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn text-end"
                    >read more <arrowcard-icon
                  /></a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img
                  src="../assets/cards/doctorimg.png"
                  class="card-img-top"
                  alt="card-img-top"
                />
                <div class="card-body text-start">
                  <span class="badge">20 jan 2022</span>
                  <h5 class="card-title">Get to know the sinovac vaccine</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn text-end"
                    >read more <arrowcard-icon
                  /></a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img
                  src="../assets/cards/doctorimg.png"
                  class="card-img-top"
                  alt="card-img-top"
                />
                <div class="card-body text-start">
                  <span class="badge">20 jan 2022</span>
                  <h5 class="card-title">Get to know the sinovac vaccine</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn text-end"
                    >read more <arrowcard-icon
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fourth-section">
      <ourpeople-icon class="svg_one" />
      <ourpeople-icon class="svg_two" />
      <div class="container">
        <div class="text text-center">
          <h2>Our People</h2>
        </div>
        <div class="row mt-3">
          <newcardtwo
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div>
    <div class="fifth_section">
      <div class="container">
        <div class="head text-center">
          <h2>Our Global Partners</h2>
          <p>
            Royal Pharma invests in strategic partnerships with many
            international firms manufacturing a wide range of products covering
            the majority of healthcare sector. Since 2006, the company has
            gained more than 40+ profitable exclusive distribution agreements
            from many foreign companies.
          </p>
        </div>
        <carouselcompany />
      </div>
    </div>
    <app-footer />
  </div>
</template>

<script>
import appFooter from "@/components/global/appFooter.vue";
import carouselcompany from "@/components/home/carouselcompany.vue";
  
import cards from "@/components/news/card.vue";
import newcardtwo from "@/components/about/newcardtwo.vue";
import appHeadertwo from "@/components/global/appHeadertwo.vue";
import ouroffering from "@/components/home/ourOffering.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    appFooter,
    carouselcompany,
    cards,
    newcardtwo,
    appHeadertwo,
    ouroffering,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          text: "Governmental Hospitals, including the top 10 major hospitals in Yemen",
          src: require("../assets/about/logo/newcard.png"),
        },
        {
          id: 2,
          text: "Governmental Hospitals, including the top 10 major hospitals in Yemen",
          src: require("../assets/about/logo/newcard.png"),
        },
        {
          id: 3,
          text: "Governmental Hospitals, including the top 10 major hospitals in Yemen",
          src: require("../assets/about/logo/newcard.png"),
        },
        {
          id: 4,
          text: "Governmental Hospitals, including the top 10 major hospitals in Yemen",
          src: require("../assets/about/logo/newcard.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@mixin heading {
  font-size: 3rem;
  color: var(--color_text_buttontwo);
  font-family: Ubuntu-M;
  margin-bottom: 48px;
}
.home {
  font-family: Ubuntu-R, sans-serif;
  .first-section {
    height: 100vh;
    background-image: url("../assets/GGGG/backgroundfrist_section.png");
    background-position: center;
    background-size: cover;
    object-fit: contain;
    background-position-y: bottom;
    @media only screen and (max-width: 991px) {
      height: auto;
    }
    @media (min-width: 1240px) and (max-width: 1518px) {
      .container {
        max-width: 1000px;
      }
    }
    .text-div {
      h1 {
        font-size: 60px;
        font-family: Ubuntu-B;
        color: var(--color_text_buttontwo);
        margin: 0;
        @media (min-width: 1240px) and (max-width: 1518px) {
          font-size: 52px;
        }
      }
      h4 {
        font-size: 36px;
        color: var(--color_text_buttontwo);
        letter-spacing: 1.5px;
        @media (min-width: 1240px) and (max-width: 1518px) {
          font-size: 31px;
        }
      }
      p {
        width: 536px;
        max-width: 100%;
        font-size: 24px;
        line-height: 38px;
        color: var(--black-color);
        margin-top: 36px;
        @media (min-width: 991px) and (max-width: 1366px) {
          font-size: 22px;
        }
      }
    }

    .left-btn {
      width: 536px;
      max-width: 100%;
      button {
        border: none;
        color: #edeff5;
        width: 192px;
        height: 47px;
        border-radius: 28px;
        background-image: linear-gradient(to right, #013299, #395faf);
        font-size: 1.5rem;
        margin-top: 84px;
      }
      @media (max-width: 768px) {
        .left-btn {
          justify-content: center !important;
        }
      }
    }

    a {
      width: 40px;
      height: 56.06px;
      text-decoration: none;
      position: absolute;
      left: 50%;
      bottom: 7%;
      transform: translateX(-50%);
      .scroll {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        position: relative;
        .scrolldown {
          width: 17.99px;
          height: 17.99px;
          margin: auto;
          transform: translateX(-50%) rotate(45deg);
          margin-bottom: 32px;

          span {
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 100%;
            border-bottom: 2px solid #e52421;
            border-right: 2px solid #e52421;
            animation: animate 2.2s linear infinite;
          }
          span:nth-child(1) {
            transform: translate(-15px, -15px);
            animation-delay: -0.4s;
          }
          span:nth-child(2) {
            transform: translate(0, 0);
            animation-delay: -0.2s;
          }
          span:nth-child(3) {
            transform: translate(15px, 15px);
            animation-delay: 0s;
          }
          @keyframes animate {
            0% {
              top: -5px;
              left: -5px;
              opacity: 0;
            }
            25% {
              top: 0px;
              left: 0px;
              opacity: 1;
            }

            50%,
            100% {
              top: 5px;
              left: 5px;
              opacity: 0;
            }
          }
        }
      }
    }
  }
  .second-section {
    padding-top: 100px;
    padding-bottom: 100px;
    h2 {
      @include heading;
    }
    .second-row {
      margin-top: 64px;
    }
  }
  .thired-section {
    padding-bottom: 100px;
    h2 {
      @include heading;
    }
    .subsection {
      .card {
        border: none;
        box-shadow: 0 3px 6px rgb(0, 0, 0, 16%);
        border-radius: 20px;
        img {
          padding: 16px 16px 0 16px;
        }
        .card-body {
          padding: 0px 40px 30px 24px !important;
          span {
            display: inline-block;
            background: linear-gradient(#e2f3ff, #f4f7fc);
            border-radius: 10px;
            padding: 11px 8px 10px;
            color: #1d8d99;
            margin: 16px 0 12px 0;
            font-family: Ubuntu-R;
            font-size: 16px;
            font-weight: normal;
          }
          .card-title {
            color: #1a1e26;
            font-size: 24px;
            font-family: Ubuntu-B;
            letter-spacing: -1px;
          }
          .card-text {
            margin-top: 0;
            margin-bottom: 24px;
            font-family: Ubuntu-R;
            color: #707070;
            font-size: 16px;
          }
          a {
            display: block;
            outline: none;
            border: none;
            padding: 0;
            text-transform: capitalize;
            color: #013299;
            svg {
              margin-left: 10.7px;
            }
          }
        }
      }
    }
  }
  .fourth-section {
    padding-top: 100px;
    padding-bottom: 100px;
    position: relative;
    overflow: hidden;
    .svg_one {
      position: absolute;
      left: 1349.97px;
      top: 63px;
      @media (min-width: 1000px) and (max-width: 1400px) {
           left: 920px;
      }
    }

    .svg_two {
      position: absolute;
      left: -303.79px;
      top: 10px;
    }
    .text {
      h2 {
        @include heading;
      }
    }
  }
  .fifth_section {
    padding-top: 100px;
    padding-bottom: 100px;
    .head {
      h2 {
        @include heading;
        margin-bottom: 24px;
      }
      p {
        font-size: 1.5rem;
        color: #1a1e26;
        font-family: Ubuntu-R;
      }
    }
  }
}
</style>