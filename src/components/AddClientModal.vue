<template>
<div id="AddClientModal">
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add New Client</p>
      </header>
      <section class="modal-card-body">
        <div class="">
          <div>
            <div class="field">
              <label class="label">Name</label>
              <p class="control">
                <input v-validate="'required'" name="cname" v-model="clients.cname" placeholder="Client Name" type="text" class="input">
              </p>
              <div v-show="errors.has('cname')" class="help is-danger">
                {{ errors.first('cname') }}
              </div>
            </div>


            <div class="field">
              <label class="label">Address</label>
              <p class="control">
                <textarea v-validate="'required'" name="address" v-model="clients.address" class="textarea" placeholder="Client Address"></textarea>
              </p>
              <div v-show="errors.has('address')" class="help is-danger">
                {{ errors.first('address') }}
              </div>
            </div>

            <div class="field">
              <label class="label">GST Number</label>
              <p class="control">
                <input v-validate="'required'" name="gstin" v-model="clients.gstin" placeholder="Client GST Number" type="text" class="input">
              </p>
              <div v-show="errors.has('gstin')" class="help is-danger">
                {{ errors.first('gstin') }}
              </div>
            </div>

            <div class="field">
              <label class="label">State</label>
              <p class="control">
                <StateCombobox @change="stateChange()"></StateCombobox>
              </p>
            </div>
          </div>
        </div>

        <pre v-model="this.cid=company.id" hidden></pre>

      </section>
      <footer class="modal-card-foot">
        <a class="button is-success" v-if="!hidden" @click="addClient()">Save</a>
        <a class="button is-info" v-if="hidden" @click="$emit('close')">Saved !</a>
        <a class="button" v-on:click="$emit('close')">Close</a>
      </footer>
    </div>
  </div>
</div>
</template>
<script>
import StateCombobox from '@/components/StateCombobox'
import axios from 'axios'
export default {
  name: 'AddClientModal',
  components: {
    StateCombobox
  },
  data () {
    return {
      clients: {
        cname: '',
        address: '',
        gstin: '',
        state: ''
      },
      cid: null,
      hidden: false
    }
  },
  props: {
    company: {
      required: true
    }
  },
  created () {
    this.$bus.$on('state', (response) => {
      this.clients.state = response.state
    })
  },
  methods: {
    addClient () {
      console.log(this.clients.state)
      console.log('hi')
      axios.post(`http://localhost:8000/api/client/createClient/` + this.cid, {
        name: this.clients.cname,
        address: this.clients.address,
        state: this.clients.state,
        gstin: this.clients.gstin
      })
        .then(response => {
          if (response.status === 200) {
            this.hidden = true
          }
          // this.$bus.$emit('user-added')
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
}
</script>
<style lang="scss">

</style>
