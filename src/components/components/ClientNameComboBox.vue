<template>
<div class="ClientNameComboBox">

  <div class="columns is-multiline">
    <div class="column">
      <span class="select is-fullwidth">
              <select v-validate="'required|not_in:null'" v-model="ClientId" name="client_name-select" @change="nameChange()">
                <option value=null disabled>Select Dropdown</option>
                <option v-for="client_name in client_names" :value="client_name.id">{{client_name.name}}</option>
              </select>
            </span>
      <div class="help is-danger" v-show="errors.has('client_name-select')">
        {{errors.first('client_name-select')}}
      </div>


    </div>
</div>
<div class="columns is-multiline">
    <div class="column">
      <label class="label" id="label">Client Address</label>
      <span class="select is-fullwidth">
              <select v-validate="'required|not_in:null'" v-model="gstin" name="client_address-select" @change="addressChange()">
                <option value=null disabled>Select Dropdown</option>
                <option v-for="client_address in client_addresses" :value="client_address.gstin">{{client_address.address}}</option>
              </select>
            </span>
      <div class="help is-danger" v-show="errors.has('client_name-select')">
        {{errors.first('client_name-select')}}
      </div>


    </div>

  </div>


</div>
</template>
<script>
import HTTP from '@/packages/HTTP'
export default {
  name: 'ClientNameComboBox',
  data: () => ({
    client_names: [],
    client_addresses: [],
    ClientId: null,
    gstin: '',
    client: {
      cid: null,
      gstin: null
    }
  }),
  created () {
    this.cid = this.$route.params.cid
    this.yid = this.$route.params.yid
    this.mid = this.$route.params.mid
    HTTP.get(`client/clientList/` + this.cid)
      .then(response => {
        this.client_names = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    nameChange () {
      this.fetchClientAddress(this.ClientId)
    },
    fetchClientAddress (id) {
      HTTP.get(`client/getAddresses/` + id)
        .then(response => {
          this.client_addresses = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    addressChange () {
      this.$bus.$emit('clientDetails', {clientId: this.ClientId, gstin: this.gstin})
    }
  }
}
</script>
<style lang="scss">
#label {
  text-align: center;
}
</style>
