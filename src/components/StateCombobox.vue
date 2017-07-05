<template>
  <div id="StateCombobox">
    <span class="select is-fullwidth">
    			<select v-validate="'required|not_in:null'" v-model="state" name="state-select" @change="stateChange()">
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
import axios from 'axios'
export default {
  name: 'StateCombobox',
  data: () => ({
    states: [],
    state: ''
  }),
  created () {
    axios.get(`http://localhost:8000/api/stateList`)
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
