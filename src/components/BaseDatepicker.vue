<template>
  <div>
    <label class="block text-gray-700 text-sm font-bold mb-2" v-if="label">
      {{ label }}
    </label>
    <Datepicker
      :language="ja"
      format="yyyy年MM月dd日"
      v-bind="$attrs"
      :value="value"
      @input="updateValue"
      v-on="listeners"
      inputClass="appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    />
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import { ja } from "vuejs-datepicker/dist/locale";

export default {
  inheritAttrs: false,
  name: "BaseDatepicker",
  components: {
    Datepicker,
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    value: [Date],
  },
  data() {
    return {
      ja: ja,
    };
  },
  methods: {
    updateValue(event) {
      console.log(event);
      this.$emit("input", event);
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue,
      };
    },
  },
};
</script>

<style scoped></style>
