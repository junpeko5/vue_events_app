<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <select @change="updateValue" v-bind="$attrs">
      <option
        v-for="(option, index) in options"
        :value="option"
        :key="index"
        :selected="option === value"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number],
    },
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>
