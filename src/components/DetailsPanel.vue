  <template>
    <div class="DetailsPanel">

<pre v-model="this.panels=billDetails" hidden></pre>
<pre v-model="this.bid=bid" hidden></pre>

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
      <input v-validate="'required'" name="qty" placeholder="Qty" type="text" class="input">
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
      <input v-validate="'required'" name="rate" placeholder="total" type="text" class="input">
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
import PanelsDetails from '@/components/PanelsDetails'
export default {
  name: 'DetailsPanel',
  data: () => ({
    hidden: false,
    panels: [],
    addoredit: false,
    bid: null,
    panel_details: {
      name_of_product: '',
      service_code: '',
      qty: null,
      rate: null,
      total_amount: null
    }
  }),
  components: {
    PanelsDetails
  },
  created () {
  },
  methods: {
    addNew () {
      this.hidden = true
      axios.post(`http://localhost:8000/api/addBillDetails/` + this.bid, {
        name_of_product: this.panel_details.name_of_product,
        service_code: this.panel_details.service_code,
        rate: this.panel_details.rate,
        qty: this.panel_details.qty,
        total_amount: this.panel_details.total_amount,
        bill_no: this.bid
      })
        .then(response => {
          if (response.status === 200) {
            this.panel_details.name_of_product = response.data.name_of_product
            this.panel_details.service_code = response.data.service_code
            this.panel_details.rate = response.data.rate
            this.panel_details.qty = response.data.qty
            this.panel_details.total_amount = response.data.total_amount
          }
        })
        .catch((e) => {
          console.log(e)
        })
      this.panels.push(1)
    }
  },
  props: {
    billDetails: {
      required: true
    },
    bid: {
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
