<template>
  <div class="about">
    <div class="first-block">
      <div class="container">
        <div class="row align-items-center first-block gy-4">
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
        <div class="container">
          <div class="inner-sub-section">
            <div class="row justify-content-center align-items-center">
              <div class="col-lg-6">
                <div class="first-col">
                  <h1>Managing Director Message</h1>
                  <div class="scroll-pargrah">
                    <p>
                      Starting our transformation toward a new and reformed
                      Royal PharmaAs we celebrate our 13th anniversary in 2019,
                      we are truly grateful for all of our employees, business
                      partners and customers for their continuous support. Since
                      the company was established in 2006, Royal Pharma has gone
                      through several growth and development stages until it
                      reached its current status as a major supplier of
                      pharmaceuticals and medical devices in Yemen.The local
                      business environment has experienced drastic changes in
                      the last The local business environment has experienced
                      drastic changes in the last few years. The exit of major
                      local suppliers of pharmaceuticals and medical devices
                      from the market and the entry of more competitive new ones
                      have re-sulted in opportunities as well as threats.
                      Furthermore, the deteriorating so-cio-economic status and
                      the changing geopolitical landscape in Yemen makes the
                      survival of existing business a great challenge. With
                      facing such challenges, we at Royal Pharma are required to
                      achieve a dramatic reform and a major shift from a
                      corporate that largely depends on distributing highly
                      competitive and low priced pharmaceuticals to an
                      enter-prise that provides specialty products and medical
                      solutions. This is while keep-ing focused on the existing
                      business model and philosophy. By encouraging our staff
                      members to proactively identify perpetually chang-ing
                      market needs and discover new opportunities, Royal Pharma
                      will be much better equipped to double its turnover via
                      expanding the range of product portfolio and proposing an
                      appropriate medical solutions. Our goal is to drive growth
                      and expand our market presence in key therapeu- tic
                      categories, particularly within prescription
                      pharmaceutical business and lifesaving therapeutic
                      solutions. Furthermore but not less important, we shall
                      im-prove our compliance to the international regulatory
                      standards pertaining to storage and distribution of
                      pharmaceutical and medical devices products. We will also
                      look to further expand and diversify our portfolio and
                      optimize the potential of our local commercial network.We
                      want to be judged by our customers on our adherence to our
                      business and scientific values that constitute the core of
                      our philosophy. Thanks a lot for our customers and
                      employee for the trust they place on Royal Pharma, we will
                      continue to do all we can to live up to this trust.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="second-col">
                  <img src="../assets/about/Group 1429.png" alt="photo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Last Section -->
    <div class="last-section">
      <div class="container">
        <h2>Our Principles And Values</h2>
        <div class="sub-last-section">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <img
                src="../assets/GGGG/Mask Group 47.png"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="col-lg-6">
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

    <!-- Section eight -->
    <app-footer />
  </div>
</template>

<script>
import appFooter from "@/components/global/appFooter.vue";
import carouselabout from "@/components/global/carouselabout.vue";

export default {
  name: "aboutview",
  components: {
    appFooter,
    carouselabout,
  },
  data() {
    return {
      activeTab: "1",
    };
  },
};
</script>

<style lang="scss" scoped>
.about {
  @mixin heading {
    font-size: 3rem;
    color: var(--color_text_buttontwo);
    font-family: Ubuntu-M;
    margin-bottom: 45px;
  }
  .first-block {
    padding-top: 100px;
    padding-bottom: 70px;
    @media (max-width: 991px) {
      padding-top: 10px;
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
      background-image: linear-gradient(to bottom, #013299, #395faf);
      height: 500px;
      .inner-sub-section {
        .first-col {
          text-align: left;
          h1 {
            color: var(--color-text-navlink);
            font-size: 48px;
            font-family: Ubuntu-M;
            line-height: 60px;
            width: 427px;
            margin: 0;
            margin-bottom: 24px;
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
              color: var(--color-text-navlink);
              font-size: 1.5rem;
              line-height: 32px;
              padding-right: 20px;
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
          width: 80%;
          img {
            max-width: 100%;
          }
        }
      }
    }
  }
  .last-section {
    padding-top: 100px;
    padding-bottom: 198px;
    h2 {
      @include heading;
    }
    .sub-last-section {
      padding-top: 85.5px;
      .principles-content {
        @media (max-width: 991px) {
          margin-top: 15px;
        }
        .tabs-choose {
          cursor: pointer;
          position: relative;
          padding: 0 0 20px 0;
          text-align: start;
          padding-left: 14px;
          li {
            display: inline-block;
            font-size: 20px;
            color: #013299;
            &:not(:last-child) {
              padding-right: 48px;
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
                width: 62px;
                left: 27%;
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
                width: 80px;
                left: 29%;
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
                width: 78px;
                left: 48%;
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
          width: 78%;
          background: #ddd;
          bottom: 0;
          @media (min-width: 991px) and (max-width: 1366px) {
            width: 92%;
          }
        }
        .tabs-content {
          text-align: left;
          width: 100%;
          margin: auto;
          padding-left: 14px;
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