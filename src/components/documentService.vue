<template>
  <div>
    <h1>Show list</h1>

    <div class="ui labeled input fluid">
      <div class="ui label"><i class="tasks icon"></i> Document</div>
      <!-- <input type="text" readonly  :value="task.task1"/> -->
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label"><i class="info circle icon"></i> Details</div>
      <!-- <input type="text" readonly  :value="task.task2"/> -->
    </div>
    <div class="actions">
      <!-- <router-link :to="{ name: 'edit', params: { id: this.$route.params.id }}"> -->
      <!-- Edit task -->
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script>
import helpers from "../helpers/helpers";
export default {
  data() {
    return {
      task: "",
    };
  },
  async mounted() {
    this.task = await helpers.gettask(this.$route.params.id);
  },
};
</script>

<style scoped>
.actions a {
  display: block;
  text-decoration: underline;
  margin: 20px 10px;
}
</style>
