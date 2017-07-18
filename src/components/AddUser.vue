<template>
<div id="AddUser">
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add User</p>
      </header>
      <section class="modal-card-body">
        <div class="">
          <div>
            <div class="field">
              <label class="label">Name</label>
              <p class="control">
                <input v-validate="'required'" name="uname" v-model="users.uname" placeholder="Full Name" type="text" class="input">
              </p>
              <div v-show="errors.has('uname')" class="help is-danger">
                Name is field is required
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <p class="control">
                <input v-validate="'required'" name="email" v-model="users.email" placeholder="Email" type="text" class="input">
              </p>
              <div v-show="errors.has('email')" class="help is-danger">
                Email field is required
              </div>
            </div>

            <div class="field">
              <label class="label">password</label>
              <p class="control">
                <input v-validate="'required|min:8'" name="password" v-model="users.password" placeholder="Password" type="password" class="input">
              </p>
              <div v-show="errors.has('password')" class="help is-danger">
                The Password Field is required and should be minimum 8 characters.
              </div>
            </div>


            <div class="field">
              <label class="label">role</label>
              <p class="control">
                <input v-validate="'required'" name="role" v-model="users.role" placeholder="Role" type="role" class="input">
              </p>
              <div v-show="errors.has('role')" class="help is-danger">
                Role field is required.
              </div>
            </div>
            <!-- <div class="help is-danger" v-show="errors.has('reason')">
              The Reason cannot be Empty.
            </div> -->
          </div>
        </div>

      </section>
      <footer class="modal-card-foot">
        <a class="button is-success" @click="addUser()">Save</a>
        <a class="button" v-on:click="$emit('close')">Close</a>
      </footer>
    </div>
  </div>
</div>
</template>
<script>
import HTTP from '@/packages/HTTP'
export default {
  name: 'AddUser',
  data: () => ({
    users: {
      uname: '',
      email: '',
      password: '',
      role: ''
    }
  }),
  methods: {
    addUser () {
      HTTP.post(`user/createUser/`, {
        name: this.users.uname,
        email: this.users.email,
        password: this.users.password,
        role: this.users.role
      })
        .then(response => {
          this.$bus.$emit('user-added')
        })
        .catch((e) => {
          console.log(e)
        })
    },
    getToken () {
      var token = window.localStorage.getItem('token')
      if (token != null) {
        return true
      } else {
        this.$router.push('/')
      }
    }
  },
  created () {
    this.getToken()
  }
}
</script>
<style lang="css">
</style>
