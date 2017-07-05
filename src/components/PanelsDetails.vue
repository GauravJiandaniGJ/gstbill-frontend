<template>
  <div class="PanelsDetails">
    <div class="columns is-multiline" id="content">
<pre v-model="this.content=panel" hidden>{{panel}}</pre>
    <div class="column is-5 only">
      <div class="field">
        <p class="control">
          <ShortcutCombobox>{{panel}}</ShortcutCombobox>
        </p>
        <div v-show="errors.has('product_name')" class="help is-danger">
          {{ errors.first('product_name') }}
        </div>
      </div>
    </div>

    <div class="column only">
      <div class="field">
        <p class="control">
          <input v-validate="'required'" name="service_code" v-model="this.scode=this.content.service_code" placeholder="Service Code" type="text" class="input">
        </p>
        <div v-show="errors.has('service_code')" class="help is-danger">
          {{ errors.first('service_code') }}
        </div>
      </div>
    </div>

    <div class="column only">
      <div class="field">
        <p class="control">
          <input v-validate="'required'" name="qty" v-model="this.qty=this.content.qty" v-on:keyup="calculate()" placeholder="Qty" type="text" class="input">
        </p>
        <div v-show="errors.has('qty')" class="help is-danger">
          {{ errors.first('qty') }}
        </div>
      </div>
    </div>

    <div class="column only">
      <div class="field">
        <p class="control">
          <input v-validate="'required'" name="rate" v-model="this.rate=this.content.rate" placeholder="Rate" type="text" class="input">
        </p>
        <div v-show="errors.has('rate')" class="help is-danger">
          {{ errors.first('rate') }}
        </div>
      </div>
    </div>

    <div class="column only">
      <div class="field">
        <p class="control">
          <input v-validate="'required'" name="total" v-model="this.total" placeholder="Total" type="text" class="input">
        </p>
        <div v-show="errors.has('total')" class="help is-danger">
          {{ errors.first('total') }}
        </div>
      </div>
    </div>

    <div class="column" id="only">
      <div class="field">
        <p class="control">
            <a class="button is-primary is-outlined" v-if="!addoredit" @click="addoredit=true">Save</a>
            <a class="button is-info is-outlined" v-if="addoredit" @click="addoredit=false">Edit</a>
        </p>
      </div>
    </div>
   </div>

  </div>

</template>
<script>
import ShortcutCombobox from '@/components/ShortcutCombobox'
export default {
  name: 'PanelsDetails',
  data: () => ({
    addoredit: false,
    description: '',
    scode: null,
    qty: null,
    rate: null,
    content: Object,
    for_total: null,
    total: null
  }),
  components: {
    ShortcutCombobox
  },
  props: {
    panel: {
      required: true
    }
  },
  methods: {
    calculate () {
      this.total = this.qty * this.rate
    }
  }
}
</script>
<style lang="scss">
#only{
  padding-left: 0.5rem;
}
</style>
