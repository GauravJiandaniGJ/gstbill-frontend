<template>
  <div id="ProfileModal">

    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">User Profile</p>
        </header>
        <section class="modal-card-body">
          <div class="">
            <div>
              <div class="field">
                <label class="label">Name</label>
                <p class="control">
                  <input v-validate="'required'" name="uname" v-model="users.email" placeholder="Full Name" type="text" class="input">
                </p>
                <div v-show="errors.has('uname')" class="help is-danger">
                  {{ errors.first('uname') }}
                </div>
              </div>

              <div class="field">
                <label class="label">Email</label>
                <p class="control">
                  <input v-validate="'required'" name="email" v-model="users.email" placeholder="Email" type="text" class="input">
                </p>
                <div v-show="errors.has('email')" class="help is-danger">
                  {{ errors.first('email') }}
                </div>
              </div>

              <div class="field">
                <label class="label">Password</label>
                <p class="control">
                  <input v-validate="'required'" name="password" v-model="users.password" placeholder="Password" type="password" class="input">
                </p>
                <div v-show="errors.has('password')" class="help is-danger">
                  {{ errors.first('password') }}
                </div>
              </div>

              <div class="field">
                <label class="label">Role</label>
                <p class="control">
                  <input v-validate="'required'" name="role" v-model="users.role" placeholder="Role" type="role" class="input">
                </p>
                <div v-show="errors.has('role')" class="help is-danger">
                  {{ errors.first('role') }}
                </div>
              </div>
              <!-- <div class="help is-danger" v-show="errors.has('reason')">
                The Reason cannot be Empty.
              </div> -->
            </div>
          </div>

        </section>
        <footer class="modal-card-foot">
          <a class="button is-success">Edit</a>
          <a class="button" v-on:click="$emit('close')">Close</a>
        </footer>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'ProfileModal',
  data: () => ({
    users: {
      uname: '',
      email: '',
      password: '',
      role: ''
    }
  })
}
</script>
<style lang="scss" scoped>
</style>
