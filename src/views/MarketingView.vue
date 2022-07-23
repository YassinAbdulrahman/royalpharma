<template>
  <div>
    <!-- Section first -->
    <div class="fourth_section">
      <div class="container">
        <div class="text">
          <h3>Our People</h3>
          <p>
            At Royal Pharma, we Rely on a strong team of certified and quali-
            fied sales and marketing persons, engineers, quality assurance
            specialists and others. They have always been our main driver of
            growth, without whom it would have been impossible to guaran- tee
            quality of our services
          </p>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-4 col-lg-3">
            <div class="big-card">
              <div class="small-card">
                <img
                  src="../assets/about/Group 1424.png"
                  class="img-fluid"
                  alt="photo of card"
                />
                <div class="card-info d-flex">
                  <span>5</span>
                  <p>quality assurance & regulatory affairs specialists</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-3">
            <div class="big-card">
              <div class="small-card">
                <img
                  src="../assets/card Go/1.png"
                  class="img-fluid"
                  alt="photo of card"
                />
                <div class="card-info d-flex">
                  <span>40</span>
                  <p>pharmacists</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-3">
            <div class="big-card">
              <div class="small-card">
                <img
                  src="../assets/card Go/3.png"
                  class="img-fluid"
                  alt="photo of card"
                />
                <div class="card-info d-flex">
                  <span>30</span>
                  <p>Sales Persons</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-3">
            <div class="big-card">
              <div class="small-card">
                <img
                  src="../assets/about/Group 1424.png"
                  class="img-fluid"
                  alt="photo of card"
                />
                <div class="card-info d-flex">
                  <span>15</span>
                  <p>Logistics & Supply Chain Persons</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center gy-5">
          <div class="col-sm-12 col-md-4 col-lg-3">
            <div class="big-card">
              <div class="small-card">
                <img
                  src="../assets/about/Group 1424.png"
                  class="img-fluid"
                  alt="photo of card"
                />
                <div class="card-info d-flex">
                  <span>24</span>
                  <p>Financial , commercial & administrative person</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-3">
            <div class="big-card">
              <div class="small-card">
                <img
                  src="../assets/card Go/3.png"
                  class="img-fluid"
                  alt="photo of card"
                />
                <div class="card-info d-flex">
                  <span>6</span>
                  <p>Engineers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="con-box">
          <div class="big-card d-flex justify-content-start">
            <div class="small-card d-flex justify-content-center">
              <img
                src="../assets/about/Group 1424.png"
                class="img-fluid"
                alt="photo of card"
              />
              <div class="card-info d-flex">
                <span>5</span>
                <p>quality assurance & regulatory affairs specialists</p>
              </div>
            </div>
          </div>
          <div class="big-card d-flex justify-content-start">
            <div class="small-card d-flex justify-content-center">
              <img
                src="../assets/about/Group 1424.png"
                class="img-fluid"
                alt="photo of card"
              />
              <div class="card-info d-flex">
                <span>40</span>
                <p>pharmacists</p>
              </div>
            </div>
          </div>
          <div class="big-card d-flex justify-content-start">
            <div class="small-card d-flex justify-content-center">
              <img
                src="../assets/about/Group 1424.png"
                class="img-fluid"
                alt="photo of card"
              />
              <div class="card-info d-flex">
                <span>30</span>
                <p>Sales Persons</p>
              </div>
            </div>
          </div>
          <div class="big-card d-flex justify-content-start">
            <div class="small-card d-flex justify-content-center">
              <img
                src="../assets/about/Group 1424.png"
                class="img-fluid"
                alt="photo of card"
              />
              <div class="card-info d-flex">
                <span>15</span>
                <p>Logistics & Supply Chain Persons</p>
              </div>
            </div>
          </div>
          <div class="big-card d-flex justify-content-start">
            <div class="small-card d-flex justify-content-center">
              <img
                src="../assets/about/Group 1424.png"
                class="img-fluid"
                alt="photo of card"
              />
              <div class="card-info d-flex">
                <span>24</span>
                <p>Financial , commercial & administrative person</p>
              </div>
            </div>
          </div>
          <div class="big-card d-flex justify-content-center">
            <div class="small-card d-flex justify-content-center">
              <img
                src="../assets/about/Group 1424.png"
                class="img-fluid"
                alt="photo of card"
              />
              <div class="card-info d-flex">
                <span>6</span>
                <p>Engineers</p>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>

    <!-- Section three -->
    <div class="fifth_section pt-5 pb-5">
      <ourpeople-icon class="svg_one" />
      <ourpeople-icon class="svg_two" />
      <div class="container">
        <div class="text text-center">
          <h2>Royal Pharmain Yemen</h2>
        </div>
        <div class="row">
          <newcards
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div>

    <div class="section_six">
      <h2>2018 Business Heights</h2>
      <div class="first-div">
        <div class="container">
          <div
            class="
              section-six-content
              d-flex
              justify-content-around
              align-items-center
            "
          >
            <div class="one">
              <p>
                Royal Pharma products are marketed under 2 main divisions.
                Pharmaceutical division that market and sells generic
                pharmaceuticals, and Innova Pharma division that market and
                sells Medical equipment, IV infusions and hospital products. The
                total sales of Royal Pharma in both divisionsexceeded 20 US
                Million Dollars in 2018
              </p>
            </div>
            <div>
              <h2>2018 Sales by division</h2>
              <div class="inner-div">
                <Doughnut />
                <div class="right-precantage">
                  <span>Pharmaceutical division</span>
                  <span>Innova pharma division</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="second-div">
        <div
          class="container d-flex justify-content-between align-items-center"
        >
          <div class="two">
            <h2>Strong, Sustainable financial foundation</h2>
            <div>
              <bar-chart />
            </div>
          </div>
          <div class="one">
            <p>
              Royal Pharma products are marketed under 2 main divisions.
              Pharmaceutical division that market and sells generic
              pharmaceuticals, and Innova Pharma division that market and sells
              Medical equipment, IV infusions and hospital products. The total
              sales of Royal Pharma in both divisionsexceeded 20 US Million
              Dollars in 2018
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Section Seven -->
    <div class="section_seven">
      <div class="container">
        <h2 v-scroll-reveal.reset="{ delay: 400 }">Our Infrastructures</h2>
        <div class="box">
          <div class="srv-box">
            <span>6000</span>
            <p>Square Meter Strong facilities</p>
          </div>
          <div class="srv-box">
            <span>120</span>
            <p>Transportation vehicles of various capacities</p>
          </div>
          <div class="srv-box">
            <span>6000</span>
            <p>Square Meter office buildings as a total</p>
          </div>
        </div>
        <div class="boxtwo">
          <div class="back">
            <div class="text-content">
              <h2>Social Responssibility</h2>
              <p>
                At Royal Pharma We feel responsibility towards the society and
                the areas in which we operate. We adhere to the laws of the
                countries where we do business. We also believe that "It is
                normal to help", and therefore we invest significant financial
                resources in the nonprofit sector every year. This especially
                involves the areas of relief, health care and education.
              </p>
            </div>
            <div class="front"></div>
          </div>
        </div>
      </div>
    </div>

    <app-footer />
  </div>
</template>

<script>
import Doughnut from "@/components/about/Doughnut.vue";
import newcards from "../components/about/newcard.vue";
import BarChart from "@/components/about/BarChart.vue";
import AppFooter from "@/components/global/appFooter.vue";
export default {
  name: "marketingview",
  components: {
    newcards,
    Doughnut,
    BarChart,
    AppFooter,
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
.fourth_section {
  font-family: Ubuntu-R;
  padding-top: 100px;
  margin-bottom: 100px;
  .text {
    h3 {
      margin-bottom: 24px;
      font-size: 3rem;
      color: var(--heading-about-section);
      font-family: Ubuntu-M;
    }
    p {
      font-size: 1.5rem;
      line-height: 38.4px;
      color: var(--paragrah-about-section);
    }
  }

  .big-card {
    margin-top: 60px;
    background-color: var(--boxes-in-about-section);
    border-radius: 0 20px 20px 20px;
    position: relative;
    align-items: center;
    box-shadow: 0px 3px 6px rgb(0, 0, 0, 16%);
    img {
      position: absolute;
      top: -50%;
      left: -2.5%;
      width: 90px;
      height: 93px;
      transform: translateY(50%);
    }
    .small-card {
      padding: 3px;
      .card-info {
        align-items: center;
        margin-top: 26px;
        span {
          color: var(--heading-about-section);
          font-size: 6.5rem;
          font-family: Ubuntu-R;
        }
        p {
          color: #013299;
          font-size: 1.5rem;
          font-family: Ubuntu-R;
          text-align: left;
          line-height: 32px;
          letter-spacing: -1px;
          display: flex;
          align-items: center;
          margin-top: 1rem;
        }
      }
    }
    @media (min-width: 1300px) and (max-width: 1500px) {
      .big-card {
        width: 270px;
        height: 179px;
      }
    }
  }
}
.fifth_section {
  margin-top: 100px;
  margin-bottom: 100px;
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
      font-size: 3rem;
      color: var(--heading-about-section);
      font-family: Ubuntu-M;
      line-height: 55px;
    }
  }
}
.section_six {
  padding-top: 100px;
  padding-bottom: 100px;
  > h2 {
    font-size: 3rem;
    color: var(--color_text_buttontwo);
  }
  .first-div {
    height: 100%;
    background-color: var(--boxes-in-about-section);
    border-top-right-radius: 251px;
    margin-top: 48px;
    padding-top: 50px;
    padding-bottom: 50px;
    width: 100%;
    @media screen and (max-width: 768px) {
      border-top-right-radius: 0;
    }
    .container {
      .section-six-content {
        column-gap: 10px;
        @media screen and (max-width: 768px) {
          flex-direction: column;
        }
        .one {
          p {
            width: 674px;
            height: 312px;
            text-align: left;
            font-size: 1.5rem;
            line-height: 38.4px;
            color: #1a1e26;
            margin: 0;
            @media screen and (max-width: 768px) {
              width: 100%;
              height: 100%;
              text-align: center;
            }
          }
        }
        .two {
          h2 {
            overflow: hidden;
            margin: 0 0 0 5px;
            text-align: left;
            @media screen and (max-width: 768px) {
              margin-top: 40px;
            }
            @media (max-width: 991px) {
              text-align: center;
            }
          }
          .inner-div {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0 20px;
            margin-top: 26px;
            @media screen and (max-width: 768px) {
              flex-direction: column;
            }
            .right-precantage {
              margin-top: 50px;
              span {
                display: block;
                font-size: 18px;
                color: #1a1e26;
                position: relative;
                padding-left: 20px;
              }
              span::before {
                content: "";
                position: absolute;
                width: 20px;
                height: 20px;
                left: 0;
                top: 5px;
                background-color: red;
                padding-right: 10px;
              }
            }
          }
        }
      }
    }
  }
  .second-div {
    margin-left: 0;
    height: 100%;
    background-color: var(--color_text_buttontwo);
    border-bottom-left-radius: 251px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;
    color: var(--color-text-navlink);
    @media screen and (max-width: 768px) {
      border-bottom-left-radius: 0px;
    }
    .container {
      gap: 20px;
      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
    }
    .one {
      width: 674px;
      max-width: 100%;
      p {
        width: 100%;
        height: 100%;
        text-align: left;
        font-size: 1.5rem;
        line-height: 38.4px;
        @media screen and (max-width: 768px) {
          text-align: center;
        }
      }
    }
    .two {
      h2 {
        margin: 0 0 0 5px;
        text-align: left;
        font-size: 1.875rem;
        width: 100%;
      }
      .inner-div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 26px;
        span {
          display: block;
          font-size: 18px;
          color: #1a1e26;
          position: relative;
          padding-left: 20px;
        }
        span::before {
          content: "";
          position: absolute;
          width: 20px;
          height: 20px;
          left: 0;
          top: 5px;
          background-color: red;
          padding-right: 10px;
        }
      }
    }
  }
}

.section_seven {
  padding: 100px 0 100px 0;
  @media (max-width: 991px) {
    display: none;
  }
  .container {
    > h2 {
      font-size: 3rem;
      color: var(--color_text_buttontwo);
    }
    .box {
      background-image: linear-gradient(to left, #013299, #395faf);
      border-radius: 107px;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 48px;
      padding: 30px;
      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
      .srv-box {
        width: 238px;
        height: 138.26px;
        position: relative;
        @media screen and (max-width: 768px) {
          padding-bottom: 50px;
        }
        span {
          display: inline-block;
          font-size: 3rem;
          color: var(--color-text-navlink);
          font-family: Ubuntu-B;
        }
        p {
          color: var(--small-four-box-about);
          font-size: 1.5rem;
        }
      }
      .srv-box:nth-child(2) {
        width: 262px;
      }
      .srv-box:not(:last-child)::after {
        content: "";
        position: absolute;
        width: 2px;
        height: 129px;
        right: -40%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--webkit-scrollbar-track);
        @media screen and (max-width: 768px) {
          display: none;
        }
        @media (min-width: 991px) and (max-width: 1366px) {
          right: -22%;
        }
      }
    }
    .boxtwo {
      margin-top: 102.3px;
      .back {
        margin: auto;
        border-radius: 50% 50% 50% 50%/70% 70% 32% 32%;
        background: rgb(1, 50, 153);
        background: linear-gradient(
          50deg,
          rgba(1, 50, 153, 1) 35%,
          rgba(57, 95, 175, 1) 100%
        );
        width: 758.41px;
        max-width: 100%;
        height: 706.88px;
        transform: rotate(-6deg);
        box-shadow: 0 3px 6px rgb(0, 0, 0, 16%);
        position: relative;
        z-index: 1;
      }
      .front {
        border-radius: 50% 50% 50% 50%/70% 70% 32% 32%;
        background: rgb(226, 243, 255);
        background: linear-gradient(
          292deg,
          rgba(226, 243, 255, 1) 35% rgba(244, 247, 252, 1) 100%
        );
        width: 729.37px;
        max-width: 100%;
        height: 679.82px;
        transform: rotate(37deg);
        box-shadow: 0 3px 6px rgb(0, 0, 0, 16%);
        position: absolute;
        left: 33px;
        top: 10px;
        z-index: 2;
      }
      .text-content {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 5;
        transform: translate(-50%, -50%) rotate(6deg);
        h2 {
          font-size: 48px;
          color: #013299;
          line-height: 55px;
          font-family: Ubuntu-M;
        }
        p {
          width: 578px;
          height: 296px;
          font-size: 24px;
          line-height: 38.4px;
          color: #1a1e26;
        }
      }
    }
  }
}
</style>