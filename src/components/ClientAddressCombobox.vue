<template>
  <div class="ClientAddressCombobox">
    <span class="select is-fullwidth">
            <select v-validate="'required|not_in:null'" name="client_address-select" @change="">
              <option value=null disbled></option>
              <option value=null disabled>Select Address</option>
              <option value=null>Client Address 1</option>
            </select>
          </span>
    <div class="help is-danger" v-show="errors.has('bank_account-select')">
      {{errors.first('bank_account-select')}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'ClientAddressCombobox',
  data: () => ({

  })
}
</script>
<style lang="scss">
</style>
