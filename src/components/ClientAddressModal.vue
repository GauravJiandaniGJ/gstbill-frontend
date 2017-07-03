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
                <ClientNameComboBox></ClientNameComboBox>
              </p>
            </div>
            <a class="button is-success">Fetch Address</a>
            <a class="button is-success">Add New</a>
            <!-- This will fetch addresses of that party with get request and will run a forloop for below code -->

          <div class="field">
          </div>
<div class="field">
            <div class="field">
              <label class="label">Address</label>
              <p class="control">
                <input v-validate="'required|min:8'" name="address" placeholder="Insert Address" type="textarea" class="input">
              </p>
              <div v-show="errors.has('account_number')" class="help is-danger">
                {{ errors.first('account_number') }}
              </div>
            </div>

            <div class="field">
              <label class="label">GST Number</label>
              <p class="control">
                <input v-validate="'required|min:4'" name="gstin" placeholder="Insert GST number" type="text" class="input">
              </p>
              <div v-show="errors.has('gstin')" class="help is-danger">
                {{ errors.first('gstin') }}
              </div>
            </div>


            <div class="field">
              <label class="label">State</label>
              <p class="control">
                <StateCombobox></StateCombobox>
              </p>
            </div>

            <a class="button is-success">Update</a>
          </div>
          </div>

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
export default {
  name: 'ClientAddressModal',
  components: {
    ClientNameComboBox,
    StateCombobox
  },
  data: () => ({
    ClientId: ''
  }),
  created () {
    this.$bus.$on('ClientName', (ClientName) => {
      this.ClientId = ClientName.id
      console.log(this.ClientId)
    })
  }
}
</script>
<style lang="scss">

</style>
