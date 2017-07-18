<template>
<div id="CompanyDashboardNavbar">
  <nav class="nav has-shadow">
    <div class="nav-left">
      <a class="nav-item  is-tab is-hidden-mobile "></a>
      <a class="nav-item  is-tab is-hidden-mobile" @click="takeHome()"> Home</a>
      <a class="nav-item  is-tab is-hidden-mobile "></a>
      <a class="nav-item  is-tab is-hidden-mobile is-active ">{{this.company_name}}</a>
    </div>
    <span class="nav-toggle">
            <span></span>
    <span></span>
    <span></span>
    </span>
    <div class="nav-right nav-menu">
      <a class="nav-item is-tab" @click="bankListModal = true">
        Banks
      </a>
      <a class="nav-item is-tab" @click="addBankModal = true">
        Add new Bank
      </a>
      <a class="nav-item is-tab" @click="companyProfileModal = true">
        <figure class="image is-16x16" style="margin-right: 8px;">
          <img src="http://bulma.io/images/jgthms.png">
        </figure>
        Profile
      </a>

      <a class="nav-item is-tab">
        <select name="navbar-dropdown" v-model="temp" class="navbar-dropdown">
          <option class="option" value=null>Select</option>
          <option class="option" value="clients">Clients</option>
          <option class="option" value="client_address" >Client Address</option>
          <option class="option" value="logout">Add new</option>
        </select>
      </a>
    </div>
  </nav>
  <CompanyProfileModal v-if="companyProfileModal" :company="company" @close="companyProfileModal = false"></CompanyProfileModal>
  <AddBankModal v-if="addBankModal" :company="company" @close="addBankModal = false"></AddBankModal>
  <BanksListModal v-if="bankListModal" :company="company" @close="bankListModal = false"></BanksListModal>
  <AddClientModal v-if="temp=='logout' && addClientModal" :company="company" @close="temp=''"></AddClientModal>
  <ClientListModal v-if="temp=='clients' && clientListModal" :company="company" @close="temp=''"></ClientListModal>
  <ClientAddressModal v-if="temp=='client_address' && clientAddressModal" :company="company" @close="temp=''"></ClientAddressModal>
</div>
</template>
<script>
import CompanyProfileModal from '@/components/CompanyProfileModal'
import AddBankModal from '@/components/AddBankModal'
import BanksListModal from '@/components/BanksListModal'
import AddClientModal from '@/components/AddClientModal'
import ClientListModal from '@/components/ClientListModal'
import ClientAddressModal from '@/components/ClientAddressModal'
import HTTP from '@/packages/HTTP'
export default {
  name: 'CompanyDashboardNavbar',
  components: {
    CompanyProfileModal,
    AddBankModal,
    BanksListModal,
    AddClientModal,
    ClientListModal,
    ClientAddressModal
  },
  data: () => ({
    companyProfileModal: false,
    addBankModal: false,
    bankListModal: false,
    addClientModal: true,
    clientListModal: true,
    clientAddressModal: true,
    temp: '',
    company_name: '',
    company: Object
  }),
  methods: {
    getDetailsAboutCompany (id) {
      HTTP.get(`company/show/` + id)
        .then(response => {
          this.company_name = response.data.name
          this.company = response.data
        })
        .catch(e => {

        })
    },
    localStorage () {
      if (window.localStorage.getItem('cid') === null) {
        window.localStorage.setItem('cid', this.cid)
      }
    },
    takeHome () {
      window.localStorage.removeItem('cid')
      this.$router.push('/Home')
    },
    getToken () {
      var token = window.localStorage.getItem('token')
      if (token != null) {
        return true
      } else {
        this.$router.push('/')
      }
    }
  },
  created () {
    this.getToken()
    this.cid = this.$route.params.cid
    this.getDetailsAboutCompany(this.cid)
    this.localStorage()
  }
}
</script>
<style lang="scss">
html {
    min-height: 100%;
    background: #fafcfd;
}
.main-page {
margin-top: 1rem;
}
</style>
