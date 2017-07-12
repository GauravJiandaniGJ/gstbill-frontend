<template>
<div class="box NewDebitEntry">

  <div class="field">
    <label class="label">Bill No.</label>
    <p class="control">
      <input id="input" v-validate="'required|max:6'" name="BillNo" v-model="debit.billNo" placeholder="Bill No" type="text" class="input">
    </p>

  </div>

  <div class="field">
    <label class="label">Bill Date</label>
    <p class="control is-fullwidth"></p>
    <datepicker :config="{ wrap: true }" readonly v-model="debit.billDate">
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
        <input id="input" v-validate="'required'" name="description" v-model="debit.description" type="text" class="input">
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
  name: 'NewDebitEntry',
  components: {
    Datepicker,
    ClientNameComboBox
  },
  data () {
    return {
      debit: {
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
      this.debit.client_id = clientName
    })
    this.$bus.$on('clientDetails', (clientAddressId) => {
      this.debit.client_id = clientAddressId.clientId
      this.debit.client_gstin = clientAddressId.gstin
    })
    this.cid = this.$route.params.cid
    this.yid = this.$route.params.yid
    this.mid = this.$route.params.mid
    this.getDebitNo()
  },
  methods: {
    getDebitNo () {
      axios.get(`http://localhost:8000/api/company/` + this.cid + `/year/` + this.yid + `/month/` + this.mid + `/latestDebitNo`)
        .then(response => {
          this.debit.billNo = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    createPrimary () {
      axios.post(`http://localhost:8000/api/company/` + this.cid + `/year/` + this.yid + `/month/` + this.mid + `/createNew`, {
        debit_no: this.debit.billNo,
        debit_date: this.debit.billDate,
        description: this.debit.description,
        client_id: this.debit.client_id,
        gstin: this.debit.client_gstin
      })
        .then(response => {
          if (response.status === 200) {
            let url = '/financial-month/' + this.cid + '/year/' + this.yid + '/month/' + this.mid + '/details/' + this.debit.billNo
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
.NewDebitEntry {

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

#input {
  text-align: center;
}
</style>
