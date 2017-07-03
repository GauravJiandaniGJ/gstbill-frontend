<template>
  <div class="ShortcutCombobox">
    <span class="select is-fullwidth">
            <select v-validate="'required|not_in:null'" name="shortcut-select" @change="">
              <option value=null>Select Dropdown</option>
              <option value=null>Bank Account 1</option>
            </select>
          </span>
  </div>
</template>
<script>
export default {
  name: 'ShortcutCombobox',
  data: () => ({

  })
}
</script>
<style lang="scss">
</style>
