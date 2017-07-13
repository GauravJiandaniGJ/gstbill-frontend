<template>
<div class="PanelsDetailsDebit">

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
          <input v-validate="" name="qty" v-model="qty=panel.qty" placeholder="Qty" type="text" class="input">
        </p>
      </div>
    </div>

    <!-- <pre v-model="this.rate=this.content.rate" v-if="this.content" hidden></pre> -->
    <div class="column only" id="control">
      <div class="field">
        <p class="control">
          <input v-validate="'required'" name="rate" v-model="rate=panel.rate" placeholder="Rate" type="text" class="input">
        </p>
        <div v-show="errors.has('rate')" class="help is-danger">
          {{ errors.first('rate') }}
        </div>
      </div>
    </div>

    <div class="column only" id="control">
      <div class="field">
        <p class="control" id="control">
          <input readonly="true" v-validate="'required'" name="total" v-model="this.total" placeholder="Total" type="text" class="input">
        </p>
        <div v-show="errors.has('total')" class="help is-danger">
          {{ errors.first('total') }}
        </div>
      </div>
    </div>
    <div class="column" id="only">
      <div class="field">
        <p class="control" id="control">
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
          <input v-validate="'required'" name="product_name" @keyup.alt.114="f3()" @keyup.alt.112="f1()" @keyup.alt.116="f5()" @keyup.alt.117="f6()" @keyup.alt.118="f7()" @keyup.alt.119="f8()" @keyup.alt.120="f9()" @keyup.alt.121="f10()" @keyup.alt.122="f11()" @keyup.alt.123="f12()" @keyup.esc="shortcuts" v-model="description" placeholder="Product Name" type="text" class="input">
        </p>
        <div v-show="errors.has('product_name')" class="help is-danger">
          {{ errors.first('product_name') }}
        </div>
      </div>
    </div>

    <div class="column only" id="control">
      <div class="field">
        <p class="control">
          <input v-validate="" name="qty" v-model="qty" placeholder="Qty" type="text" class="input">
        </p>
      </div>
    </div>

    <!-- <pre v-model="this.rate=this.content.rate" v-if="this.content" hidden></pre> -->
    <div class="column only" id="control">
      <div class="field">
        <p class="control">
          <input v-validate="'required'" name="rate" v-model="rate" placeholder="Rate" type="text" class="input">
        </p>
        <div v-show="errors.has('rate')" class="help is-danger">
          {{ errors.first('rate') }}
        </div>
      </div>
    </div>

    <div class="column only" id="control">
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

  <ShortcutShowModal @close="shortcut=false" v-if="shortcut"></ShortcutShowModal>


</div>
</template>
<script>
import ShortcutCombobox from '@/components/ShortcutCombobox'
import ShortcutShowModal from '@/components/ShortcutShowModal'
import axios from 'axios'
export default {
  name: 'PanelDetailsDebit',
  created () {
    this.cid = this.$route.params.cid
    this.yid = this.$route.params.yid
    this.mid = this.$route.params.mid
    this.bid = this.$route.params.bid
    this.fetchSelectedOptionFromDB()
  },
  data: () => ({
    addoredit: false,
    description: '',
    qty: 0,
    rate: 0,
    content: {},
    for_total: null,
    options: [],
    hideMe: true,
    cid: null,
    yid: null,
    mid: null,
    bid: null,
    shortcut: false
  }),
  components: {
    ShortcutCombobox,
    ShortcutShowModal
  },
  props: {
    panel: {
      required: true
    }
  },
  methods: {
    f5 () {
      this.description = 'Phyto Certificate Charges'
      if (parseInt(this.cid) === 1) {
        this.rate = 500
      }
      if (parseInt(this.cid) === 2) {
        this.rate = 550
      }
      this.qty = 1
    },
    f1 () {
      this.description = 'Shipping Bill Noting Charges'
      this.rate = 100
      this.qty = 1
    },
    f3 () {
      this.description = 'Port and Customs Documentation'
      this.rate = 1000
      this.qty = 1
    },
    f6 () {
      this.description = 'Transportation Charges'
      this.rate = 24000
      this.qty = 1
    },
    f7 () {
      this.description = 'Lift On/Lift Off Charges'
      this.rate = 1500
      this.qty = 1
    },
    f8 () {
      this.description = 'Misc. Expenses for obtaining FSSAI'
      this.rate = 1000
      this.qty = 1
    },
    f9 () {
      this.description = 'FSSAI Fees'
      this.rate = 1000
      this.qty = 1
    },
    f10 () {
      this.description = 'Misc. Expenses for clearance at Customs/Phyto'
      this.rate = 1000
      this.qty = 1
    },
    f11 () {
      this.description = 'Courier Charges'
      this.rate = 80
      this.qty = 1
    },
    f12 () {
      this.description = 'Weighment Charges'
      this.rate = 300
      this.qty = 1
    },
    shortcuts () {
      this.shortcut = true
    },
    saveDetail (id) {
      axios.patch(`http://localhost:8000/api/company/` + this.cid + `/year/` + this.yid + `/month/` + this.mid + `/editDebitDetails/` + this.bid + `/` + id, {
        name_of_product: this.description,
        rate: this.rate,
        qty: this.qty,
        total_amount: this.total
      })
        .then(response => {
          if (response.status === 200) {
            this.$bus.$emit('refreshForDebitDetails')
            this.$bus.$emit('refreshForQuantity')
            this.$bus.$emit('refreshForTotal')
          }
        })
        .catch((e) => {
          console.log(e)
        })
    },
    deleteDetail (id) {
      let url = `http://localhost:8000/api/company/` + this.cid + `/year/` + this.yid + `/month/` + this.mid + `/deleteDebitDetail/` + id
      axios.delete(url)
        .then(response => {
          if (response.status === 204 || response.status === 200) {
            this.$bus.$emit('refreshForQuantity')
            this.$bus.$emit('refreshForTotal')
            this.$bus.$emit('refreshForDebitDetails')
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
  padding-right: 0.6rem;
}

#control {
  padding-right: 0rem;
}
</style>
