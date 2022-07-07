<template>
  <div class="news">
    <div class="news-content">
      <div class="container">
        <div class="row">
          <div class="col-md-8 first_col">
            <div class="big-card card" style="width: 100%; height: 100%">
              <img
                src="../assets/cards/recipienthospital.png"
                class="img-fluid"
                alt=""
              />
              <div class="card-body text-start">
                <h3><span class="badge bg-secondary">20 jan 2022</span></h3>
                <h5 class="card-title">Get to know the sinovac vaccine</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Necessitatibus, nulla quae possimus id fugit totamperspiciatis
                  ad consequatur natus dolores unde ipsa, architecto,dignissimos
                  corrupti explicabo provident debitis suscipit, beatae!
                </p>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Necessitatibus, nulla quae possimus id fugit totamperspiciatis
                  ad consequatur natus dolores unde ipsa, architecto,dignissimos
                  corrupti explicabo provident debitis suscipit, beatae! Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.
                  Necessitatibus, nulla quae possimus id fugit totamperspiciatis
                  ad consequatur natus dolores unde ipsa, architecto,dignissimos
                  corrupti explicabo provident debitis suscipit, beatae! Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.
                  Necessitatibus, nulla quae possimus id fugit totamperspiciatis
                  ad consequatur natus dolores unde ipsa, architecto,dignissimos
                  corrupti explicabo provident debitis suscipit, beatae!
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 second-col">
            <div class="small-card card" style="width: 100%">
              <img
                class="img-fluid"
                src="../assets/cards/doctorimg.png"
                alt="Card image cap"
              />
              <div class="card-body text-start">
                <h3><span class="badge bg-secondary">20 jan 2022</span></h3>
                <h5 class="card-title">Get to know the sinovac vaccine</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
                <span class="read_more">
                  <a href="/subnewsviews">Read More</a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.829"
                    height="11.947"
                    viewBox="0 0 16.829 11.947"
                  >
                    <g
                      id="Group_1438"
                      data-name="Group 1438"
                      transform="translate(1.151 0.848)"
                    >
                      <line
                        id="Line_3"
                        data-name="Line 3"
                        y1="0.372"
                        x2="15"
                        transform="translate(-0.383 5.122)"
                        fill="none"
                        stroke="#013299"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      />
                      <line
                        id="Line_4"
                        data-name="Line 4"
                        y1="5"
                        x2="5"
                        transform="translate(9.617 5.039)"
                        fill="none"
                        stroke="#013299"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      />
                      <line
                        id="Line_5"
                        data-name="Line 5"
                        x2="5"
                        y2="5"
                        transform="translate(9.617 0.212)"
                        fill="none"
                        stroke="#013299"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      />
                    </g>
                  </svg>
                </span>
              </div>
            </div>
            <div class="small-card card" style="width: 100%">
              <img
                class="card-img-top img-fluid"
                src="../assets/cards/Reciptenthospitaltwo.png"
                alt="Card image cap"
              />
              <div class="card-body text-start">
                <h3><span class="badge bg-secondary">20 jan 2022</span></h3>
                <h5 class="card-title">Get to know the sinovac vaccine</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
                <span class="read_more">
                  <a href="/subnewsviews">Read More</a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.829"
                    height="11.947"
                    viewBox="0 0 16.829 11.947"
                  >
                    <g
                      id="Group_1438"
                      data-name="Group 1438"
                      transform="translate(1.151 0.848)"
                    >
                      <line
                        id="Line_3"
                        data-name="Line 3"
                        y1="0.372"
                        x2="15"
                        transform="translate(-0.383 5.122)"
                        fill="none"
                        stroke="#013299"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      />
                      <line
                        id="Line_4"
                        data-name="Line 4"
                        y1="5"
                        x2="5"
                        transform="translate(9.617 5.039)"
                        fill="none"
                        stroke="#013299"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      />
                      <line
                        id="Line_5"
                        data-name="Line 5"
                        x2="5"
                        y2="5"
                        transform="translate(9.617 0.212)"
                        fill="none"
                        stroke="#013299"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      />
                    </g>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="row second-row">
          <cards v-for="card in cards" :key="card.id" :card="card" />
        </div>
        <div class="row second-row">
          <cards v-for="card in cards" :key="card.id" :card="card" />
        </div>
        
      </div>
    </div>

    <app-footer />
  </div>
</template>

<script>
import appFooter from "@/components/global/appFooter.vue";
import cards from "@/components/news/card.vue";
export default {
  components: { appFooter, cards },
  name: "NewsView",
  data() {
    return {
      cards: [
        {
          id: 1,
          date: "20 jan 2022",
          title: "Get to know the sinovac vaccine",
          parg: "Lorem ipsum dolor sit amet, consectetur adipiscing",
          goto: "Read More",
          src: require("../assets/cards/doctorimg.png"),
        },
        {
          id: 2,
          date: "20 jan 2022",
          title: "Get to know the sinovac vaccine",
          parg: "Lorem ipsum dolor sit amet, consectetur adipiscing",
          goto: "Read More",
          src: require("../assets/cards/doctorimg.png"),
        },
        {
          id: 3,
          date: "20 jan 2022",
          title: "Get to know the sinovac vaccine",
          parg: "Lorem ipsum dolor sit amet, consectetur adipiscing",
          goto: "Read More",
          src: require("../assets/cards/doctorimg.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.news-content {
  margin-top: 40px;
  margin-bottom: 40px;
}
.first_col {
  .big-card {
    border: none;
    box-shadow: 0 3px 6px rgb(0, 0, 0, 16%);
    border-radius: 20px;
    padding: 16px;
    h3 {
      margin-bottom: 16px;
      margin-top: 24px;
      span {
        font-size: 18px;
        font-weight: normal;
        background-color: #e2f3ff !important;
        color: #1d8d99;
      }
    }
    h5 {
      font-size: 1.875rem;
    }
    p {
      font-size: 1.25rem;
      line-height: 28.8px;
      color: #707070;
    }
  }
}
.second-col {
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
  .small-card {
    border: none;
    box-shadow: 0 3px 6px rgb(0, 0, 0, 16%);
    padding: 16px;
    border-radius: 20px;
    h3 {
      margin-bottom: 12px;
      span {
        font-size: 18px;
        font-weight: normal;
        background-color: #e2f3ff !important;
        color: #1d8d99;
      }
    }
    h5 {
      font-size: 1.4rem;
      font-weight: bold;
      line-height: 35px;
    }
    p {
      line-height: 22px;
      color: rgb(112, 112, 112, 100%);
    }
    .read_more {
      display: flex;
      align-items: center;
      column-gap: 10px;
      justify-content: flex-end;
      a {
        text-decoration: none;
        color: var(--color_text_buttontwo);
        font-weight: 600;
      }
      svg {
        font-weight: 600;
      }
    }
  }
  .small-card:first-child {
    margin-bottom: 15px;
  }
}
.second-row {
  margin-top: 20px;
  row-gap: 30px;
}
.third-col {
  .small-card {
    border: none;
    box-shadow: 0 3px 6px rgb(0, 0, 0, 16%);
    padding: 16px;
    border-radius: 20px;
    h3 {
      margin-bottom: 12px;
      span {
        font-size: 18px;
        font-weight: normal;
        background-color: #e2f3ff !important;
        color: #1d8d99;
      }
    }
    h5 {
      font-size: 1.4rem;
      font-weight: bold;
      line-height: 35px;
    }
    p {
      line-height: 22px;
      color: rgb(112, 112, 112, 100%);
    }
    .read_more {
      display: flex;
      align-items: center;
      column-gap: 10px;
      justify-content: flex-end;
      a {
        text-decoration: none;
        color: var(--color_text_buttontwo);
        font-weight: 600;
      }
      svg {
        font-weight: 600;
      }
    }
  }
}
</style>