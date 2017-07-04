<template>
<div class="ClientAddressTab">

  <div id="pad">
    <a class="button is-info " @click="hidden=true">Fetch Address</a>
    <a class="button is-success " @click="hidden=true">Add New</a>
    <!-- This will fetch addresses of that party with get request and will run a forloop for below code -->
  </div>

  <div class="field" v-if="hidden">
    <div class="field">
      <label class="label">Address</label>
      <p class="control">
        <input v-validate="'required|min:8'" name="address" placeholder="Insert Address" type="textarea" class="input">
      </p>
      <div v-show="errors.has('account_number')" class="help is-danger">
        {{ errors.first('account_number') }}
      </div>
    </div>

    <div class="field">
      <label class="label">GST Number</label>
      <p class="control">
        <input v-validate="'required|min:4'" name="gstin" placeholder="Insert GST number" type="text" class="input">
      </p>
      <div v-show="errors.has('gstin')" class="help is-danger">
        {{ errors.first('gstin') }}
      </div>
    </div>


    <div class="field">
      <label class="label">State</label>
      <p class="control">
        <StateCombobox></StateCombobox>
      </p>
    </div>

    <a class="button is-success" v-if="">Update</a>
  </div>
</div>
</template>
<script>
import StateCombobox from '@/components/StateCombobox'
export default {
  name: 'ClientAddressTab',
  data: () => ({
    hidden: false
  }),
  components: {
    StateCombobox
  }
}
</script>
<style lang="scss">
#pad {
    padding-bottom: 1rem;
}
</style>
