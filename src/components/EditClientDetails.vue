<template>
  <div class="EditClientDetails">

    <div class="column">
      <div class="field">
        <a class="button is-info" @click="hidden=true" v-if="!hidden">Edit</a>
        <a class="button is-info" @click="hidden=false" v-if="hidden">Hide</a>
      </div>
    </div>

<div v-if="hidden" class="box" id="editclient">
    <div class="columns is-multiline">
      <div class="column">
        <div class="field">
          <label class="label">Client Name</label>
          <ClientNameComboBox></ClientNameComboBox>
          <div v-show="errors.has('gstin')" class="help is-danger">
            {{ errors.first('gstin') }}
          </div>
        </div>
      </div>

      <div class="column">
        <div class="field">
          <label class="label">Client Address</label>
          <p class="control">
            <ClientAddressCombobox></ClientAddressCombobox>
          </p>
          <div v-show="errors.has('state')" class="help is-danger">
            {{ errors.first('state') }}
          </div>
        </div>
      </div>
    </div>

    <div class="columns is-multiline">
      <div class="column">
        <div class="field">
          <label class="label">GST Number</label>
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
          <label class="label">State</label>
          <p class="control">
            <StateCombobox></StateCombobox>
          </p>
          <div v-show="errors.has('state')" class="help is-danger">
            {{ errors.first('state') }}
          </div>
        </div>
      </div>
    </div>

    <div class="columns is-multiline" id="description">
      <div class="column">
        <div class="field">
          <label class="label">Description</label>
          <p class="control">
            <input v-validate="'required'" name="description" placeholder="Description" type="text" class="input">
          </p>
          <div v-show="errors.has('description')" class="help is-danger">
            {{ errors.first('description') }}
          </div>
        </div>
      </div>
    </div>

</div>
  </div>
</template>
<script>
import StateCombobox from '@/components/StateCombobox'
import ClientNameComboBox from '@/components/ClientNameComboBox'
import ClientAddressCombobox from '@/components/ClientAddressCombobox'
export default {
  name: 'EditClientDetails',
  data () {
    return {
      hidden: false
    }
  },
  components: {
    StateCombobox,
    ClientNameComboBox,
    ClientAddressCombobox
  }
}
</script>
<style lang="scss">
.EditClientDetails{
  .select.is-fullwidth{
    padding-left: 1rem;
  }
}

#description {
  padding-bottom: 1rem;
}

</style>
