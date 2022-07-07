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

  .srv-box {
    height: 259px;
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 0 3px 6px rgb(0, 0, 0, 16%);
    display: grid;
    place-content: center;
    z-index: 1;
    svg {
      margin: auto;
    }
    p {
      font-size: 24px;
      line-height: 35px;
      font-weight: bold;
      width: 240px;
      height: 62px;
    }
    .ouroffering {
      width: 405px;
      background-color: #e2f3ff;
      border-radius: 0 0 20px 20px;
      position: absolute;
      top: 96%;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
      visibility: hidden;
      transition: visibility 0.25s ease-in-out;
      transform-origin: bottom;
      @media (max-width: 768px) {
        width: 350px;
      } 
      @media (min-width: 768px) and (max-width: 991px) {
        width: 400px;
      }
      @media (min-width: 991px) and (max-width: 1366px) {
        width: 350px;
      }

      ul {
        padding: 38.9px 0px 24px 32px;
        li {
          text-align: left;
          font-size: 20px;
          color: #013299;
          &:not(:last-child) {
            padding-bottom: 12px;
          }
        }
      }
    }
  }
}
.big-box:hover .ouroffering {
  visibility: visible;
}
</style>