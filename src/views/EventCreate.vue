<template>
  <div class="container">
    <div class="w-full max-w-xs mx-auto my-32">
      <form
        @submit.prevent="createEvent"
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div class="mb-4">
          <BaseInput label="タイトル" v-model="event.title" type="text" />
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div class="mb-6">
          <BaseSelect
            label="カテゴリー"
            :options="categories"
            v-model="event.category"
          />
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            日程
          </label>
          <Datepicker
            :language="ja"
            format="yyyy年MM月dd日"
            v-model="event.date"
            class=""
            inputClass="appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div class="flex items-center justify-between">
          <BaseButton type="submit"> 登録する </BaseButton>
          <router-link
            :to="{ name: 'event-list' }"
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            TOPに戻る
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput";
import BaseSelect from "@/components/BaseSelect";
import Datepicker from "vuejs-datepicker";
import { ja } from "vuejs-datepicker/dist/locale";
import BaseButton from "@/components/BaseButton";
export default {
  name: "event-create",
  components: { BaseButton, BaseInput, BaseSelect, Datepicker },
  data() {
    return {
      ja: ja,
      event: this.createFreshEventObject(),
      categories: this.$store.state.categories,
    };
  },
  methods: {
    createEvent() {
      alert("submit");
    },
    createFreshEventObject() {
      const id = Math.floor(Math.random() * 10000000);

      return {
        id: id,
        category: "",
        title: "",
        description: "",
        location: "",
        date: "",
        time: "",
        attendees: [],
      };
    },
  },
};
</script>
