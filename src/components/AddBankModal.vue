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
          </div>

        </section>
        <footer class="modal-card-foot">
          <a class="button is-success">Create</a>
          <a class="button" v-on:click="$emit('close')">Close</a>
        </footer>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AddBankModal',
  data () {
    return {
      banks: {
        account_number: '',
        beneficiary_name: '',
        ifsc_code: ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
