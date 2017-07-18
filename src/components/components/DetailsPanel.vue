  <template>
    <div class="DetailsPanel">

<pre v-model="this.bid=bid" hidden></pre>
<pre v-model="this.cid=cid" hidden></pre>
<pre v-model="this.client_state=client_state" hidden></pre>
<pre v-model="this.company_state=company_state" hidden></pre>

  <div class="columns is-multiline" v-for="panel in panels" id="content">
    <div class="column">
      <PanelsDetails :panel="panel"></PanelsDetails>
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
import HTTP from '@/packages/HTTP'
import PanelsDetails from '@/components/PanelsDetails'
export default {
  name: 'DetailsPanel',
  data: () => ({
    hidden: false,
    panels: [],
    addoredit: false,
    bid: null,
    cid: null,
    mid: null,
    yid: null,
    panel_details: {
      id: null,
      name_of_product: '',
      service_code: '',
      qty: null,
      rate: null,
      total_amount: null
    },
    total_qty: 0,
    total_amt: 0,
    client_state: '',
    company_state: '',
    cgst: 0,
    sgst: 0,
    igst: 0,
    total_gst: 0
  }),
  components: {
    PanelsDetails
  },
  created () {
    this.bid = this.$route.params.bid
    this.cid = this.$route.params.cid
    this.mid = this.$route.params.mid
    this.yid = this.$route.params.yid
    this.getTotalQuantity(this.bid)
    this.getTotalAmount(this.bid)
    this.getEntireBillDetails()
    this.$bus.$on('refreshForQuantity', () => {
      this.getTotalQuantity(this.bid)
    })
    this.$bus.$on('refreshForTotal', () => {
      this.getTotalAmount(this.bid)
    })
    this.$bus.$on('refreshForBillDetails', () => {
      this.getEntireBillDetails()
    })
  },
  methods: {
    addNew () {
      this.hidden = true
      HTTP.post(`company/` + this.cid + `/year/` + this.yid + `/month/` + this.mid + `/bill/addBillDetails/` + this.bid, {
        name_of_product: this.panel_details.name_of_product,
        service_code: this.panel_details.service_code,
        rate: this.panel_details.rate,
        qty: this.panel_details.qty,
        total_amount: this.panel_details.total_amount,
        bill_no: this.bid
      })
        .then(response => {
          if (response.status === 200) {
            this.panel_details.id = response.data.id
            this.panel_details.name_of_product = response.data.name_of_product
            this.panel_details.service_code = response.data.service_code
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
      let url = `company/` + this.cid + `/year/` + this.yid + `/month/` + this.mid + `/bill/quantityTotal/` + id
      HTTP.get(url)
        .then(response => {
          this.total_qty = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    getTotalAmount (id) {
      let url = `company/` + this.cid + `/year/` + this.yid + `/month/` + this.mid + `/bill/amountTotal/` + id
      HTTP.get(url)
        .then(response => {
          this.total_amt = response.data
          this.calculateTax()
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    getEntireBillDetails () {
      let url = `company/` + this.cid + `/year/` + this.yid + `/month/` + this.mid + `/bill/getBillDetails/` + this.bid
      HTTP.get(url)
        .then(response => {
          this.panels = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    calculateTax () {
      if (this.client_state === this.company_state) {
        this.cgst = this.total_amt * 0.09
        this.sgst = this.total_amt * 0.09
        this.igst = 0
      }
      if (this.client_state !== this.company_state) {
        this.cgst = 0
        this.sgst = 0
        this.igst = this.total_amt * 0.18
      }
      this.total_gst = this.cgst + this.sgst + this.igst
      this.$bus.$emit('totalTax', {cgst: this.cgst, sgst: this.sgst, igst: this.igst, total_gst: this.total_gst})
    }
  },
  props: {
    billDetails: {
      required: true
    },
    bid: {
      required: true
    },
    cid: {
      required: true
    },
    client_state: {
      required: true
    },
    company_state: {
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
