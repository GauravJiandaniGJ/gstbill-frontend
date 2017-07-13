<template>
<div id="NewCompany">
  <div class="box">
    <h4 class="title placement-header">Enter Company Details</h4>
  </div>
  <div class="box">

    <div class="field">
      <label class="label">Name</label>
      <p class="control">
        <input id="input" v-validate="'required'" name="cname" v-model="companys.cname" placeholder="Company Name" type="text" class="input">
      </p>
      <div v-show="errors.has('cname')" class="help is-danger">
        {{ errors.first('cname') }}
      </div>
    </div>


    <div class="field">
      <label class="label">Short Name</label>
      <p class="control">
        <input id="input" v-validate="'required|max:6'" name="short_name" v-model="companys.short_name" placeholder="Company Short Name" type="text" class="input">
      </p>
      <div v-show="errors.has('short_name')" class="help is-danger">
        {{ errors.first('short_name') }}
      </div>
    </div>

    <div class="field">
      <label class="label">Address</label>
      <p class="control">
        <textarea id="input" v-validate="'required'" name="address" v-model="companys.address" class="textarea" placeholder="Company Address"></textarea>
      </p>
      <div v-show="errors.has('address')" class="help is-danger">
        {{ errors.first('address') }}
      </div>
    </div>

    <div class="field">
      <label class="label">GST Number</label>
      <p class="control">
        <input id="input" v-validate="'required'" name="gstin" v-model="companys.gstin" placeholder="Company GST Number" type="text" class="input">
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


    <!-- state combobox-->

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
        cname: '',
        short_name: '',
        address: '',
        gstin: '',
        username: 'helloworld',
        password: 'helloworld',
        state: ''
      }
    }
  },
  created () {
    this.$bus.$on('state', (response) => {
      this.companys.state = response.state
    })
  },
  methods: {
    validateCompany () {
      this.$validator.validateAll()
      .then(console.log('log'))
      .catch(() => {
        console.log('error')
      })
    },
    validate () {
      return
    },
    createCompany () {
      axios.post(`http://localhost:8000/api/company/createCompany/`, {
        name: this.companys.cname,
        short_name: this.companys.short_name,
        address: this.companys.address,
        gstin: this.companys.gstin,
        state: this.companys.state,
        username: this.companys.username,
        password: this.companys.password
      })
        .then(response => {
          // this.companys.cname = ''
          // this.companys.short_name = ''
          // this.companys.address = ''
          // this.companys.gstin = ''
          // this.companys.username = ''
          // this.companys.password = ''
          // this.companys.state = ''
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
}
</script>
<style lang="css">
.NewCompany {

  .title.placement-header {
    border-bottom: solid 1px #ddd;
    margin-bottom: 0;
    padding: 1rem;
  }

  .placement-body {
    padding: 1rem;
    text-align: center;
  }

}

  .field.is-grouped{
    margin-top: 1.2rem;

  }


</style>
