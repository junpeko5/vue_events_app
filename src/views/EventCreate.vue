<template>
  <div class="container mx-auto">
    <div class="columns-1">
      <h1 class="text-3xl font-bold">イベント作成</h1>
      <form @submit.prevent="createEvent">
        <BaseInput label="タイトル" v-model="event.title" type="text" />
        <BaseSelect
          label="カテゴリー"
          :options="categories"
          v-model="event.category"
        />
        <Datepicker
          :language="ja"
          format="yyyy年MM月dd日"
          v-model="event.date"
        />
        <BaseButton type="submit"> 登録 </BaseButton>
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
    createEvent() {},
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
