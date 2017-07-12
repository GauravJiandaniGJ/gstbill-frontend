<template>
<div class="box NewGstEntry">

  <div class="field">
    <label class="label">Bill No.</label>
    <p class="control">
      <input v-validate="'required|max:6'" name="BillNo" v-model="gst.billNo" placeholder="Bill No" type="text" class="input">
    </p>

  </div>

  <div class="field">
    <label class="label">Bill Date</label>
    <p class="control is-fullwidth"></p>
    <datepicker :config="{ wrap: true }" readonly v-model="gst.billDate">
      <a class="button" data-toggle><i class="fa fa-calendar"></i></a>
    </datepicker>

    </p>
    <div v-show="errors.has('date')" class="help is-danger">
      The Bill Date is a required field.
    </div>
  </div>


  <div class="field">
    <label class="label">Client Name</label>
    <p class="control">
      <ClientNameComboBox></ClientNameComboBox>
    </p>
    <div v-show="errors.has('ClientName-select')" class="help is-danger">
      {{ errors.first('ClientName-select') }}
    </div>
  </div>

    <div class="field">
      <label class="label">Description</label>
      <p class="control">
        <input v-validate="'required'" name="description" v-model="gst.description" placeholder="Bill description" type="text" class="input">
      </p>
      <div v-show="errors.has('description')" class="help is-danger">
        {{ errors.first('description') }}
      </div>
    </div>


    <div class="field is-grouped but">
      <p class="control buttons">
        <button class="button is-primary" @click="createPrimary()">Proceed</button>
      </p>
    </div>
  </div>
</template>
<script>
import Datepicker from 'vue-bulma-datepicker'
import ClientNameComboBox from '@/components/ClientNameComboBox'
import axios from 'axios'
export default {
  name: 'NewGstEntry',
  components: {
    Datepicker,
    ClientNameComboBox
  },
  data () {
    return {
      gst: {
        billNo: null,
        billDate: '',
        description: '',
        client_id: 0,
        client_gstin: 0
      }
    }
  },
  created () {
    this.$bus.$on('ClientName', (clientName) => {
      this.gst.client_id = clientName
    })
    this.$bus.$on('clientDetails', (clientAddressId) => {
      this.gst.client_id = clientAddressId.clientId
      this.gst.client_gstin = clientAddressId.gstin
    })
    this.cid = this.$route.params.cid
    this.yid = this.$route.params.yid
    this.mid = this.$route.params.mid
    this.getgstNo()
  },
  methods: {
    getgstNo () {
      axios.get(`http://localhost:8000/api/company/` + this.cid + `/year/` + this.yid + `/month/` + this.mid + `/bill/latestBillNo`)
        .then(response => {
          this.gst.billNo = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    createPrimary () {
      axios.post(`http://localhost:8000/api/company/` + this.cid + `/year/` + this.yid + `/month/` + this.mid + `/bill/createNew`, {
        bill_no: this.gst.billNo,
        bill_date: this.gst.billDate,
        description: this.gst.description,
        client_id: this.gst.client_id,
        gstin: this.gst.client_gstin
      })
        .then(response => {
          if (response.status === 200) {
            let url = '/financial-month/' + this.cid + '/year/' + this.yid + '/month/' + this.mid + '/details/gst/' + this.gst.billNo
            this.$router.push(url)
          }
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
}
</script>
<style lang="scss">
.NewGstEntry {

    .placement-body {
        padding: 1rem;
    }

}

.field.is-grouped {
    margin-top: 1.2rem;
}

.field.is-grouped.but {
    margin-left: 45.5%;
    margin-right: 50%;
}
</style>
