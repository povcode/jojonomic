import Vue from 'vue';
import Router from 'vue-router';
import folderAll from './components/folderAll.vue';
import folderCreate from './components/folderCreate.vue';
import documentAll from './components/documentAll.vue';
import documentCreate from './components/documentCreate.vue';
import documentDetail from './components/documentDetail.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            redirect: '/document-service'
        },
        {
            path: '/document-service',
            name: 'all-folder',
            component: folderAll
        },
        {
            path: '/document-service/folder',
            name: 'add-folder',
            component: folderCreate
        },
        {
            path: '/document-service/folder/:folder_id',
            name: 'all-document',
            component: documentAll
        },
        {
            path: '/document-service/document',
            name: 'create-document',
            component: documentCreate
        },
        {
            path: '/document-service/document/:document_id',
            name: 'detail-document',
            component: documentDetail
        },


    ]
});