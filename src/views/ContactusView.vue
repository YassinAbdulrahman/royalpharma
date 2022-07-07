<template>
  <div class="contactus">
    <div class="container">
      <div class="row g-0 content-news">
        <div class="col-md-6">
          <div class="first-content text-md-start">
            <h2>get in touch with Us</h2>
            <p>
              you can contact us throw submitting the info that you want to ask
              us in the form
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
        <div class="col-md-6">
          <div class="second-content">
            <googlemapping />
            <div class="list_links">
              <span>
                <contactlocation-icon/>
                <a href="#">End of Bagdad St. across 60th St. Royal Pharma Building Sana'a – Yemen</a>
              </span>
              <span>
                <contactemail-icon />
                <a href="#">import@royalpharma.com</a>
              </span>
              <span>
                <contactcell-icon/>
                <a href="#">+967-1-454999/8</a>
              </span>
              <span>
                <contactfax-icon/>
                <a href="#">+967-1-454997E-</a>
              </span>
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
  .first-content {
    h2 {
      font-size: 3rem;
      text-transform: capitalize;
      color: var(--color_text_buttontwo);
      margin: 0;
    }
    p {
      color: #082a45;
      font-size: 1.5rem;
      line-height: 38.4px;
      width: 502px;
      height: 65px;
      margin: 0;
      margin-top: 24px;
      max-width: 100%;
    }
    form {
      margin-top: 26px;
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
      span{
        display: flex;
        align-items: center;
        svg{
          width: 24px;
          margin-right: 19px;
        }
        a:first-of-type{
          font-size: 14px;
        }
        a{
          text-decoration: none;
          color: var(--color_text_buttontwo);
          font-size: 18px;
          font-weight: 500;
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