<template>
<div class="Statement">
  <div class="box">
    <h2 class="title header">Statement</h2>

    <div class="columns">

      <div class="column">
        <div class="field">
          <label class="label">From Date</label>
          <p class="control is-fullwidth"></p>
          <Datepicker :config="{ wrap: true }" readonly name="statement_from_date" v-model="statement_from_date">
            <a class="button" data-toggle><i class="fa fa-calendar"></i></a>
          </Datepicker>
          </p>
          <div v-show="errors.has('statement_from_date')" class="help is-danger">
            From Date is a required field.
          </div>
        </div>
      </div>

      <div class="column">
        <div class="field">
          <label class="label">Before Date</label>
          <p class="control is-fullwidth"></p>
          <Datepicker :config="{ wrap: true }" readonly name="statement_to_date" v-model="statement_to_date">
            <a class="button" data-toggle><i class="fa fa-calendar"></i></a>
          </Datepicker>
          </p>
          <div v-show="errors.has('statement_to_date')" class="help is-danger">
            To Date is a required field.
          </div>
        </div>
      </div>

    </div>

    <label class="label">Select Statement Option</label>
    <span class="select is-fullwidth">
          <select v-validate="'required|not_in:null'" v-model="statement_id" name="statement">
            <option v-for="statement in statements" :value="statement.id">{{statement.text}}</option>
            <!-- <option v-for="state in states" :value="state">{{ state }}</option> -->
          </select>
        </span>

    <a class="button is-info" @click="buildStatement()">Generate</a>

  </div>

  <div class="box">
    <h2 class="title header">Clientwise</h2>


    <div class="columns">

      <div class="column">
        <div class="field">
          <label class="label">From Date</label>
          <p class="control is-fullwidth"></p>
          <Datepicker :config="{ wrap: true }" readonly name="clientwise_from_date" v-model="clientwise_from_date">
            <a class="button" data-toggle><i class="fa fa-calendar"></i></a>
          </Datepicker>
          </p>
          <div v-show="errors.has('clientwise_from_date')" class="help is-danger">
            From Date is a required field.
          </div>
        </div>
      </div>

      <div class="column">
        <div class="field">
          <label class="label">Before Date</label>
          <p class="control is-fullwidth"></p>
          <Datepicker :config="{ wrap: true }" readonly name="clientwise_to_date" v-model="clientwise_to_date">
            <a class="button" data-toggle><i class="fa fa-calendar"></i></a>
          </Datepicker>
          </p>
          <div v-show="errors.has('clientwise_to_date')" class="help is-danger">
            To Date is a required field.
          </div>
        </div>
      </div>

    </div>

    <label class="label">Select Statement Option</label>

    <span class="select is-fullwidth">
        <select v-validate="'required|not_in:null'" v-model="statement_client_wise_id" name="statement" @change="">
          <option value=null v-for="statement in statements_client_wise" :value="statement.id">{{statement.text}}</option>
          <!-- <option v-for="state in states" :value="state">{{ state }}</option> -->
        </select>
      </span>

    <div class="columns">

      <div class="column" v-for="client in client_names">
        <a class="button is-info" @click="partyWise(client.id)">{{client.name}}</a>
      </div>

    </div>

  </div>
</div>
</template>
<script>
import Datepicker from 'vue-bulma-datepicker'
import axios from 'axios'
export default {
  name: 'Statement',
  data: () => ({
    statements: [],
    statements_client_wise: [],
    statement_id: null,
    statement_client_wise_id: null,
    cid: null,
    client_names: [],
    client_id: null,
    statement_from_date: '',
    statement_to_date: '',
    clientwise_from_date: '',
    clientwise_to_date: ''
  }),
  components: {
    Datepicker
  },
  created () {
    this.cid = this.$route.params.cid
    this.getStatementList()
    this.getStatementListClientWise()
    this.getClientList()
  },
  methods: {
    getStatementList () {
      let url = `http://localhost:8000/api/statement/listOfStatement`
      axios.get(url)
        .then(response => {
          this.statements = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    getStatementListClientWise () {
      let url = `http://localhost:8000/api/statement/listOfStatementClientWise`
      axios.get(url)
        .then(response => {
          this.statements_client_wise = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    buildStatement () {
      let url = `http://127.0.0.1:8000/api/statement/generateStatement/` + this.statement_from_date + `/` + this.statement_to_date + `/` + this.cid + `/` + this.statement_id
      axios.get(url)
        .then(response => {
          window.location.href = 'http://127.0.0.1:8000/api/statement/generateStatement/' + this.statement_from_date + '/' + this.statement_to_date + '/' + this.cid + '/' + this.statement_id
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    getClientList () {
      axios.get(`http://localhost:8000/api/client/clientList/` + this.cid)
        .then(response => {
          this.client_names = response.data
          console.log('client_names' + this.client_names)
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    partyWise (id) {
      console.log(id)
    }
  }
}
</script>
<style lang="scss">
.Statement {
    .box {
        .is-info {
            margin: 1rem 1rem 0;
        }
    }
}
</style>
