<template lang="html">
<div class="body">
Hello
    <section class="hero is-fullheight is-dark">
      <div class="hero-head">
        <header class="nav">
          <div class="container">
            <div class="nav-left">
              <a class="nav-item">
                DA-IICT
              </a>
            </div>


            <div class="nav-right nav-menu">
              <form @submit.prevent="login" class="nav-item">
                <!-- input fields -->
                <div class="field">
                  <p class="control has-icons-left">
                    <input name="email"  class="input is-small" type="text" placeholder="Email">
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>

                  </p>
                </div>

                <div class="field">
                  <p class="control has-icons-left">
                    <input name="password" class="input is-small" type="password" placeholder="Password">
                    <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                    </span>

                  </p>
                </div>
                <div>
                  <input class="button is-info is-outlined is-inverted" type="submit" value="Login" />
                </div>
                <!-- </router-link> -->

              </form>
            </div>
          </div>
        </header>
      </div>

    </section>

  </div>
</template>


<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>



<style lang="scss">
.body {

  .hero.is-dark {
    background-image: linear-gradient(rgba(25, 181, 254, 0.6),rgba(246, 36, 89, 0.3)),linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.1));
  }

  .column.is-6 {
    -webkit-border-radius: 1em;
    outline: grey;
    outline-width: medium;
    outline-offset: 0px, glow;
    outline-color: grey;
    outline-style: double;
    padding-top: 20px;
    padding-bottom: 20px;
    .home-image {
      width: 30%;
    }
  }

  .field {
    margin-bottom: 0;
    padding-right: 10px;
    .control {
      opacity: 0.7;
    }
  }
  .hero {
    .notification.is-danger {
      display: table;
      //content accordingly
      margin-bottom: 0;
      margin-right: 0;
      margin-left: auto;
      background-color: #b31d1d;
    }
  }
}
</style>
