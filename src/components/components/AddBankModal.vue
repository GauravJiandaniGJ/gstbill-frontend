<template>
  <div id="AddBankModal">
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Add new Bank</p>
        </header>
        <section class="modal-card-body">
          <div class="">
            <div>
              <div class="field">
                <label class="label">Account Number</label>
                <p class="control">
                  <input v-validate="'required|min:8'" name="account_number" v-model="banks.account_number" placeholder="Insert Account Number" type="text" class="input">
                </p>
                <div v-show="errors.has('account_number')" class="help is-danger">
                  {{ errors.first('account_number') }}
                </div>
              </div>

              <div class="field">
                <label class="label">Beneficiary Name</label>
                <p class="control">
                  <input v-validate="'required|min:6'" name="beneficiary_name" v-model="banks.beneficiary_name" placeholder="Insert Beneficiary Name" type="text" class="input">
                </p>
                <div v-show="errors.has('beneficiary_name')" class="help is-danger">
                  {{ errors.first('beneficiary_name') }}
                </div>
              </div>

              <div class="field">
                <label class="label">Bank IFSC Code</label>
                <p class="control">
                  <input v-validate="'required|min:4'" name="ifsc_code" v-model="banks.ifsc_code" placeholder="Insert Banks IFSC Code" type="text" class="input">
                </p>
                <div v-show="errors.has('ifsc_code')" class="help is-danger">
                  {{ errors.first('ifsc_code') }}
                </div>
              </div>
            </div>
<pre v-model="this.banks.cid=company.id" hidden></pre>
          </div>

        </section>
        <footer class="modal-card-foot">
          <a class="button is-success" v-if="!hidden" @click="addBank(banks.cid)">Create</a>
          <a class="button is-info" v-if="hidden" @click="$emit('close')">Created !</a>
          <a class="button" v-on:click="$emit('close')">Close</a>
        </footer>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import HTTP from '@/packages/HTTP'
export default {
  name: 'AddBankModal',
  data () {
    return {
      banks: {
        account_number: null,
        beneficiary_name: '',
        ifsc_code: '',
        cid: null
      },
      hidden: false
    }
  },
  props: {
    company: {
      required: true
    }
  },
  methods: {
    addBank (id) {
      HTTP.post(`company/addBank/` + id, {
        account_no: this.banks.account_number,
        beneficiary_name: this.banks.beneficiary_name,
        branch_ifsc: this.banks.ifsc_code
      })
        .then(response => {
          if (response.status === 200) {
            this.hidden = true
          }
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
<style lang="scss" scoped>
</style>
