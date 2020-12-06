<template>
  <div>
    <h1>Create</h1>

    <div class="ui labeled input fluid">
      <div class="ui label"><i class="tasks icon"></i> Folder</div>
      <h3>{{ text }}</h3>
      <!-- <input type="text" readonly  :value="task.task1"/> -->
    </div>
    <h4>{{ data }}</h4>

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
      title: "CREATE FOLDER",
    };
  },
  mounted() {
    this.CreateFolder();
  },
  methods: {
    CreateFolder() {
      let vm = this;
      let data = {
        url: "/document-service/folder",
        post: {
          id: "82b07a6f-60cc-4403-8fd2-329ef0de0d3d",
          name: "Folder Baru",
          timestamp: 16576232323,
        },
      };
      helpers
        .createfolder(data.url, data.post)
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
    deleteFolder() {
      let vm = this;
      let data = {
        url: "/document-service/folder",
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
