<template>
  <div class="BankAccountTab">

    <div class="tile box">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification">
          <br>
          <pre v-model="this.banks=bank" hidden></pre>
          <div class="field">
            <label class="label">Bank Account</label>
            <p class="control">
              <input v-validate="'required'" v-model="this.banks.account_no" name="account_no" placeholder="Account Number" type="text" class="input">
            </p>
            <div v-show="errors.has('baccount')" class="help is-danger">
              {{ errors.first('baccount') }}
            </div>
          </div>
          <div class="field">
            <label class="label">Beneficiary Name</label>
            <p class="control">
              <input v-validate="'required'" name="bname" v-model="this.banks.beneficiary_name" placeholder="Beneficiary Name" type="text" class="input">
            </p>
            <div v-show="errors.has('bname')" class="help is-danger">
              {{ errors.first('bname') }}
            </div>
          </div>

          <div class="field">
            <label class="label">Branch IFSC</label>
            <p class="control">
              <input v-validate="'required'" name="bifsc" v-model="this.banks.branch_ifsc" placeholder="Branch IFSC" type="text" class="input">
            </p>
            <div v-show="errors.has('bifsc')" class="help is-danger">
              {{ errors.first('bifsc') }}
            </div>
          </div>
          <br>
          <div class="field">
            <a class="button is-info">Save</a>
          </div>
<br>
<br>
          <div class="field">
          </div>
          <div class="field">
          </div>
          <div class="field">
          </div>
          <div class="field">
          </div>
          <div class="field">
          </div>

        </article>
      </div>

    </div>

  </div>
</template>
<script>
import BankAccountsCombobox from '@/components/BankAccountsCombobox'
export default {
  name: 'BankAccountTab',
  data: () => ({
    banks: Object
  }),
  components: {
    BankAccountsCombobox
  },
  props: {
    bank: {
      required: true
    }
  }
}
</script>
<style lang="scss">
</style>
