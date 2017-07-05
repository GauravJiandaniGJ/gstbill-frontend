<template>
  <div class="ClientNameComboBoxNavbar">
    <div class="ClientNameComboBox">
      <span class="select is-fullwidth">
              <select v-validate="'required|not_in:null'" v-model="Client" name="client_name-select" @change="nameChange()">
                <option value=null disabled>Select Dropdown</option>
                <option v-for="client_name in company.client" :value="client_name">{{client_name.name}}</option>
              </select>
            </span>
      <div class="help is-danger" v-show="errors.has('client_name-select')">
        {{errors.first('client_name-select')}}
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'ClientNameComboBoxNavbar',
  data: () => ({
    client_names: [],
    Client: Object
  }),
  created () {
  },
  methods: {
    nameChange () {
      this.$bus.$emit('ClientNameNavbar', { obj: this.Client })
    }
  },
  props: {
    company: {
      required: true
    }
  }
}
</script>
<style lang="scss">

</style>
