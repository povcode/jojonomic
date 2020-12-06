<template>
  <div>
    <h1>Show list</h1>

    <div class="ui labeled input fluid">
      <div class="ui label"><i class="tasks icon"></i> Folder</div>
      <h3>{{ task }}</h3>
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
      id: "",
      name: "",
      timeStamp: "",
      data: [],
      text: "",
      title: "CREATE Document",
    };
  },
  mounted() {
    this.getFolder();
  },
  methods: {
    getFolder() {
      let vm = this;
      let data = {
        url: "/document-service",
      };
      helpers
        .getFolder(data.url)
        .then(function(response) {
          if (response.data != null) {
            vm.data = response.data;
            vm.text = response.message;
            vm.snackbar = true;
          }
        })
        .catch(function(error) {
          vm.text = error.message;
          alert(error.message);
        });
    },
    deleteDocument() {
      let vm = this;
      let data = {
        url: "/document-service/document",
        post: {
          id: "82b07a6f-60cc-4403-8fd2-329ef0de0d3d",
        },
      };
      helpers
        .deletefolder(data.url, data.post)
        .then(function(response) {
          if (response.data != null) {
            vm.text = response.message;
            vm.snackbar = true;
          }
        })
        .catch(function(error) {
          vm.text = error.message;
          alert(error.message);
        });
    },
  },
};
</script>
