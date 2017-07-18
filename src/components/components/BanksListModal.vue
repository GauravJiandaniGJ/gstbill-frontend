<template>
  <div id="BanksListModal">
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Edit Bank Details</p>
        </header>
        <section class="modal-card-body">
          <div class="">
            <div>

              <div class="companywise-body" v-for="bank in banks">
                <div class="one-company">
                  <!-- v-for="company in companies" -->
                  <input type="hidden">
                  <span class="text title is-4">{{bank.account_no}}</span>&nbsp&nbsp&nbsp
                  <span class="text title is-4">{{bank.branch_ifsc}}</span>&nbsp&nbsp&nbsp
                  <span class="text title is-4">{{bank.beneficiary_name}}</span>&nbsp&nbsp&nbsp
                  <a class="button is-danger is-outlined a-tag login" @click="removeBank(bank.id)">Remove</a>
                </div>
<hr>
              </div>

            </div>
          </div>

        </section>
        <footer class="modal-card-foot">
          <a class="button" v-on:click="$emit('close')">Close</a>
        </footer>
      </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import HTTP from '@/packages/HTTP'
export default {
  name: 'BanksListModal',
  data: () => ({
    banks: [],
    cid: null
  }),
  props: {
    company: {
      required: true
    }
  },
  created () {
    this.getToken()
    this.cid = window.localStorage.getItem('cid')
    this.getBankList(this.cid)
  },
  methods: {
    getBankList (cid) {
      let url = `company/listOfBanks/` + cid
      HTTP.get(url)
        .then(response => {
          this.banks = response.data
          console.log(this.banks)
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    removeBank (id) {
      let url = `company/bank/destroy/` + id
      HTTP.delete(url)
        .then(response => {
          if (response.status === 204 || response.status === 200) {
            this.getBankList(this.cid)
          }
        })
    },
    getToken () {
      var token = window.localStorage.getItem('token')
      if (token != null) {
        return true
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>
<style lang="scss">
</style>
