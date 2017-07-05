<template>
  <div class="EditClientDetails">

    <div class="column">
      <div class="field">
        <a class="button is-info" @click="hidden=true" v-if="!hidden">Edit</a>
        <a class="button is-info" @click="hidden=false" v-if="hidden">Hide</a>
      </div>
    </div>

<div v-if="hidden" class="box" id="editclient">
    <div class="columns is-multiline">
      <div class="column">
        <div class="field">
          <label class="label">Client Name</label>
          <ClientNameComboBox></ClientNameComboBox>
        </div>
      </div>

    </div>

    <div class="columns is-multiline" id="description">
      <div class="column">
        <div class="field">
          <label class="label">Description</label>
          <p class="control">
            <input v-validate="'required'" v-model="client.description" name="description" placeholder="Description" type="text" class="input">
          </p>
          <div v-show="errors.has('description')" class="help is-danger">
            {{ errors.first('description') }}
          </div>
        </div>
      </div>
    </div>

</div>
  </div>
</template>
<script>
import StateCombobox from '@/components/StateCombobox'
import ClientNameComboBox from '@/components/ClientNameComboBox'
import ClientAddressCombobox from '@/components/ClientAddressCombobox'
export default {
  name: 'EditClientDetails',
  data () {
    return {
      hidden: false,
      cname: '',
      caddress: '',
      cgstin: '',
      cstate: '',
      cdescription: '',
      cid: null,
      address_id: null,
      client: {
        cid: null,
        gstin: '',
        description: ''
      }
    }
  },
  components: {
    StateCombobox,
    ClientNameComboBox,
    ClientAddressCombobox
  },
  props: {
    client: {
      required: true
    }
  },
  created () {
    this.$bus.$on('clientDetails', (response) => {
      this.client.cid = response.clientId
      this.client.gstin = response.gstin
    })
  }
}
</script>
<style lang="scss">
.EditClientDetails{
  .select.is-fullwidth{
    padding-left: 1rem;
  }
}

#description {
  padding-bottom: 1rem;
}

</style>
