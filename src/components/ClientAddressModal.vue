<template>
<div id="ClientAddressModal">

  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Edit Client Address</p>
      </header>
      <section class="modal-card-body">
        <div class="">
          <div>

            <div class="field">
              <label class="label">Client Name</label>
              <p class="control">
                <ClientNameComboBoxNavbar :company="company"></ClientNameComboBoxNavbar>
              </p>
            </div>

          </div>

          <ClientAddressTab :clientAddress="ClientAddress"></ClientAddressTab>

        </div>

      </section>
      <footer class="modal-card-foot">
        <a class="button is-info" v-on:click="$emit('close')" @close="$emit('close')">Close</a>
      </footer>
    </div>
  </div>
</div>
</div>
</template>
<script>
import ClientNameComboBoxNavbar from '@/components/ClientNameComboBoxNavbar'
import StateCombobox from '@/components/StateCombobox'
import ClientAddressTab from '@/components/ClientAddressTab'
export default {
  name: 'ClientAddressModal',
  components: {
    ClientNameComboBoxNavbar,
    StateCombobox,
    ClientAddressTab
  },
  data: () => ({
    ClientAddress: Object,
    address: Object
  }),
  created () {
    this.$bus.$on('ClientNameNavbar', (ClientName) => {
      this.ClientAddress = ClientName.obj
    })
  },
  props: {
    company: {
      required: true
    }
  }
}
</script>
<style lang="scss">
#caddress{
  padding-top: 1rem;
}
</style>
