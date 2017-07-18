<template>
  <div class="EditClientDetails">

    <div class="column">
      <div class="field">
        <a class="button is-info" @click="hidden=true" v-if="!hidden">Edit</a>
        <a class="button is-success" @click="updateClient()" v-if="hidden">Update</a>
        <a class="button is-info" @click="hidden=false" v-if="hidden">Hide</a>
      </div>
    </div>
<pre v-model="this.client_detail=client" hidden></pre>
<pre v-model="this.bid=bill" hidden></pre>
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
import HTTP from '@/packages/HTTP'
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
      address_id: null,
      client: {
        cid: null,
        gstin: '',
        description: ''
      },
      bid: null,
      yid: null,
      mid: null,
      cid: null
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
    },
    bill: {
      required: true
    }
  },
  created () {
    this.$bus.$on('clientDetails', (response) => {
      this.client.cid = response.clientId
      this.client.gstin = response.gstin
    })
    this.mid = this.$route.params.mid
    this.yid = this.$route.params.yid
    this.cid = this.$route.params.cid
  },
  methods: {
    updateClient () {
      HTTP.patch(`company/` + this.cid + `/year/` + this.yid + `/month/` + this.mid + `/bill/updatePrimary/` + this.bid, {
        bill_date: null,
        bank_id: null,
        description: this.client.description,
        client_id: this.client.cid,
        gstin: this.client.gstin
      })
        .then(response => {
          if (response.status === 200) {
            this.$bus.$emit('refreshNow', {})
            this.hidden = false
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
.EditClientDetails{
  .select.is-fullwidth{
    padding-left: 1rem;
  }
}

#description {
  padding-bottom: 1rem;
  padding-left: 1rem;
}

</style>
