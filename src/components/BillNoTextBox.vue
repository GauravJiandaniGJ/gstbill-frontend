<template>
  <div class="BillNoTextBox">
    <div class="field">
      <p class="control">
        <input v-validate="'required|max:6'" name="BillNo" v-model="BillNo" @change="debitNo()" placeholder="Bill No" type="text" class="input">
      </p>
      <div v-show="errors.has('BillNo')" class="help is-danger">
        {{ errors.first('BillNo') }}
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'BillNoTextBox',
  data () {
    return {
      BillNo: null,
      cid: null,
      yid: null,
      mid: null
    }
  },
  created () {
    this.cid = this.$route.params.cid
    this.yid = this.$route.params.yid
    this.mid = this.$route.params.mid
    axios.get(`http://localhost:8000/api/company/` + this.cid + `/year/` + this.yid + `/month/` + this.mid + `/latestDebitNo`)
      .then(response => {
        this.BillNo = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>
<style lang="scss">
</style>
