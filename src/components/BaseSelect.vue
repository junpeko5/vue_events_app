<template>
  <div class="mb-2">
    <label class="block text-gray-700 text-sm font-bold mb-2" v-if="label">
      {{ label }}
    </label>
    <select
      @change="updateValue"
      v-bind="$attrs"
      class="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    >
      <option>選択してください</option>
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
