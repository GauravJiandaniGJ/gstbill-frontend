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
                <ClientNameComboBox :company="company"></ClientNameComboBox>
              </p>
            </div>

          </div>

<ClientAddressTab :clientId="ClientId"></ClientAddressTab>
        </div>

      </section>
      <footer class="modal-card-foot">
        <a class="button is-info" v-on:click="$emit('close')">Close</a>
      </footer>
    </div>
  </div>
</div>
</div>
</template>
<script>
import ClientNameComboBox from '@/components/ClientNameComboBox'
import StateCombobox from '@/components/StateCombobox'
import ClientAddressTab from '@/components/ClientAddressTab'
export default {
  name: 'ClientAddressModal',
  components: {
    ClientNameComboBox,
    StateCombobox,
    ClientAddressTab
  },
  data: () => ({
    ClientId: Object
  }),
  created () {
    this.$bus.$on('ClientName', (ClientName) => {
      console.log(ClientName)
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
