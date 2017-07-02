<template>
<div id="CompanyProfileModal">
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Company Profile</p>
      </header>
      <section class="modal-card-body">
        <div class="">
          <div>
            <div class="field">
              <label class="label">Name</label>
              <p class="control">
                <input v-validate="'required'" name="cname" v-model="companys.cname" placeholder="Company Name" type="text" class="input">
              </p>
              <div v-show="errors.has('cname')" class="help is-danger">
                {{ errors.first('cname') }}
              </div>
            </div>


            <div class="field">
              <label class="label">Short Name</label>
              <p class="control">
                <input v-validate="'required|max:6'" name="short_name" v-model="companys.short_name" placeholder="Company Short Name" type="text" class="input">
              </p>
              <div v-show="errors.has('short_name')" class="help is-danger">
                {{ errors.first('short_name') }}
              </div>
            </div>

            <div class="field">
              <label class="label">Address</label>
              <p class="control">
                <textarea v-validate="'required'" name="address" v-model="companys.address" class="textarea" placeholder="Company Address"></textarea>
              </p>
              <div v-show="errors.has('address')" class="help is-danger">
                {{ errors.first('address') }}
              </div>
            </div>

            <div class="field">
              <label class="label">GST Number</label>
              <p class="control">
                <input v-validate="'required'" name="gstin" v-model="companys.gstin" placeholder="Company GST Number" type="text" class="input">
              </p>
              <div v-show="errors.has('gstin')" class="help is-danger">
                {{ errors.first('gstin') }}
              </div>
            </div>

            <div class="field">
              <label class="label">State</label>
              <p class="control">
                <StateCombobox></StateCombobox>
              </p>
            </div>
            <!-- <div v-show="errors.has('jobType-select')" class="help is-danger">
                {{ errors.first('jobType-select') }}
              </div> -->


            <!-- state combobox-->


            <div class="field">
              <label class="label">Username</label>
              <p class="control">
                <input v-validate="'required|min-vale:8'" name="username" v-model="companys.username" placeholder="Company Username" type="text" class="input">
              </p>
              <div v-show="errors.has('username')" class="help is-danger">
                {{ errors.first('username') }}
              </div>
            </div>


            <div class="field">
              <label class="label">Password</label>
              <p class="control">
                <input v-validate="'required|min-vale:8'" name="password" v-model="companys.password" placeholder="Company Password" type="password" class="input">
              </p>
              <div v-show="errors.has('password')" class="help is-danger">
                {{ errors.first('password') }}
              </div>
            </div>
            <!-- <div class="help is-danger" v-show="errors.has('reason')">
                The Reason cannot be Empty.
              </div> -->
          </div>
        </div>

      </section>
      <footer class="modal-card-foot">
        <a class="button is-success">Update</a>
        <a class="button" v-on:click="$emit('close')">Close</a>
      </footer>
    </div>
    </div>
  </div>
</template>
<script>
import StateCombobox from '@/components/StateCombobox'
export default {
  name: 'CompanyProfileModal',
  components: {
    StateCombobox
  },
  data () {
    return {
      companys: {
        cname: '',
        short_name: '',
        address: '',
        gstin: '',
        username: '',
        password: '',
        state: ''
      }
    }
  },
  created () {
    this.$bus.$on('state', (state) => {
      this.companys.state = state.state
    })
  }
}
</script>
<style lang="scss">

</style>
