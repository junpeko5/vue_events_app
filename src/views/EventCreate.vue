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
          <BaseDatepicker label="日程" v-model="event.date" />
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
import BaseButton from "@/components/BaseButton";
import BaseDatepicker from "@/components/BaseDatepicker";
export default {
  name: "event-create",
  components: { BaseDatepicker, BaseButton, BaseInput, BaseSelect },
  data() {
    return {
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
