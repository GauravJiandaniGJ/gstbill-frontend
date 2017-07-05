<template>
<div class="ClientAddressTab">

  <div id="pad">
    <a class="button is-success " @click="hidden=true">Add New</a>
    <a class="button is-danger" @click="removeClient(clientAddress.id)">Remove</a>
    <!-- This will fetch addresses of that party with get request and will run a forloop for below code -->
  </div>

  <div class="field" v-if="hidden">
    <div class="field">
      <label class="label">Address</label>
      <p class="control">
        <input v-validate="'required|min:8'" name="address" v-model="address" placeholder="Insert Address" type="textarea" class="input">
      </p>
      <div v-show="errors.has('account_number')" class="help is-danger">
        {{ errors.first('account_number') }}
      </div>
    </div>

    <div class="field">
      <label class="label">GST Number</label>
      <p class="control">
        <input v-validate="'required|min:4'" name="gstin" v-model="gstin" placeholder="Insert GST number" type="text" class="input">
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

    <a class="button is-success" v-if="" @click="addAddress(clientAddress.id)">Add</a>
  </div>
</div>
</template>
<script>
import StateCombobox from '@/components/StateCombobox'
import axios from 'axios'
export default {
  name: 'ClientAddressTab',
  data: () => ({
    hidden: false,
    address: '',
    gstin: '',
    state: ''
  }),
  components: {
    StateCombobox
  },
  created () {
    this.$bus.$on('state', (response) => {
      console.log()
      this.state = response.state
    })
  },
  props: {
    clientAddress: {
      required: true
    }
  },
  methods: {
    removeClient (id) {
// hidden=true
      let url = `http://localhost:8000/api/client/destroy/` + id
      axios.delete(url)
        .then(response => {
        })
      this.close()
    },
    close () {
      console.log('close')
      this.$bus.$emit('close', { id: 1 })
    },
    addAddress (id) {
      axios.post(`http://localhost:8000/api/client/createAddress/` + id, {
        address: this.address,
        gstin: this.gstin,
        state: this.state
      })
        .then(response => {
          this.address = ''
          this.gstin = null
          this.state = null
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
}
</script>
<style lang="scss">
#pad {
    padding-bottom: 1rem;
    padding-top: 1rem;
}
</style>
