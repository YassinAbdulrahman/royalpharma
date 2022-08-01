<template>
  <div class="about">
    <div class="first-blocks">
      <div class="container">
        <div class="row align-items-center first-block">
          <div class="first-col col-sm-12 col-md-6 mb-sm-5">
            <h2>About us</h2>
            <h1>Who We Are</h1>
            <div class="scroll-pargrah">
              <p>
                Royal Pharma was founded in 2006 by Dr. Talal Al-Subbary as a
                pharmaceuticals importing and distribution company. It has
                es-tablished a substantial pharmaceutical business with turnover
                in recent years ranging between 20 and 25 million US Dollars.
                The company headquarter is based in Sana’a, the capital of
                Yemen, and have branches covering the whole geography of Yemen.
                Royal Pharma is an integrated pharmaceuticals and medical
                ap-pliances trading company focuses on importing and
                distributing generic pharmaceutical products, medical equipment
                and appli-ances. We market more than 150 products manufactured
                by more than 20 foreign companies, through operations in various
                ter-ritories of our country.
              </p>
            </div>
          </div>
          <div class="second-col col-md-6 col-sm-12">
            <img
              class="img-fluid"
              src="../assets/about/logo/Mask Group 8.png"
              alt="doctor"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Section three  -->
    <div class="section-three">
      <h2>Our Mission & vision</h2>
      <div class="silde">
        <div class="container">
          <carouselabout />
        </div>
      </div>
      <div class="sub-section">
        <div class="row g-0">
          <div class="col-2 first"></div>
          <div class="col-sm-12 col-md-8 second">
            <div class="row">
              <div class="first-col col-sm-12 col-md-6 mb-sm-5 py-md-5">
                <h2>Managing Director Message</h2>
                <div class="scroll-pargrah">
                  <p>
                    Starting our transformation toward a new and reformed Royal
                    PharmaAs we celebrate our 13th anniversary in 2019, we are
                    truly grateful for all of our employees, business partners
                    and customers for their continuous support. Since the
                    company was established in 2006, Royal Pharma has gone
                    through several growth and development stages until it
                    reached its current status as a major supplier of
                    pharmaceuticals and medical devices in Yemen.The local
                    business environment has experienced drastic changes in the
                    last The local business environment has experienced drastic
                    changes in the last few years. The exit of major local
                    suppliers of pharmaceuticals and medical devices from the
                    market and the entry of more competitive new ones have
                    re-sulted in opportunities as well as threats. Furthermore,
                    the deteriorating so-cio-economic status and the changing
                    geopolitical landscape in Yemen makes the survival of
                    existing business a great challenge. With facing such
                    challenges, we at Royal Pharma are required to achieve a
                    dramatic reform and a major shift from a corporate that
                    largely depends on distributing highly competitive and low
                    priced pharmaceuticals to an enter-prise that provides
                    specialty products and medical solutions. This is while
                    keep-ing focused on the existing business model and
                    philosophy. By encouraging our staff members to proactively
                    identify perpetually chang-ing market needs and discover new
                    opportunities, Royal Pharma will be much better equipped to
                    double its turnover via expanding the range of product
                    portfolio and proposing an appropriate medical solutions.
                    Our goal is to drive growth and expand our market presence
                    in key therapeu- tic categories, particularly within
                    prescription pharmaceutical business and lifesaving
                    therapeutic solutions. Furthermore but not less important,
                    we shall im-prove our compliance to the international
                    regulatory standards pertaining to storage and distribution
                    of pharmaceutical and medical devices products. We will also
                    look to further expand and diversify our portfolio and
                    optimize the potential of our local commercial network.We
                    want to be judged by our customers on our adherence to our
                    business and scientific values that constitute the core of
                    our philosophy. Thanks a lot for our customers and employee
                    for the trust they place on Royal Pharma, we will continue
                    to do all we can to live up to this trust.
                  </p>
                </div>
              </div>
              <div class="second-col col-md-6 col-sm-12">
                <img
                  class="img-fluid"
                  src="../assets/New_Card_Home/aboutphoto.png"
                  alt="doctor"
                />
              </div>
            </div>
          </div>
          <div class="col-2"></div>
        </div>
      </div>
    </div>

    <!-- Last Section -->
    <div class="last-section">
      <div class="container">
        <h2>Our Principles And Values</h2>
        <div class="sub-last-section">
          <div class="row align-items-center justify-content-between g-0">
            <div class="col-lg-6">
              <img
                src="../assets/GGGG/Mask Group 47.png"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="col-lg-5">
              <div class="principles-content">
                <ul class="tabs-choose">
                  <li
                    @click="activeTab = '1'"
                    :class="[activeTab === '1' ? 'active' : '']"
                  >
                    Quality
                  </li>
                  <li
                    @click="activeTab = '2'"
                    :class="[activeTab === '2' ? 'active' : '']"
                  >
                    Responsibility
                  </li>
                  <li
                    @click="activeTab = '3'"
                    :class="[activeTab === '3' ? 'active' : '']"
                  >
                    Integrity
                  </li>
                  <li
                    @click="activeTab = '4'"
                    :class="[activeTab === '4' ? 'active' : '']"
                  >
                    Reliability
                  </li>
                </ul>
                <div class="tabs-content">
                  <div class="content-one" v-if="activeTab === '1'">
                    <h4>Quality</h4>
                    <p>
                      We guarantee providing pharmaceuticals and medical
                      equipment and appliances productswith a high level of
                      quality and safety . This can only be achieved via andfull
                      compliance by respecting our policies ,principles and
                      standardswith full transparency
                    </p>
                  </div>
                  <div class="content-one" v-if="activeTab === '2'">
                    <h4>Responsibility</h4>
                    <p>
                      We guarantee providing pharmaceuticals and medical
                      equipment and appliances productswith a high level of
                      quality and safety . This can only be achieved via andfull
                      compliance by respecting our policies ,principles and
                      standardswith full transparency
                    </p>
                  </div>
                  <div class="content-one" v-if="activeTab === '3'">
                    <h4>Integrity</h4>
                    <p>
                      We guarantee providing pharmaceuticals and medical
                      equipment and appliances productswith a high level of
                      quality and safety . This can only be achieved via andfull
                      compliance by respecting our policies ,principles and
                      standardswith full transparency
                    </p>
                  </div>
                  <div class="content-one" v-if="activeTab === '4'">
                    <h4>Reliability</h4>
                    <p>
                      We guarantee providing pharmaceuticals and medical
                      equipment and appliances productswith a high level of
                      quality and safety . This can only be achieved via andfull
                      compliance by respecting our policies ,principles and
                      standardswith full transparency
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carouselabout from "@/components/global/carouselabout.vue";

export default {
  name: "aboutview",
  components: {
    carouselabout,
  },
  data() {
    return {
      activeTab: "1",
    };
  },
  mission: [
    {
      id: 1,
      txt: "Governmental Hospitals, including the top 10 major hospitals in Yemen",
      src: require("../assets/New_Card_Home/card_our_people.png"),
    },
    {
      id: 2,
      txt: "Governmental Hospitals, including the top 10 major hospitals in Yemen",
      src: require("../assets/New_Card_Home/card_our_people.png"),
    },
  ],
};
</script>

<style lang="scss" scoped>
.about {
  @mixin heading {
    font-size: 3rem;
    color: var(--color_text_buttontwo);
    font-family: Ubuntu-M;
    margin-bottom: 48px;
  }
  .first-blocks {
    padding-top: 144px;
    padding-bottom: 126px;
    @media (max-width: 991px) {
      padding-top: 10px;
    }
    @media (min-width: 991px) and (max-width: 1366px) {
      padding-top: 100px;
    }
    .first-col {
      text-align: left;
      @media (max-width: 768px) {
        padding-top: 80px;
        padding-bottom: 80px;
      }
      h2 {
        color: #013299;
        font-family: Ubuntu-M;
        margin: 0;
        margin-bottom: 31px;
        line-height: 55px;
        font-size: 3rem;
        @media (max-width: 768px) {
          text-align: center;
        }
      }
      h1 {
        font-size: 3rem;
        margin: 0;
        color: #1e1515;
        font-family: Ubuntu-B;
        margin-bottom: 20px;
        @media (max-width: 768px) {
          text-align: center;
        }
      }
      .scroll-pargrah {
        width: 566px;
        height: 270px;
        overflow-x: hidden;
        overflow-y: scroll;
        max-width: 100%;
        p {
          width: 100%;
          height: 256px;
          color: #1a1e26;
          font-size: 1.5rem;
          line-height: 38.4px;
          padding-right: 36px;
        }
      }
      ::-webkit-scrollbar {
        width: 5px;
      }
      ::-webkit-scrollbar-track {
        background-color: var(--webkit-scrollbar-track);
        border-radius: 3px;
      }
      ::-webkit-scrollbar-thumb {
        background: var(--webkit-scrollbar-thumb);
        border-radius: 3px;
      }
    }
    .second-col {
      img {
        width: 682px;
      }
    }
  }
  .section-three {
    h2 {
      @include heading;
    }
    .silde {
      margin-bottom: 128px;
    }
    .sub-section {
      position: relative;
      .row {
        .first {
          background-color: #013299;
          height: 510px;
        }
        @media (max-width: 991px) {
          .col-2 {
            display: none;
          }
        }
        .second {   
          background-color: #013299;
          height: 510px;
          border-top-right-radius: 346px;
          border-bottom-right-radius: 346px;
          @media (max-width: 991px) {
            height: auto;
            border-top-right-radius: 0px;
            border-bottom-right-radius: 0px;
            padding: 0 20px;
          }
          .first-col {
            text-align: left;
            position: relative;
            &::after {
              content: "";
              filter: blur(15px);
              height: 70px;
              left: 0;
              position: absolute;
              right: 0;
              bottom: 0;
              width: 100%;
              background: #013299;
            }
            @media (max-width: 768px) {
              padding-top: 80px;
              padding-bottom: 80px;
            }
            h2 {
              color: #f4f7fc;
              font-family: Ubuntu-M;
              margin: 0;
              margin-bottom: 31px;
              line-height: 55px;
              font-size: 3rem;
              width: 427px;
              max-width: 100%;
              @media (max-width: 768px) {
                text-align: center;
                font-size: 38px;
              }
            }
            .scroll-pargrah {
              width: 566px;
              height: 270px;
              overflow-x: hidden;
              overflow-y: scroll;
              max-width: 100%;
              p {
                width: 100%;
                height: 256px;
                color: #f4f7fc;
                font-size: 1.5rem;
                line-height: 29px;
              }
            }
            ::-webkit-scrollbar {
              width: 5px;
            }
            ::-webkit-scrollbar-track {
              background-color: var(--webkit-scrollbar-track);
              border-radius: 3px;
            }
            ::-webkit-scrollbar-thumb {
              background: var(--webkit-scrollbar-thumb);
              border-radius: 3px;
            }
          }
          .second-col {
            img {
              position: absolute;
              width: 44%;
              left: 50%;
              top: 50%;
              transform: translate(5%, -50%);
              @media (min-width: 991px) and (max-width: 1520px) {
                width: 44%;
                left: 50%;
                top: 50%;
                transform: translate(9%, -50%);
              }
              @media (min-width: 1522px) {
                width: 40%;
              }
              @media (max-width: 991px) {
                display: none;
              }
            }
          }
        }
      }
    }
  }
  .last-section {
    padding-top: 125px;
    padding-bottom: 127px;
    h2 {
      @include heading;
    }
    .sub-last-section {
      padding-top: 37.5px;
      .principles-content {
        @media (max-width: 991px) {
          margin-top: 15px;
        }
        .tabs-choose {
          cursor: pointer;
          position: relative;
          padding: 0 0 20px 0;
          text-align: start;
          li {
            display: inline-block;
            font-size: 20px;
            color: #013299;
            &:not(:last-child) {
              padding-right: 30px;
            }
            &.active {
              color: #013299;
              font-weight: bold;
              position: relative;
              &:nth-child(1):before {
                content: "";
                position: absolute;
                bottom: 0;
                background: #013299;
                height: 3px;
                width: 65px;
                left: 32%;
                transform: translateX(-50%);
                bottom: -20px;
                @media (max-width: 991px) {
                  display: none;
                }
              }
              &:nth-child(2):before {
                content: "";
                position: absolute;
                bottom: 0;
                background: #013299;
                height: 3px;
                width: 130px;
                left: 15%;
                transform: translateX(-22%);
                bottom: -20px;
                @media (max-width: 991px) {
                  display: none;
                }
              }
              &:nth-child(3):before {
                content: "";
                position: absolute;
                bottom: 0;
                background: #013299;
                height: 3px;
                width: 90px;
                left: 40%;
                transform: translateX(-50%);
                bottom: -20px;
                @media (max-width: 991px) {
                  display: none;
                }
              }
              &:nth-child(4):before {
                content: "";
                position: absolute;
                bottom: 0;
                background: #013299;
                height: 3px;
                width: 100px;
                left: 50%;
                transform: translateX(-50%);
                bottom: -20px;
                @media (max-width: 991px) {
                  display: none;
                }
              }
            }
          }
        }
        .tabs-choose::before {
          content: "";
          position: absolute;
          height: 2px;
          width: 100%;
          background: #ddd;
          bottom: 0;
          @media (min-width: 991px) and (max-width: 1366px) {
            width: 98%;
          }
          @media (min-width: 1400px) {
            width: 85.5%;
          }
        }
        .tabs-content {
          text-align: left;
          width: 100%;
          margin: auto;
          margin-top: 43.5px;

          h4 {
            color: #013299;
            font-size: 24px;
            font-weight: bold;
            margin: 0;
          }
          p {
            line-height: 24px;
            color: #1e1515;
            font-size: 20px;
            padding-top: 12px;
            @media (max-width: 768px) {
              font-size: 18px;
            }
          }
        }
      }
    }
  }
}
</style>