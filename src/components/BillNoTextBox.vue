<template>
  <div class="BillNoTextBox">
    <div class="field">
      <p class="control">
        <input v-validate="'required|max:6'" name="BillNo" v-model="BillNo" placeholder="Bill No" type="text" class="input">
      </p>
      <div v-show="errors.has('BillNo')" class="help is-danger">
        {{ errors.first('BillNo') }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BillNoTextBox',
  data () {
    return {
      BillNo: null
    }
  }
}
</script>
<style lang="scss">
</style>
