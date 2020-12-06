<template>
  <div>
    <h1>Create</h1>

    <div class="ui labeled input fluid">
      <div class="ui label"><i class="tasks icon"></i> document</div>
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
      title: "CREATE Document",
    };
  },
  mounted() {
    this.CreateDocument();
  },
  methods: {
    CreateDocument() {
      let vm = this;
      let data = {
        url: "/document-service/document",
        post: {
          id: "82b07a6f-60cc-4403-8fd2-329ef0de045d",
          name: "Document Job desc Tech",
          type: "document",
          folder_id: "82b07a6f-60cc-4403-8fd2-329ef0de0d3e", // string kosong atau ada id foldernya
          content: {
            blocks: [
              {
                type: "paragraph",
                text: "This is paragraph",
              },
            ],
          }, // block editorjs
          timestamp: 1605081795, //second unix timestamp
          owner_id: 123, //user yg lagi login. atau user yang mau diserah terimakan dokumennya. Kalau 0, backend ambil dari data login
          share: [1, 23, 4232, 121], //share ke user lain
          company_id: 23,
        },
      };
      helpers
        .createfile(data.url, data.post)
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
