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
              src="../assets/landing/Group 1495.png"
              alt="left"
            />
          </div>
        </div>
        <a href="#">
          <div class="scroll">
            <div class="scrolldown">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <p>Scroll</p>
        </a>
      </div>
    </div>
    <div class="second-section">
      <div class="container">
        <h2>Our Offerings</h2>
        <div class="sub-second-section">
          <ouroffering />
          <ouroffering />
          <ouroffering />
          <ouroffering />
          <ouroffering />
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
      <div class="container">
        <div class="text text-center">
          <h2>Royal Pharmain Yemen</h2>
        </div>
        <div class="row mt-3">
          <newcards
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
import newcarusel from "@/components/home/NewCarusel.vue";
import cards from "@/components/news/card.vue";
import newcards from "@/components/about/newcard.vue";
import appHeadertwo from "@/components/global/appHeadertwo.vue";
import ouroffering from "@/components/home/ourOffering.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    appFooter,
    carouselcompany,
    newcarusel,
    cards,
    newcards,
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
  font-weight: 400;
  margin-bottom: 45px;
}
.home {
  .first-section {
    height: 100vh;
    background-image: url('../assets/GGGG/backgroundfrist_section.png');
    background-position: center;
    background-size: cover;
    object-fit: contain;
    background-position-y: bottom;
    @media only screen and (max-width: 991px) {
      height: auto;
    }
    .text-div {
      @media (min-width: 1366px) and (max-width: 1518px) {
        padding-left: 55px;
      }
    }
    h1 {
      font-size: 40px;
      color: #013299;
      margin: 0;
      position: relative;
      @media screen and (min-width: 1400px) {
        font-size: 60px;
      }
      @media only screen and (max-width: 1366px) {
        font-size: 55px;
      }
    }
    h4 {
      font-size: 36px;
      color: #013299;
      letter-spacing: 1px;
      @media (min-width: 1366px) and (max-width: 1518px) {
        font-size: 33px;
      }
    }
    p {
      font-size: 24px;
      line-height: 38px;
      width: 100%;
      height: 109px;
      margin-top: 2.25rem;
      @media (min-width: 1366px) and (max-width: 1518px) {
        font-size: 22px;
      }
    }
    @media (min-width: 1300px) and (max-width: 1399px) {
      .left-btn {
        padding-right: 0.9rem;
      }
    }
    @media (min-width: 1400px) and (max-width: 2049px) {
      .left-btn {
        padding-right: 6rem;
      }
    }
    @media (max-width: 768px) {
      .left-btn {
        justify-content: center !important;
      }
    }
    button {
      border: none;
      color: #edeff5;
      width: 192px;
      height: 47px;
      border-radius: 28px;
      background-image: linear-gradient(to right, #013299, #395faf);
      font-size: 1.5rem;
      margin-top: 5.25rem;
    }
    a {
      text-decoration: none;
      @media (min-width: 1366px) and (max-width: 1518px) {
        display: block;
        position: absolute;
        left: 50%;
        bottom: -86px;
      }
    }
    p {
      padding-right: 30px;
      color: #1d48a4;
      font-weight: 400;
    }
    .scroll {
      display: flex;
      justify-content: center;
      flex-direction: row;
      position: relative;
      .scrolldown {
        width: 30px;
        height: 30px;
        transform: translateX(-50%) rotate(45deg);
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
  .second-section {
    padding-top: 100px;
    padding-bottom: 100px;
    h2 {
      @include heading
    }
    .sub-second-section {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 40px 31px;
    }
  }
  .thired-section {
    padding-bottom: 100px;
    h2{
      @include heading
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
          }
          .card-title {
            color: #1a1e26;
            font-size: 24px;
            font-weight: bold;
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
    margin-top: 100px;
    margin-bottom: 100px;
    .text {
      h2 {
         @include heading
      }
    }
  }
  .fifth_section {
    padding-top: 100px;
    padding-bottom: 100px;
    .head {
      h2 {
        @include heading;
      }
      p {
        font-size: 1.5rem;
        color: #1a1e26;
      }
    }
  }
}
</style>