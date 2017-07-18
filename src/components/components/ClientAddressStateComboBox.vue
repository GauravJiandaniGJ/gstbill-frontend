<template>
  <div id="ClientAddressStateComboBox">
    <span class="select is-fullwidth">

    			<select v-validate="'required|not_in:null'" v-model="state=state.state" name="state-select" @change="stateChange()">
    				<option value=null>Select Dropdown</option>
    				<option v-for="state in states" :value="state">{{ state }}</option>
    			</select>
    		</span>
    		<div class="help is-danger" v-show="errors.has('state-select')">
    			{{errors.first('state-select')}}
    		</div>
  </div>
</template>
<script>
import HTTP from '@/packages/HTTP'
export default {
  name: 'ClientAddressStateComboBox',
  data: () => ({
    states: [],
    state: ''
  }),
  created () {
    HTTP.get(`stateList`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.states = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    stateChange () {
      this.$bus.$emit('state', { state: this.state })
    }
  },
  props: {
    state: {
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
