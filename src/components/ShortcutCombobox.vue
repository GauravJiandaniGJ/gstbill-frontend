<template>
  <div class="ShortcutCombobox">
    <pre v-model="this.description=shortcut"></pre>
    <span class="select is-fullwidth">
            <select v-validate="'required|not_in:null'" v-model="this.description" name="shortcut-select" @change="">
              <option>hello</option>
              <option>{{this.description}}</option>
            </select>
          </span>
  </div>
</template>
<script>
export default {
  name: 'ShortcutCombobox',
  data: () => ({
    description: ''
  }),
  props: {
    shortcut: {
      required: true
    }
  }
}
</script>
<style lang="scss">
</style>
