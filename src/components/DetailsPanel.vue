<template>
  <div class="DetailsPanel">

    <div class="columns is-multiline" v-if="hidden" id="content">

      <div class="column is-5">
        <div class="field">
          <p class="control">
            <ShortcutCombobox></ShortcutCombobox>
          </p>
          <div v-show="errors.has('product_name')" class="help is-danger">
            {{ errors.first('product_name') }}
          </div>
        </div>
      </div>

      <div class="column">
        <div class="field">
          <p class="control">
            <input v-validate="'required'" name="service_code" placeholder="Service Code" type="text" class="input">
          </p>
          <div v-show="errors.has('service_code')" class="help is-danger">
            {{ errors.first('service_code') }}
          </div>
        </div>
      </div>

      <div class="column">
        <div class="field">
          <p class="control">
            <input v-validate="'required'" name="qty" placeholder="Quantity" type="text" class="input">
          </p>
          <div v-show="errors.has('qty')" class="help is-danger">
            {{ errors.first('qty') }}
          </div>
        </div>
      </div>

      <div class="column">
        <div class="field">
          <p class="control">
            <input v-validate="'required'" name="rate" placeholder="Rate of Product" type="text" class="input">
          </p>
          <div v-show="errors.has('rate')" class="help is-danger">
            {{ errors.first('rate') }}
          </div>
        </div>
      </div>

      <div class="column">
        <div class="field">
          <p class="control">
            <input v-validate="'required'" name="total" placeholder="Total Amount" type="text" class="input">
          </p>
          <div v-show="errors.has('total')" class="help is-danger">
            {{ errors.first('total') }}
          </div>
        </div>
      </div>

    </div>

        <div class="columns is-multiline">
          <div class="column">
            <a class="button is-info" v-if="!hidden" @click="hidden = true">Add</a>
              <a class="button is-info" v-if="hidden" @click="hidden = false">Save</a>
          </div>
        </div>

  </div>
</template>
<script>
import ShortcutCombobox from '@/components/ShortcutCombobox'
export default {
  name: 'DetailsPanel',
  data: () => ({
    hidden: false
  }),
  components: {
    ShortcutCombobox
  }
}
</script>
<style lang="scss">
</style>
