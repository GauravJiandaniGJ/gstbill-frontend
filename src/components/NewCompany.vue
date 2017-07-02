<template>
<div id="NewCompany">
  <div class="box">
    <h4 class="title placement-header">Enter Company Details</h4>
  </div>
  <div class="box">

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
      <!-- <div v-show="errors.has('jobType-select')" class="help is-danger">
    			{{ errors.first('jobType-select') }}
    		</div> -->
    </div>


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


    <div class="field is-grouped">
      <p class="control buttons">
        <button class="button is-primary" @click="createCompany">Save</button>
      </p>
    </div>
  </div>
</div>
</div>
</template>
<script>
import axios from 'axios'
import StateCombobox from '@/components/StateCombobox'
export default {
  name: 'NewCompany',
  components: {
    StateCombobox
  },
  data () {
    return {
      companys: {
        cname: null,
        short_name: null,
        address: null,
        gstin: null,
        username: null,
        password: null,
        state: null
      }
    }
  },
  created () {
    this.$bus.$on('state', (state) => {
      this.companys.state = state.state
    })
  },
  methods: {
    createCompany () {
      console.log(this.companys.state)
      axios.post(`http://localhost:8000/api/company/createCompany/`, {
        body: {
          name: this.companys.cname,
          short_name: this.companys.short_name,
          address: this.companys.address,
          gstin: this.companys.gstin,
          state: this.companys.state,
          username: this.companys.username,
          password: this.companys.password
        }
      })
        .then(response => {})
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>
<style lang="css">
.placement-primary {

  .title.placement-header {
    border-bottom: solid 1px #ddd;
    margin-bottom: 0;
    padding: 1rem;
  }

  .placement-body {
    padding: 1rem;
  }
}

</style>
