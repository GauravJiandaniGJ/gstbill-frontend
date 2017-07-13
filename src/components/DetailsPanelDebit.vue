<template>
  <div class="DetailsPanelDebit">

<pre v-model="this.bid=bid" hidden></pre>
<pre v-model="this.cid=cid" hidden></pre>

<div class="columns is-multiline" v-for="panel in panels" id="content">
  <div class="column">
    <PanelsDetailsDebit :panel="panel"></PanelsDetailsDebit>
  </div>
</div>
<hr>


<div class="columns is-multiline" id="content">

<div class="column is-5 only">
<div class="field">
  <p class="control">
  </p>
</div>
</div>

<div class="column only">
<div class="field">
  <p class="control">
    <input v-validate="'required'" name="qty" v-model="this.total_qty" placeholder="Qty" type="text" class="input">
  </p>
</div>
</div>

<div class="column only">
<div class="field">
  <p class="control">

  </p>
</div>
</div>

<div class="column only">
<div class="field">
  <p class="control">
    <input v-validate="'required'" name="total" v-model="this.total_amt" placeholder="total" type="text" class="input">
  </p>
</div>
</div>

<div class="column" id="only">
<div class="field">
  <p class="control">

  </p>
</div>
</div>
</div>


<div class="columns is-multiline">
  <div class="column">
    <a class="button is-info is-outline" v-if="hidden" @click="addNew()" id="save">Add New</a>
    <a class="button is-info is-outline" v-if="!hidden" @click="addNew()" >Add</a>
  </div>
</div>

</div>
</template>
<script>
import axios from 'axios'
import PanelsDetailsDebit from '@/components/PanelsDetailsDebit'
export default {
  name: 'DetailsPanelDebit',
  data: () => ({
    hidden: false,
    panels: [],
    addoredit: false,
    bid: null,
    cid: null,
    panel_details: {
      id: null,
      name_of_product: '',
      qty: null,
      rate: null,
      total_amount: null
    },
    total_qty: 0,
    total_amt: 0,
    client_state: '',
    company_state: ''
  }),
  components: {
    PanelsDetailsDebit
  },
  created () {
    this.bid = this.$route.params.bid
    this.getTotalQuantity(this.bid)
    this.getTotalAmount(this.bid)
    this.getEntireDebitDetails()
    this.$bus.$on('refreshForQuantity', () => {
      this.getTotalQuantity(this.bid)
    })
    this.$bus.$on('refreshForTotal', () => {
      this.getTotalAmount(this.bid)
    })
    this.$bus.$on('refreshForDebitDetails', () => {
      this.getEntireDebitDetails()
    })
  },
  methods: {
    addNew () {
      this.hidden = true
      axios.post(`http://localhost:8000/api/addDebitDetails/` + this.bid, {
        name_of_product: this.panel_details.name_of_product,
        rate: this.panel_details.rate,
        qty: this.panel_details.qty,
        total_amount: this.panel_details.total_amount,
        debit_no: this.bid
      })
        .then(response => {
          if (response.status === 200) {
            this.panel_details.id = response.data.id
            this.panel_details.name_of_product = response.data.name_of_product
            this.panel_details.rate = response.data.rate
            this.panel_details.qty = response.data.qty
            this.panel_details.total_amount = response.data.total_amount
            this.panels.push(this.panel_details)
          }
        })
        .catch((e) => {
          console.log(e)
        })
    },
    getTotalQuantity (id) {
      let url = `http://localhost:8000/api/quantityTotal/` + id
      axios.get(url)
        .then(response => {
          this.total_qty = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    getTotalAmount (id) {
      let url = `http://localhost:8000/api/amountTotal/` + id
      axios.get(url)
        .then(response => {
          this.total_amt = response.data
          this.$bus.$emit('totalTax', {total_amt: this.total_amt})
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    getEntireDebitDetails () {
      let url = `http://localhost:8000/api/getDebitDetails/` + this.bid
      axios.get(url)
        .then(response => {
          this.panels = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },
  props: {
    bid: {
      required: true
    },
    cid: {
      required: true
    }
  }
}
</script>
<style lang="scss">
#save {
  padding-right: 1rem;
}
#addnew {
  padding-left: 1rem;
}
</style>
