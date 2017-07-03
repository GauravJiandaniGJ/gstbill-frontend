<template>
<div class="box NewDebitEntry">

  <div class="field">
      <label class="label">Bill No.</label>
      <p class="control">
        <BillNoTextBox></BillNoTextBox>
      </p>

    </div>

  <div class="field">
    <label class="label">Bill Date</label>
    <p class="control is-fullwidth">
      <!-- <datepicker :config="{ wrap: true }" readonly>
    <a class="button" data-toggle><i class="fa fa-calendar"></i></a>
    <a class="button" data-clear><i class="fa fa-close"></i></a>
  </datepicker> -->
    </p>
    <div v-show="errors.has('date')" class="help is-danger">
      The Bill Date is a required field.
    </div>
  </div>


    <div class="field">
        <label class="label">Client Name</label>
        <p class="control">
          <ClientNameComboBox></ClientNameComboBox>
        </p>
        <div v-show="errors.has('ClientName-select')" class="help is-danger">
            {{ errors.first('ClientName-select') }}
        </div>
    </div>


          <div class="field">
              <label class="label">Client GSTIN</label>
              <!-- <p class="control">
                <ClientAddressComboBox></ClientAddressComboBox>
              </p>
              <div v-show="errors.has('ClientAddress-select')" class="help is-danger">
                  {{ errors.first('ClientAddress-select') }}
                </div> -->
            </div>


  <div class="field">
    <label class="label">Description</label>
    <p class="control">
      <input v-validate="'required'" name="description" v-model="debit.description" placeholder="Bill description" type="text" class="input">
    </p>
    <div v-show="errors.has('description')" class="help is-danger">
      {{ errors.first('description') }}
    </div>
  </div>


  <div class="field is-grouped but">
    <p class="control buttons">
      <button class="button is-primary" @click="">Create</button>
    </p>
  </div>
</div>
</template>
<script>
import BillNoTextBox from '@/components/BillNoTextBox'
import ClientNameComboBox from '@/components/ClientNameComboBox'
export default {
  name: 'NewDebitEntry',
  components: {
    BillNoTextBox,
    ClientNameComboBox
  },
  data () {
    return {
      debit: {
        cname: ''
      }
    }
  }
}
</script>
<style lang="scss">
.NewDebitEntry {

    .placement-body {
        padding: 1rem;
    }

}

.field.is-grouped {
    margin-top: 1.2rem;
}

.field.is-grouped.but {
    margin-left: 45.5%;
    margin-right: 50%;
}

</style>
