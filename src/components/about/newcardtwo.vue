<template>
  <div class="col-md-6">
    <div class="box">
      <div class="inner-text">
        <img class="img-fluid" :src="product.src" alt="newcard img" />
        <div class="text-card">
          <h2>+30</h2>
          <p>
            {{ product.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newcardtwo",
  props: ["product"],
};
</script>


<style lang="scss" scoped>
.box {
  width: 100%;
  height: 331.02px;
  display: grid;
  place-content: center;
  @media screen and (max-width: 768px) {
    height: 200px;
  }
  @media (min-width: 991px) and (max-width: 1366px) {
    height: 300px;
  }
  .inner-text {
    width: 519px;
    border-radius: 107px;
    background-image: linear-gradient(to left, #013299, #395faf);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    padding: 24.3px 0 10px 0;
    @media screen and (max-width: 768px) {
      width: 357px;
      height: 130px;
      text-align: left;
    }
    @media (min-width: 991px) and (max-width: 1366px) {
      width: 450px;
      height: 140px;
    }
    .text-card {
      width: 65%;
      h2 {
        font-size: 30px;
        text-align: start;
        color: #edeff5;
        font-family: Ubuntu-B;
      }
      p {
        width: 303px;
        height: 71px;
        font-size: 1.25rem;
        line-height: 24px;
        color: var(--small-four-box-about);
        font-family: Ubuntu-R;
        text-align: left;
        place-self: flex-end;
        @media screen and (max-width: 768px) {
          width: 212px;
          font-size: 1rem;
        }
      }
    }
    img {
      position: absolute;
      left: -100px;
      top: 50%;
      width: 267px;
      transform: translateY(-50%);
      @media screen and (max-width: 768px) {
        width: 55%;
        left: -30px;
      }
      @media (min-width: 991px) and (max-width: 1366px) {
        width: 52%;
        left: -92px;
      }
    }
  }
}
</style>