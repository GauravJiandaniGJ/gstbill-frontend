<template>
  <div class="GstBillNoTextBox">
    <div class="field">
      <p class="control">
        <input v-validate="'required|max:6'" name="GstBillNo" v-model="GstBillNo" placeholder="GST Bill No" type="text" class="input">
      </p>
      <div v-show="errors.has('GstBillNo')" class="help is-danger">
        {{ errors.first('GstBillNo') }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GstBillNoTextBox',
  data () {
    return {
      GstBillNo: null
    }
  }
}
</script>
<style lang="scss">
</style>
