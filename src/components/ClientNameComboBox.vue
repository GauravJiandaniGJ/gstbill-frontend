<template>
<div id="ClientNameComboBox">
  <span class="select is-fullwidth">
          <select v-validate="'required|not_in:null'" v-model="ClientId" name="client_name-select" @change="nameChange()">
            <option value=null>Select Dropdown</option>
            <option >Test</option>
            <option >Test2</option>
            <option v-for="ClientName in client_names" :value="ClientName.id">{{ ClientName.id }}</option>
          </select>
        </span>
  <div class="help is-danger" v-show="errors.has('client_name-select')">
    {{errors.first('client_name-select')}}
  </div>
</div>
</template>
<script>
export default {
  name: 'ClientNameComboBox',
  data: () => ({
    client_names: [],
    ClientId: ''
  }),
  created () {

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
