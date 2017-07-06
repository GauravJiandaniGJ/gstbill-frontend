<template>
  <div class="BankAccountTabDebit">

    <div class="field">
      <a class="button is-info" v-if="!hidden" @click="hidden=true">Edit</a>
      <a class="button is-success" v-if="hidden" @click="bankChange()">Update</a>
      <a class="button is-info" v-if="hidden" @click="hidden=false">Hide</a>
    </div>

<div v-if="hidden" class="box">
    <span class="select is-fullwidth">
      <pre v-model="this.bank_details=bankDetailArray" hidden></pre>
      <pre v-model="this.bill_id=bill" hidden></pre>
      			<select v-validate="'required|not_in:null'" v-model="bank_detail_id" name="bank_account-select">
      				<option value=null>Select Dropdown</option>
      				<option value=null v-for="bank in bank_details" v-bind:value="bank.id">{{bank.account_no}}</option>
      			</select>
      		</span>
    <div class="help is-danger" v-show="errors.has('bank_account-select')">
      {{errors.first('bank_account-select')}}
    </div>
</div>

  </div>
</template>
<script>
import BankAccountsCombobox from '@/components/BankAccountsCombobox'
import axios from 'axios'
export default {
  name: 'BankAccountTabDebit',
  data: () => ({
    hidden: false,
    bank_detail_id: null,
    bank_details: [],
    bill_id: null,
    client_id: null
  }),
  components: {
    BankAccountsCombobox
  },
  props: {
    bankDetailArray: {
      required: true
    },
    bill: {
      required: true
    }
  },
  methods: {
    bankChange () {
      axios.patch(`http://localhost:8000/api/updatePrimary/` + this.bank_detail_id, {
        debit_date: null,
        description: null,
        bank_id: this.bank_detail_id,
        client_id: null,
        gstin: null
      })
        .then(response => {
          if (response.status === 200) {
            this.hidden = false
          }
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
}
</script>
<style lang="scss">
</style>
