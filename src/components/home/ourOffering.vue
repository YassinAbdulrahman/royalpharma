<template>
  <div class="big-box">
    <div class="srv-box">
      <ouroffering-icon />
      <p>Generic prescription pharmaceuticals</p>
      <div class="ouroffering">
        <ul>
          <li><medican-icon /> cradiovascular</li>
          <li><medican-icon /> Infectious Diseases</li>
          <li><medican-icon /> Women’s Health</li>
          <li><medican-icon /> Urology</li>
          <li><medican-icon /> Respiratory Diseases</li>
          <li><medican-icon /> Respiratory Diseases</li>
          <li><medican-icon /> Women’s Health</li>
          <li><medican-icon /> Infectious Diseases</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ouroffering",
};
</script>

<style lang="scss" scoped>
.big-box {
  position: relative;
  transition: 0.5s ease-in-out;
  z-index: 2;
  .srv-box {
    height: 259px;
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 0 3px 6px rgb(0, 0, 0, 15%);
    display: grid;
    place-content: center;
    svg {
      margin: auto;
    }
    p {
      font-size: 24px;
      line-height: 35px;
      font-family: Ubuntu-B;
      width: 240px;
      height: 62px;
      margin-top: 17.5px;
    }
    .ouroffering {
      ul {
        width: 413px;
        height: 0;
        background-color: #e2f3ff;
        border-radius: 0 0 20px 20px;
        position: absolute;
        top: 93%;
        left: 50%;
        transform: translate(-50%, 0);

        z-index: -1;
        @media (max-width: 768px) {
          width: 350px;
        }
        @media (min-width: 768px) and (max-width: 991px) {
          width: 400px;
        }
        @media (min-width: 991px) and (max-width: 1366px) {
          width: 353px;
        }
        li {
          text-align: left;
          font-size: 20px;
          margin: 0;
          padding: 0;
          color: var(--color_text_buttontwo);
          display: none;
          transition-delay: 0.4s;
        }
      }
    }
  }
}
.big-box .srv-box:hover ul {
  height: 310px;
  padding: 38.9px 0px 24px 32px;
  transition: height 0.3s ease-in-out;
  li {
    display: block;
   
  }
}
@keyframes example {
  100% {
    display: block;
  }
}
</style>