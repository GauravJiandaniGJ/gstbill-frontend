<template>
<div class="ShortcutEntry">
  <div class="field">
    <label class="label">Shortcut Text</label>
    <p class="control">
      <input v-validate="'required'" v-model="sname" name="sname" placeholder="Shortcut Text" type="text" class="input">
    </p>
    <div v-show="errors.has('sname')" class="help is-danger">
      The Shortcut Text is a required field.
    </div>
  </div>

  <div class="field">
    <label class="label">Service Code</label>
    <p class="control">
      <input v-validate="'required|numeric'" v-model="scode" name="scode" placeholder="Shortcut Code" type="text" class="input">
    </p>
    <div v-show="errors.has('scode')" class="help is-danger">
      The Shortcut Code is a required field and should be Numeric.
    </div>
  </div>

  <div class="field">
    <label class="label">Price</label>
    <p class="control">
      <input v-validate="'required|numeric'" v-model="price" name="price" placeholder="Shortcut Price" type="text" class="input">
    </p>
    <div v-show="errors.has('price')" class="help is-danger">
      The Price is a required field and should be Numeric.
    </div>
  </div>

  <div class="field is-grouped">
    <p class="control buttons temp">
      <button class="button is-primary" @click="saveShortcut()">Create</button>
    </p>
  </div>

</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'ShortcutEntry',
  data () {
    return {
      sname: '',
      scode: null,
      price: null
    }
  },
  methods: {
    saveShortcut () {
      axios.post(`http://localhost:8000/api/shortcut/create`, {
        description: this.sname,
        price: this.price,
        service_code: this.scode
      })
        .then(response => {
          this.sname = ''
          this.scode = null
          this.price = null
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
}
</script>
<style lang="scss">
.ShortcutEntry{

.field.is-grouped{
  .temp{
    margin-left: 46%;
  }
}

}
</style>
