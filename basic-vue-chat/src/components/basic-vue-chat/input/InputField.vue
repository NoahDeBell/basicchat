<template>
  <div class="input__field">
    <input
      :value="value"
      type="text"
      name="message"
      aria-placeholder="Ask question..."
      placeholder="Ask question..."
      autofocus
      @input="$emit('input', $event.target.value)"
      @keyup.enter.prevent="send"><br>
  </div>

</template>

<script>
export default {
  name: 'InputField',
  props: {
    value: {
      type: String,
      default: '',
      required: false
    }
  },
  methods: {
    send (event) {
      this.$emit('newOwnMessage')
    }
  }
}
</script>

<style>

</style>
