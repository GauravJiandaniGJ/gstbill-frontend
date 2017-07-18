<template>
  <div class="ClientAddressCombobox">
    <span class="select is-fullwidth">
            <select v-validate="'required|not_in:null'" v-model="clientAddress" name="client_address-select" @change="clientAddresss()">
              <option value=null disabled>Select Address</option>
              <option v-for="client in client_addresses" :value="client">{{client.address}}</option>
            </select>
            <pre v-model="this.cid=cid" hidden></pre>
          </span>
    <div class="help is-danger" v-show="errors.has('client_address-select')">
      {{errors.first('client_address-select')}}
    </div>
  </div>
</template>
<script>
import HTTP from '@/packages/HTTP'
export default {
  name: 'ClientAddressCombobox',
  data: () => ({
    clientAddress: '',
    cid: null,
    client_addresses: null,
    address_id: null
  }),
  methods: {
    clientAddresss () {
      this.$bus.$emit('ClientAddressChange', { address_id: this.clientAddress })
    },
    fetchClientDetails (id) {
      HTTP.get(`client/getAddresses/` + this.cid)
        .then(response => {
          this.client_addresses = response.data
          console.log(this.client_addresses)
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },
  props: {
    cid: {
      required: true
    }
  },
  created () {
    console.log(this.cid)
    this.fetchClientDetails(this.cid)
  }
}
</script>
<style lang="scss">
</style>
