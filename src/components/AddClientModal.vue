<template>
<div id="AddClientModal">
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add New Client</p>
      </header>
      <section class="modal-card-body">
        <div class="">
          <div>
            <div class="field">
              <label class="label">Name</label>
              <p class="control">
                <input v-validate="'required'" name="cname" v-model="clients.cname" placeholder="Client Name" type="text" class="input">
              </p>
              <div v-show="errors.has('cname')" class="help is-danger">
                {{ errors.first('cname') }}
              </div>
            </div>


            <div class="field">
              <label class="label">Address</label>
              <p class="control">
                <textarea v-validate="'required'" name="address" v-model="clients.address" class="textarea" placeholder="Client Address"></textarea>
              </p>
              <div v-show="errors.has('address')" class="help is-danger">
                {{ errors.first('address') }}
              </div>
            </div>

            <div class="field">
              <label class="label">GST Number</label>
              <p class="control">
                <input v-validate="'required'" name="gstin" v-model="clients.gstin" placeholder="Client GST Number" type="text" class="input">
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
          </div>
        </div>

      </section>
      <footer class="modal-card-foot">
        <a class="button is-success">Save</a>
        <a class="button" v-on:click="$emit('close')">Close</a>
      </footer>
    </div>
  </div>
</div>
</template>
<script>
import StateCombobox from '@/components/StateCombobox'
export default {
  name: 'AddClientModal',
  components: {
    StateCombobox
  },
  data () {
    return {
      clients: {
        cname: '',
        address: '',
        gstin: '',
        state: ''
      }
    }
  }
}
</script>
<style lang="scss">

</style>
