<template>
  <div class="EditInvoiceDetails">

    <div class="column" id="editinv">
      <div class="field">
        <a class="button is-info" @click="hidden=true" v-if="!hidden">Edit</a>
        <a class="button is-info" @click="hidden=false" v-if="hidden">Hide</a>
      </div>
    </div>

    <div v-if="hidden">
    <div class="columns is-multiline">

      <div class="column">
        <div class="field">
          <p class="control">
            <input v-validate="'required'" name="invno" placeholder="Invoice Number" type="text" class="input">
          </p>
          <div v-show="errors.has('invno')" class="help is-danger">
            {{ errors.first('invno') }}
          </div>
        </div>
      </div>

      <div class="column">
        <div class="field">
          <p class="control">
            <input v-validate="'required'" name="inv_date" placeholder="Invoice Date" type="text" class="input">
          </p>
          <div v-show="errors.has('inv_date')" class="help is-danger">
            {{ errors.first('inv_date') }}
          </div>
        </div>
      </div>
    </div>

    <div class="columns is-multiline">
      <div class="column">
        <div class="field">
          <p class="control">
            <input v-validate="'required'" name="gstin" placeholder="GST Number" type="text" class="input">
          </p>
          <div v-show="errors.has('gstin')" class="help is-danger">
            {{ errors.first('gstin') }}
          </div>
        </div>
      </div>

      <div class="column">
        <div class="field">
          <p class="control">
            <StateCombobox></StateCombobox>
          </p>
          <div v-show="errors.has('state')" class="help is-danger">
            {{ errors.first('state') }}
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>
<script>
import StateCombobox from '@/components/StateCombobox'
export default {
  name: 'EditInvoiceDetails',
  data () {
    return {
      inv_no: '',
      inv_date: '',
      gstin: '',
      state: '',
      hidden: false
    }
  },
  components: {
    StateCombobox
  }
}
</script>
<style lang="scss">
.EditInvoiceDetails{
  .control {
    text-align:center;
    .input {
      text-align: center;
    }
  }

  .is-multiline {
    padding-top: 1.5rem;
  }
}
</style>
