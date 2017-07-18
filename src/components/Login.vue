<template lang="html">
<div class="main_div">
  <div class="body"></div>
  		<div class="grad"></div>
  		<div class="header">
  			<div>GST<span>Billing</span></div>
  		</div>
  		<br>
  		<div class="login">
  				<input type="text" placeholder="Email" name="email" size="35" v-model="email" ><br>

  				<input type="password" placeholder="Password" name="password" v-model="password" >
					<br><br>

  				<input type="button" value="Login" @click="authenticate()">
  		</div>

</div>
</template>


<script>
import HTTP from '@/packages/HTTP'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      email: '',
      password: '',
      token: ''
    }
  },
  methods: {
    authenticate () {
      HTTP.post(`login/`, {
        email: this.email,
        password: this.password
      })
        .then(response => {
          if (response.status === 200) {
            var token = response.data.token
            this.setToken(token)
            this.$router.push('/Home')
          }
        })
        .catch((e) => {
          console.log(e)
        })
    },
    setToken (token) {
      window.localStorage.setItem('token', token)
    },
    getToken () {
      var token = window.localStorage.getItem('token')
      if (token != null) {
        return token
      } else {
        return null
      }
    },
    destroyEverything () {
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('cid')
    }
  },
  created () {
    this.destroyEverything()
  }
}
</script>



<style lang="scss">


.main_div {

	body{
		margin: 0;
		padding: 0;
		background: #fff;

		color: #fff;
		font-family: Arial;
		font-size: 12px;
	}

.body{
	position: fixed;
	top: -20px;
	left: -20px;
	right: -40px;
	bottom: -40px;
	width: auto;
	height: auto;
	background-image: url(http://ginva.com/wp-content/uploads/2012/07/city-skyline-wallpapers-008.jpg);
	background-size: 100%;
	-webkit-filter: blur(5px);
	z-index: 0;
}


.grad{
	position: fixed;
	top: -20px;
	left: -20px;
	right: -40px;
	bottom: -40px;
	width: auto;
	height: auto;
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(0,0,0,0)), color-stop(100%,rgba(0,0,0,0.65))); /* Chrome,Safari4+ */
	z-index: 1;
	opacity: 0.7;
}


.header{
	position: fixed;
	top: calc(50% - 35px);
	left: calc(50% - 255px);
	z-index: 2;
}

.header div{
	float: left;
	color: #fff;
	font-family: 'Exo', sans-serif;
	font-size: 35px;
	font-weight: 300;
}

.header div span{
	color: #5379fa !important;
}


.login{
	position: fixed;
	top: calc(50% - 75px);
	left: calc(50% - 50px);
	height: 150px;
	width: 350px;
	padding: 10px;
	z-index: 2;
}

.login input[type=text]{
	width: 300px;
	height: 40px;
	background: transparent;
	border: 1px solid rgba(255,255,255,0.6);
	border-radius: 2px;
	color: #fff;
	font-family: 'Exo', sans-serif;
	font-size: 16px;
	font-weight: 400;
	padding: 4px;
}

.login input[type=password]{
	width: 300px;
	height: 40px;
	background: transparent;
	border: 1px solid rgba(255,255,255,0.6);
	border-radius: 2px;
	color: #fff;
	font-family: 'Exo', sans-serif;
	font-size: 16px;
	font-weight: 400;
	padding: 4px;
	margin-top: 10px;
}

.login input[type=button]{
	width: 200px;
	height: 30px;
	background: #fff;
	border: 2px solid grey;
	cursor: pointer;
	border-radius: 2px;
	color: #a18d6c;
	font-family: 'Exo', sans-serif;
	font-size: 12px;
	font-weight: 400;
	padding: 6px;
	margin-top: 10px;
}

.login input[type=button]:hover{
	opacity: 0.8;
}

.login input[type=button]:active{
	opacity: 0.6;
}

.login input[type=text]:focus{
	outline: none;
	border: 1px solid rgba(255,255,255,0.9);
}

.login input[type=password]:focus{
	outline: none;
	border: 1px solid rgba(255,255,255,0.9);
}

.login input[type=button]:focus{
	outline: none;
}

::-webkit-input-placeholder{
   color: rgba(255,255,255,0.6);
}

::-moz-input-placeholder{
   color: rgba(255,255,255,0.6);
}

}
</style>
