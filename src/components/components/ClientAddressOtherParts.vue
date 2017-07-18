<template>
<div class="ClientAddressOtherParts">

    <div class="field">
      <label class="label">GST Number</label>
      <p class="control">
        <input v-validate="'required|min:4'" name="gstin" v-model="gstin = otherAddress.gstin" placeholder="Insert GST number" type="text" class="input">
      </p>
      <div v-show="errors.has('gstin')" class="help is-danger">
        {{ errors.first('gstin') }}
      </div>
    </div>

<pre v-model="state=otherAddress" hidden></pre>

    <div class="field">
      <label class="label">State</label>
      <p class="control">
        <StateCombobox></StateCombobox>
      </p>
    </div>


</div>
</template>
<script>
import StateCombobox from '@/components/StateCombobox'
export default {
  name: 'ClientAddressOtherParts',
  data: () => ({
    hidden: false,
    gstin: '',
    state: ''
  }),
  components: {
    StateCombobox
  },
  props: {
    otherAddress: {
      required: true
    }
  },
  created() {
    this.$bus.$on('state', (response) => {
      this.state = response.state
    })
  }
}
</script>
<style lang="scss">
#pad {
    padding-bottom: 1rem;
}
</style>
