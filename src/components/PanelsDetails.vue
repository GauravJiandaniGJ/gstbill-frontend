<template>
<div class="PanelsDetails">

  <div class="columns is-multiline" id="content" v-if="panel.name_of_product!=null">

    <div class="column is-5 only">
      <div class="field">
        <p class="control">
          <input v-validate="'required'" name="product_name" v-model="description=panel.name_of_product" placeholder="Product Name" type="text" class="input">
        </p>
        <div v-show="errors.has('product_name')" class="help is-danger">
          {{ errors.first('product_name') }}
        </div>
      </div>
    </div>


    <div class="column only">
      <div class="field">
        <p class="control">
          <input v-validate="'required'" name="service_code" v-model="scode=panel.service_code" placeholder="Service Code" type="text" class="input">
        </p>
        <div v-show="errors.has('service_code')" class="help is-danger">
          {{ errors.first('service_code') }}
        </div>
      </div>
    </div>

    <div class="column only">
      <div class="field">
        <p class="control">
          <input v-validate="" name="qty" v-model="qty=panel.qty" placeholder="Qty" type="text" class="input">
        </p>
      </div>
    </div>

    <!-- <pre v-model="this.rate=this.content.rate" v-if="this.content" hidden></pre> -->
    <div class="column only">
      <div class="field">
        <p class="control">
          <input v-validate="'required'" name="rate" v-model="rate=panel.rate" placeholder="Rate" type="text" class="input">
        </p>
        <div v-show="errors.has('rate')" class="help is-danger">
          {{ errors.first('rate') }}
        </div>
      </div>
    </div>

    <div class="column only">
      <div class="field">
        <p class="control">
          <input readonly="true" v-validate="'required'" name="total" v-model="this.total" placeholder="Total" type="text" class="input">
        </p>
        <div v-show="errors.has('total')" class="help is-danger">
          {{ errors.first('total') }}
        </div>
      </div>
    </div>
    <div class="column" id="only">
      <div class="field">
        <p class="control">
          <a class="button is-danger is-outlined" v-if="panel.name_of_product!=null" @click="deleteDetail(panel.id)">Remove</a>
        </p>
      </div>
    </div>
  </div>


<!-- If panel is null.. i.e. no entry in db then show below code.. -->


  <div class="columns is-multiline" id="content" v-if="panel.name_of_product==null">
    <div class="column is-5 only">
      <div class="field">
        <p class="control">
          <input v-validate="'required'" name="product_name" @keyup.alt.113="f2()" v-model="description" placeholder="Press Alt + F2" type="text" class="input">
        </p>
        <div v-show="errors.has('product_name')" class="help is-danger">
          {{ errors.first('product_name') }}
        </div>
      </div>
    </div>

    <div class="column only">
      <div class="field">
        <p class="control">
          <input v-validate="'required'" name="service_code" v-model="scode" placeholder="Service Code" type="text" class="input">
        </p>
        <div v-show="errors.has('service_code')" class="help is-danger">
          {{ errors.first('service_code') }}
        </div>
      </div>
    </div>

    <div class="column only">
      <div class="field">
        <p class="control">
          <input v-validate="" name="qty" v-model="qty" placeholder="Qty" type="text" class="input">
        </p>
      </div>
    </div>

    <!-- <pre v-model="this.rate=this.content.rate" v-if="this.content" hidden></pre> -->
    <div class="column only">
      <div class="field">
        <p class="control">
          <input v-validate="'required'" name="rate" v-model="rate" placeholder="Rate" type="text" class="input">
        </p>
        <div v-show="errors.has('rate')" class="help is-danger">
          {{ errors.first('rate') }}
        </div>
      </div>
    </div>

    <div class="column only">
      <div class="field">
        <p class="control">
          <input readonly="true" v-validate="'required'" name="total" v-model="this.total" placeholder="Total" type="text" class="input">
        </p>
        <div v-show="errors.has('total')" class="help is-danger">
          {{ errors.first('total') }}
        </div>
      </div>
    </div>

    <div class="column" id="save">
      <div class="field">
        <p class="control">
          <a class="button is-success is-outlined" @click="saveDetail(panel.id)">Save</a>
        </p>
      </div>
    </div>
  </div>


</div>
</template>
<script>
import ShortcutCombobox from '@/components/ShortcutCombobox'
import HTTP from '@/packages/HTTP'
export default {
  name: 'PanelDetails',
  created () {
    this.cid = this.$route.params.cid
    this.yid = this.$route.params.yid
    this.mid = this.$route.params.mid
    this.bid = this.$route.params.bid
  },
  data: () => ({
    addoredit: false,
    description: '',
    scode: null,
    qty: 0,
    rate: 0,
    content: {},
    for_total: null,
    options: [],
    hideMe: true,
    cid: null,
    yid: null,
    mid: null,
    bid: null
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
    f2 () {
      this.description = 'Container Handling Charges'
      this.scode = 996711
      if (parseInt(this.cid) === 1) {
        this.rate = 1500
      }
      if (parseInt(this.cid) === 2) {
        this.rate = 2500
      }
      this.rate = 500
      this.qty = 1
    },
    saveDetail (id) {
      HTTP.patch(`company/` + this.cid + `/year/` + this.yid + `/month/` + this.mid + `/bill/editBillDetails/` + this.bid + `/` + id, {
        name_of_product: this.description,
        service_code: this.scode,
        rate: this.rate,
        qty: this.qty,
        total_amount: this.total
      })
        .then(response => {
          if (response.status === 200) {
            this.$bus.$emit('refreshForBillDetails')
            this.$bus.$emit('refreshForQuantity')
            this.$bus.$emit('refreshForTotal')
          }
        })
        .catch((e) => {
          console.log(e)
        })
    },
    deleteDetail (id) {
      let url = `company/` + this.cid + `/year/` + this.yid + `/month/` + this.mid + `/bill/deleteBillDetail/` + id
      HTTP.delete(url)
        .then(response => {
          if (response.status === 204 || response.status === 200) {
            this.$bus.$emit('refreshForBillDetails')
            this.$bus.$emit('refreshForQuantity')
            this.$bus.$emit('refreshForTotal')
          }
        })
    }
  },
  computed: {
    total () {
      return this.qty * this.rate
    }
  }
}
</script>
<style lang="scss">
#only {
    padding-left: 0.5rem;
}
#save {
  padding-left: 1.1rem;
  padding-right: 1.1rem;
}
</style>
