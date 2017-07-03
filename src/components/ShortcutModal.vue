<template>
  <div class="ShortcutModal">

    <a @click="hidden = false" class="is-success view-profile" v-if="hidden"> Show </a>

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
              <input v-validate="'required'" name="sname" v-model="shortcut.sname" placeholder="Shortcut Name" type="text" class="input">
            </p>
            <div v-show="errors.has('sname')" class="help is-danger">
              {{ errors.first('sname') }}
            </div>
          </div>

          <div class="field">
            <label class="label">Service Code</label>
            <p class="control">
              <input v-validate="'required'" name="scode" v-model="shortcut.scode" placeholder="Service Code" type="text" class="input">
            </p>
            <div v-show="errors.has('scode')" class="help is-danger">
              {{ errors.first('scode') }}
            </div>
          </div>

          <div class="field">
            <label class="label">Price</label>
            <p class="control">
              <input v-validate="'required'" name="price" v-model="shortcut.price" placeholder="Price" type="text" class="input">
            </p>
            <div v-show="errors.has('price')" class="help is-danger">
              {{ errors.first('price') }}
            </div>
          </div>


        </section>
        <footer class="modal-card-foot">
          <a class="button is-success" @click="hidden=false">Update</a>
          <a class="button is-danger" @click="">Delete</a>
          <a class="button is-info" @click="hidden=true">Close</a>
        </footer>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'ShortcutModal',
  data () {
    return {
      shortcut: {
        sname: '',
        scode: null,
        price: null
      },
      hidden: true
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

</style>
