<template>
<div class="BankAccountsCombobox">
  <span class="select is-fullwidth">
    			<select v-validate="'required|not_in:null'" name="bank_account-select" @change="">
    				<option value=null>Select Dropdown</option>
    				<option value=null>Bank Account 1</option>
    			</select>
    		</span>
  <div class="help is-danger" v-show="errors.has('bank_account-select')">
    {{errors.first('bank_account-select')}}
  </div>
</div>
</template>
<script>
export default {
  name: 'BankAccountsCombobox',
  data: () => ({

  })
}
</script>
<style lang="scss">
</style>
