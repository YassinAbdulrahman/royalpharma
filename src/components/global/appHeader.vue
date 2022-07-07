<template>
  <div>
    <div class="headertwo sticky-top" v-if="$route.name == 'about'">
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
    <div class="headertwo sticky-top" v-if="$route.name == 'marketingview'">
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
    <div class="headertwo sticky-top" v-if="$route.name == 'news'">
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
    <div class="headertwo sticky-top" v-if="$route.name == 'contactus'">
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
    <div class="headertwo sticky-top" v-if="$route.name == 'subnewsviews'">
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
      @media (max-width:991px) {
        margin-right: 0px;
      }
    }
    .middelnav li a:not(.router-link-active){
      color: #8dc6f3;
      font-weight: normal;
    }

    .middelnav li a .router-link-active  {
      font-weight: bold;
      color: #f4f7fc;
      font-size: 20px;
      // &::before {
      //   content: "";
      //   background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAAaCAYAAADR2YAqAAAABHNCSVQICAgIfAhkiAAABRxJREFUaEPtWntom1UUP+fm0aatbtplM8nXJl8aRMc2ECfIqsM/FO2QWXTK6oNNGOo/goqz+PhDOxH/8bU/pihsaGU4ZBbF+ejAx6D4dlOYgkuapE2ybK1OXewzucfzpa22XZrk+770mV0oSfPd87vn/O6553EThAU2ehXFYa0U/owEVYBokAJ8CBgAIpVVVQGxKp/KRHQSAH9HgFMEFGLZoCB5PAOWoNLd/dtCMpd1nL+RXLWqmi5wrJeEVwHQlQS4HhECs6kREZxAoKNCynftllRnbfCPv2dzvXzYc0p+n9frGrWKmyXQNeydVzDRa+fL8Il1+XR8wSQcQYKvbH+lupz9/WfnSqdZJz/h9V5OVtzOXr2JyV4zV4YZXYfD1ntAcp/S3fOhUYxi5WaF/JjHU4uV9nsB6U7Nw4tVRs88Dh8/c6g6xvgnBFGKBKY4L5xl8lL8+RCicPKzFaxDLUh08quTAPh/vJSNVgqtxScizrh7JaZfV4LxWKH5Rp6XlPyEqnpJwKOs+A5ErDSiUE4ZgigifUSSvgcBxzzB6I9msE87nTUjy6rXoKTVgHAZb8g63qgbZ8LkjT5kzdCuSyKRb8ysO122JOSfDNSvliSeYiNaSqEce+8gK/YlIR22AH3qCvYcLwVuPgxtQ9LLHM1sRws7zqZcc3kT2ivSstUZjXJFZX6YIv+Uqq5LC2pj0m8xrwojEH1CiPs8afoAI5GhkmAaAPmzvv6if+yW21j0Hv7bOBlCcwyB0OYORp43AD1FxBD5Z3y+5YNWeI494X4mXphTgo5yLG4XAyPt7kSi3xxW6aWTfmVtBq1PMvIWttUysYLWQ7Cz3KeEop8ZXVU3+Qm/9y4pcDc3LxcbXTQrR/SDANrpCkU/N4UzR8Iz5zPaiwMjD7LjDOhVpWjyE253FTjsezgsbNO7yJRjC9TNNfUTnlDkgBmc+ZIdq+SsrYBi5+RTYJGZFld373d69CqKfC22j1qog73drwd82tx+JNrlDkV2m8BYMKJ9dXXuEbv1Ga6WdkwoxZ3z43pyQUHyOczcKhHf5grAYchyIsmx8jXuHltX9vVxDb60RraJtCEnX9w8Zhl1Vo/Irct7es4UsjQv+Qm/+gLX7Y8UApn5Of0qMrjdFQ5/axxjcUhqTkpCvMna1nAhEqwcHr1uRSwWz6d9TvIpEKhIUPqA4RKSiJMPPu0OhV/kBTKLgz7zWia9XjVjw4PZrp4bw4rh0cZ8G3AO+dpNY6bG0cnEbzCozhGg4bs9oUSvQflFLxYL+F7i/PgQb0APStjoDoejuYw6h/x4g3qYk8j1Rhjg2vdlJRh52IjsUpOJB1TOAbSfe5hkxShdm6srnkJ+vMG33+gVAce5bUoo/NZSI9GMPePJ+BARpi042OgKJvsm4/1HfszvewAFvqp3sew3RxKblHD4J72y5TBfu6pI2UUHEFZ5QuENTHj6/9KU32mJIm3FX/TeRHKY+doCQ5un72g5kKrHRg49Fq4cXwGUA55Q9LEp5HO46dKdYIne5y61WY8S5T431qA+awHZxVcqH2tc4Hh9yuVR8UO73+Yj1Dz5CBUvXd4zEw3eNmsG96yMRJKot7rhI3RQCYa3lDeF5qznSLOVo8Y72YQ7fm3aRAhNfBga+UNbTniiDr6bueO8x5sjnx1YnK6v55/ETBvZb3QurLqBL2Ru4kahiWv+uuyUMeJvL6eO1RzFhaULXqxpp0Ki7Wq+KnijMNz5GXoY+BePcupxj3w+5gAAAABJRU5ErkJggg==);
      //   background-repeat: no-repeat;
      //   -o-object-fit: contain;
      //   object-fit: cover;
      //   /* background-size: cover; */
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