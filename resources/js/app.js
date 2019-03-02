
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('chat-message', require('./components/ChatMessage.vue').default);
Vue.component('chat-log', require('./components/ChatLog.vue').default);
Vue.component('chat-composer', require('./components/ChatComposer.vue').default);
Vue.component('chat-users', require('./components/ChatUsers.vue').default);

// Laravel passport components
// Vue.component('passport-clients', require('./components/passport/Clients.vue').default);
// Vue.component('passport-authorized-clients', require('./components/passport/AuthorizedClients.vue').default);
// Vue.component('passport-personal-access-tokens', require('./components/passport/PersonalAccessTokens.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    data: {
        messages: [],
        user: {},
        joinedUsers: {}
    },
    methods: {
        sendMessage(message) {
            this.messages.push(message);

            axios.post('api/messages', message).then(response => {});
        },
        getAuthUser() {
            axios.get('api/user')
                .then(response => {
                    this.user = response.data;
                });
        },
        getMessages() {
            axios.get('api/messages')
                .then(response => {
                    this.messages = response.data;
                });
        }
    },
    mounted() {
        this.getMessages();
        this.getAuthUser();

        Echo.join('chat')
            .here(users => {
                this.joinedUsers = users;
            })
            .joining(user => {
                this.joinedUsers.unshift(user);
            })
            .leaving(user => {
                this.joinedUsers = this.joinedUsers.filter(u => {
                    return u.id !== user.id
                });
            })
            .listen('MessageCreated', (data) => {
                this.messages.push(data.message);
            });
    }
});
