<template>
  <div class="home">
      <div class="headertwo fixed-top" v-if="$route.name != 'home'">
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            <a class="navbar-brand" href="#"><headerlogotwo-icon /></a>
            <button
              class="
                navbar-toggler
                collapsed
                d-flex d-lg-none
                flex-column
                justify-content-around
              "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="toggler-icon top-bar"></span>
              <span class="toggler-icon middle-bar"></span>
              <span class="toggler-icon bottom-bar"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav m-md-auto mb-2 mb-lg-0 middelnav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    <router-link to="/" exact="">Home</router-link></a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"
                    ><router-link to="/about" exact="">About us</router-link></a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"
                    ><router-link to="/marketingview" exact=""
                      >Marketing distribution</router-link
                    ></a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"
                    ><router-link to="/news" exact="">News</router-link></a
                  >
                </li>
              </ul>
              <router-link to="/contactus" tag="button" class="btn-go"
                >Contact US</router-link
              >
            </div>
          </div>
        </nav>
      </div>
  </div>
  <!-- <div class="container">
      <div
        class="right-navbar d-flex justify-content-between align-items-center"
      >
        <div class="logo img-fluid">
          <headerlogo-icon />
        </div>
        <ul class="middelnav d-flex align-items-center">
          <router-link to="/" tag="li" exact="">
            <a>Home</a>
          </router-link>
          <router-link to="/about" tag="li">
            <a>About us</a>
          </router-link>
          <router-link to="/news" tag="li">
            <a>News</a>
          </router-link>
        </ul>
        <div class="contact">
          <router-link to="/contactus" tag="button">Contact US</router-link>
        </div>
      </div>
    </div> -->
</template>

<script>
export default {
  name: "appHeader",
};
</script>

<style  lang="scss" scoped>
.headertwo {
  font-family: Ubuntu-R;
  background-image: linear-gradient(to right, #013299, #395faf);
  nav {
    a {
      text-decoration: none;
      color: var(--color-text-navlink);
    }
    .middelnav li {
      position: relative;
      font-size: 20px;
    }
    .middelnav li:not(:last-child) {
      margin-right: 60px;
      font-weight: normal;
      @media (max-width: 991px) {
        margin-right: 0px;
      }
    }
    .middelnav li a:not(.router-link-active) {
      color: #8dc6f3;
      font-weight: normal;
    }

    .middelnav li a .router-link-active {
      font-weight: bold;
      color: #f4f7fc;
      font-size: 20px;
      font-family: Ubuntu-B;
      // &::after {
      //   content: "";
      //   background-image: url('/src/assets/logo/navlinkslogo.png');
      //   background-repeat: no-repeat;
      //   object-fit: fill;
      //   background-size: cover;
      //   position: absolute;
      //   top: -18px;
      //   left: 32%;
      //   width: 82%;
      //   height: 75%;
      // }
    }

    .btn-go {
      border: none;
      background-image: linear-gradient(to right, #e2f3ff, #f4f7fc);
      color: var(--color_text_buttontwo);
      width: 144px;
      height: 43px;
      border-radius: 28px;
      font-size: 1.25rem;
    }
    .navbar-toggler {
      width: 30px;
      height: 30px;
      position: relative;
      transition: 0.5s ease-in-out;
    }
    .navbar-toggler,
    .navbar-toggler:focus,
    .navbar-toggler:active,
    .navbar-toggler-icon:focus {
      outline: none;
      box-shadow: none;
      border: 0;
    }
    .navbar-toggler span {
      margin: 0;
      padding: 0;
    }
    .navbar-toggler span:nth-child(2) {
      width: 15px;
    }
    .navbar-toggler:hover span:nth-child(2) {
      width: 100%;
    }
    .toggler-icon {
      display: block;
      position: absolute;
      height: 3px;
      width: 100%;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      background-color: white;
      transition: 0.25s ease-in-out;
    }
    .middle-bar {
      margin-top: 0px;
    }
    .navbar-toggler .top-bar {
      margin-top: 0;
      transform: rotate(135deg);
    }
    .navbar-toggler .middle-bar {
      opacity: 0;
      filter: alpha(opacity=0);
    }
    .navbar-toggler .bottom-bar {
      margin-top: 0px;
      transform: rotate(-135deg);
    }
    .navbar-toggler.collapsed .top-bar {
      margin-top: -20px;
      transform: rotate(0deg);
    }
    .navbar-toggler.collapsed .middle-bar {
      opacity: 1;
      filter: alpha(opacity=100);
    }
    .navbar-toggler.collapsed .bottom-bar {
      margin-top: 20px;
      transform: rotate(0deg);
    }
  }
}
</style>