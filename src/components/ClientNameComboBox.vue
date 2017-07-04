<template>
<div class="ClientNameComboBox">
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
</template>
<script>
import axios from 'axios'
export default {
  name: 'ClientNameComboBox',
  data: () => ({
    client_names: [],
    ClientId: ''
  }),
  created () {
    this.cid = this.$route.params.cid
    this.yid = this.$route.params.yid
    this.mid = this.$route.params.mid
    axios.get(`http://localhost:8000/api/client/clientList/` + this.cid)
      .then(response => {
        this.client_names = response.data
        console.log(this.client_names)
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    nameChange () {
      this.$bus.$emit('ClientName', { id: this.ClientId })
    }
  }
}
</script>
<style lang="scss">

</style>
