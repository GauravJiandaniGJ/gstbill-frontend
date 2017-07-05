<template>
<div class="ClientAddressTabComboBox">

  <div id="pad">
    <a class="button is-info " @click="hidden=true">Fetch Address</a>
    <!-- This will fetch addresses of that party with get request and will run a forloop for below code -->
  </div>

<div v-if="hidden" class="field">
  <div class="field">
    <label class="label">Address</label>
    <p class="control">
      <ClientAddressCombobox :clientAddress="clientAddress" ></ClientAddressCombobox>
    </p>
  </div>

    <ClientAddressOtherParts :otherAddress="address"></ClientAddressOtherParts>

    <a class="button is-success" v-if="">Update</a>
  </div>
</div>
</template>
<script>
import StateCombobox from '@/components/StateCombobox'
import ClientAddressCombobox from '@/components/ClientAddressCombobox'
import ClientAddressOtherParts from '@/components/ClientAddressOtherParts'
export default {
  name: 'ClientAddressTabComboBox',
  data: () => ({
    hidden: false,
    address: Object
  }),
  components: {
    StateCombobox,
    ClientAddressCombobox,
    ClientAddressOtherParts
  },
  props: {
    clientAddress: {
      required: true
    }
  },
  created () {
    this.$bus.$on('ClientAddressChange', (ClientName) => {
      console.log('ClientName:' + ClientName)
      this.address = ClientName.address
    })
  }
}
</script>
<style lang="scss">
#pad {
    padding-bottom: 1rem;
}
</style>
