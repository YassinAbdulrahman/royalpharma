<template>
  <div class="contactus">
    <div class="container">
      <div class="content-news">
        <div class="row g-0 justify-content-center">
          <div class="col-sm-3 tab-content-news text-start">
            <h5>the Branch</h5>
            <ul class="p-0">
              <li>Sana'a branch</li>
              <li>Sana'a branch</li>
              <li>Sana'a branch</li>
              <li>Sana'a branch</li>
              <li>Sana'a branch</li>
              <li>Sana'a branch</li>
              <li>Sana'a branch</li>
              <li>Sana'a branch</li>
              <li>Sana'a branch</li>
              <li>Sana'a branch</li>
              <li>Sana'a branch</li>
              <li>Sana'a branch</li>
              <li>Sana'a branch</li>
            </ul>
          </div>
          <div class="col-sm-9 inner-content-news">
            <h2>Get in Touch with Sana'a branch</h2>
            <div class="row g-3">
              <div class="col-8 col-sm-6">
                <div class="first-content text-md-start">
                  <p>
                    you can contact us throw submitting the info that you want
                    to ask us in the form
                  </p>
                  <form action="">
                    <label for="">Your name</label>
                    <input type="text" placeholder="Your name" />
                    <label for="">Your email</label>
                    <input type="text" placeholder="Your email" />
                    <label for="">Your name</label>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      placeholder="Your name"
                    ></textarea>
                    <br />
                    <input type="submit" value="Send" />
                  </form>
                </div>
              </div>
              <div class="col-4 col-sm-6">
                <div class="second-content">
                  <googlemapping />
                  <div class="list_links">
                    <span>
                      <contactlocation-icon />
                      <a href="#"
                        >End of Bagdad St. across 60th St. Royal Pharma Building
                        Sana'a – Yemen</a
                      >
                    </span>
                    <span>
                      <contactemail-icon />
                      <a href="#">import@royalpharma.com</a>
                    </span>
                    <span>
                      <contactcell-icon />
                      <a href="#">+967-1-454999/8</a>
                    </span>
                    <span>
                      <contactfax-icon />
                      <a href="#">+967-1-454997E-</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-footer />
  </div>
</template>

<script>
import appFooter from "@/components/global/appFooter.vue";
import googlemapping from "@/components/global/map.vue";

export default {
  name: "ContactusView",
  components: {
    appFooter,
    googlemapping,
  },
};
</script>

<style lang="scss" scoped>
.content-news {
  background-image: linear-gradient(to right, #e2f3ff, #f4f7fc);
  box-shadow: 0 3px 6px rgb(0, 0, 0, 16%);
  border-radius: 20px;
  padding: 48px;
  margin-top: 4.5rem;
  margin-bottom: 4.5rem;
  font-family: Ubuntu-R;
  >.row{
    column-gap: 32px;
  }

  .tab-content-news {
    padding: 21px 21px 21px 21px;
    width: 201px;
    background-color: #ffffff;
    border-radius: 10px;
    ::-webkit-scrollbar-track {
      background-color: #fff;
    }
    ::-webkit-scrollbar-thumb {
      background: #fff;
      border-radius: 3px;
    }
    h5 {
      font-size: 24px;
      color: #082a45;
      border-bottom: 2px solid #cce3fc;
      padding-bottom: 12px;
    }
    ul {
      height: 589px;
      overflow-y: scroll;
      li {
        padding: 24px 0 0 0;
        cursor: pointer;
        font-size: 18px;
        color: #9c9c9c;
        &:active {
          color: #013299;
          font-family: Ubuntu-B;
        }
      }
    }
  }
  h2 {
    font-size: 3rem;
    text-transform: capitalize;
    color: var(--color_text_buttontwo);
    margin: 0;
    text-align: left;
    font-family: Ubuntu-M;
    padding-bottom: 24px;
  }
  .inner-content-news{

  .first-content {
    p {
      color: #082a45;
      font-size: 1.5rem;
      line-height: 38.4px;
      width: 502px;
      height: 65px;
      margin: 0;
      max-width: 100%;
    }
    form {
      padding-top: 50px;
      label {
        display: block;
        color: var(--color_text_buttontwo);
        font-size: 1.125rem;
        line-height: 21px;
        margin: 16px 0 10px 10px;
      }
      input[type="text"] {
        width: 488px;
        max-width: 100%;
        height: 50px;
        border-radius: 10px;
        border: none;
        outline: none;
        padding-left: 16px;
      }
      ::-webkit-input-placeholder {
        padding: 14px 0 13px 0;
        font-size: 20px;
        line-height: 24px;
        color: #777777;
      }
      textarea {
        width: 488px;
        max-width: 100%;
        height: 183px;
        border-radius: 10px;
        border: none;
        outline: none;
        padding-left: 16px;
        padding-top: 14px;
      }
      textarea::-webkit-input-placeholder {
        padding: 0 0 13px 0;
      }
      input[type="submit"] {
        border: none;
        outline: none;
        width: 488px;
        height: 47px;
        border-radius: 28px;
        box-shadow: 0 3px 6px rgb(0, 0, 0, 16%);
        background-image: linear-gradient(to right, #013299, #395faf);
        font-size: 1.5rem;
        color: #edeff5;
        margin-top: 30px;
        max-width: 100%;
      }
    }
  }
  .second-content {
    .list_links {
      display: flex;
      flex-direction: column;
      row-gap: 16.7px;
      margin-top: 24.5px;
      span {
        display: flex;
        align-items: center;
        svg {
          width: 24px;
          margin-right: 19px;
        }
        a:first-of-type {
          font-size: 14px;
        }
        a {
          text-decoration: none;
          color: var(--color_text_buttontwo);
          font-size: 18px;
          font-weight: 500;
        }
      }
    }
  }
  }
}
@media screen and (max-width: 991px) {
  .content-news {
    .first-content {
      form {
        margin-top: 114px;
      }
    }
  }
}
</style>