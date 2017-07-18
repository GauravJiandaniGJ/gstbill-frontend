<template>
  <div class="ShortcutModal">

    <div id="view_profile"><a @click="hidden = false" class="button is-success view-profile" v-if="hidden"> Show </a></div>

    <div class="modal is-active" v-if="!hidden">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Shortcut Detail</p>
          <button class="delete" @click="hidden=true"></button>
        </header>
        <section class="modal-card-body">

          <div class="field">
            <label class="label">Shortcut Name</label>
            <p class="control">
              <input v-validate="'required'" name="sname" v-model="shortcut.description=sendData.description" placeholder="Shortcut Name" type="text" class="input">
            </p>
            <div v-show="errors.has('sname')" class="help is-danger">
              {{ errors.first('sname') }}
            </div>
          </div>

          <div class="field">
            <label class="label">Service Code</label>
            <p class="control">
              <input v-validate="'required'" name="scode" v-model="shortcut.service_code=sendData.service_code" placeholder="Service Code" type="text" class="input">
            </p>
            <div v-show="errors.has('scode')" class="help is-danger">
              {{ errors.first('scode') }}
            </div>
          </div>

          <div class="field">
            <label class="label">Price</label>
            <p class="control">
              <input v-validate="'required'" name="price" v-model="shortcut.price=sendData.price" placeholder="Price" type="text" class="input">
            </p>
            <div v-show="errors.has('price')" class="help is-danger">
              {{ errors.first('price') }}
            </div>
          </div>

<pre v-model="shortcut.id=sendData.id" hidden>{{shortcut.id}}</pre>

        </section>
        <footer class="modal-card-foot">
          <a class="button is-success" @click="updateShortcut(shortcut.id)">Update</a>
          <a class="button is-danger" @click="deleteShortcut(shortcut.id)">Delete</a>
          <a class="button is-info" @click="hidden=true">Close</a>
        </footer>
      </div>
    </div>

  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'ShortcutModal',
  data () {
    return {
      shortcut: {
        id: null,
        sname: '',
        scode: null,
        price: null
      },
      hidden: true,
      id_hidden: false
    }
  },
  methods: {
    deleteShortcut (id) {
      let url = `http://localhost:8000/api/shortcut/delete/` + id
      axios.delete(url)
        .then(response => {
        })
      this.hidden = true
    },
    updateShortcut (id) {
      axios.patch(`http://localhost:8000/api/shortcut/update` + id, {
        description: this.shortcut.sname,
        price: this.shortcut.price,
        service_code: this.shortcut.scode
      })
        .then(response => {
          this.sname = ''
          this.scode = null
          this.price = null
        })
        .catch((e) => {
          console.log(e)
        })
      this.hidden = true
    }
  },
  props: {
    sendData: {
      required: true
    }
  }
}
</script>
<style lang="scss">

.ShortcutModal{

  .modal{

    .modal-cart-foot{
      .is-info{

        margin-left: 50%;

      }
    }

  }

}

#view_profile{
  padding-top: 0.3rem;
}
</style>
