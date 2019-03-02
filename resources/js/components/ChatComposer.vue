<template>
    <div class="chat-composer">
        <input type="text" class="form-control" v-model="messageText" @keyup.enter="sendMessage">
        <button class="btn btn-primary" @click="sendMessage">Send</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                messageText: ''
            }
        },
        props: ['user'],
        methods: {
            sendMessage() {
                if (this.messageText == '') {
                    return;
                }

                this.$emit('send-message', {
                    message: this.messageText,
                    user: this.$props.user
                });
                this.messageText = '';
            }
        }
    }
</script>

<style scoped>
    .chat-composer {
        display: flex;
    }

    .chat-composer input {
        flex: 1;
        border-radius: 0;
    }

    .chat-composer button {
        border-radius: 0;
    }
</style>