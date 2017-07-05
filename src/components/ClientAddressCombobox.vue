<template>
  <div class="ClientAddressCombobox">
    <span class="select is-fullwidth">
            <select v-validate="'required|not_in:null'" v-model="clientName" name="client_address-select" @change="clientAddresss()">
              <option value=null disabled>Select Address</option>
              <option v-for="client in clientAddress.address" :value="client">{{client.address}}</option>
            </select>
          </span>
    <div class="help is-danger" v-show="errors.has('client_address-select')">
      {{errors.first('client_address-select')}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'ClientAddressCombobox',
  data: () => ({
    clientName: '',
    address: Object
  }),
  methods: {
    clientAddresss () {
      console.log('m changed')
      this.$bus.$emit('ClientAddressChange', { address: this.clientName })
    }
  },
  props: {
    clientAddress: {
      required: true
    }
  }
}
</script>
<style lang="scss">
</style>
