<template>
  <div class="EditInvoiceDetails">

    <div class="column" id="editinv">
      <div class="field">
        <a class="button is-info" @click="hidden=true" v-if="!hidden">Edit</a>
        <a class="button is-info" @click="hidden=false" v-if="hidden">Hide</a>
        <a class="button is-success" v-if="hidden" @click="updateGstBill()">Update</a>
      </div>
    </div>

    <div v-if="hidden" class="box" >
    <div class="columns is-multiline">

      <div class="column">
        <div class="field">
          <label class="label">Invoice Number</label>
          <p class="control">
            <input v-validate="'required'" name="invno" v-model="this.inv_no=invoice.inv_no" placeholder="Invoice Number" type="text" class="input">
          </p>
          <div v-show="errors.has('invno')" class="help is-danger">
            {{ errors.first('invno') }}
          </div>
        </div>
      </div>

      <div class="column">
        <div class="field">
          <label class="label">Invoice Date</label>
          <p class="control">
            <input v-validate="'required'" name="inv_date" v-model="this.inv_date=invoice.inv_date" placeholder="Invoice Date" type="text" class="input">
          </p>
          <div v-show="errors.has('inv_date')" class="help is-danger">
            {{ errors.first('inv_date') }}
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
  },
  props: {
    invoice: {
      required: true
    }
  },
  methods: {
    updateGstBill () {
      this.hidden = false
    }
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

#editinv {
  padding-top: 0.8em;
  padding-bottom: 0.8rem;
}
</style>
