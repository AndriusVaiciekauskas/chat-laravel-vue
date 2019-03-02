<template>
    <div class="scroll mt-5">
        <chat-message
                v-for="message in messages"
                :key="message.id"
                :message="message"
                :user="user">
        </chat-message>
    </div>
</template>

<script>
    import ChatMessage from './ChatMessage.vue';

    export default {
        components: {
            'chat-message': ChatMessage
        },
        props: ['messages', 'user']
    }
</script>

<style scoped>
    .scroll {
        max-height: 50vh;
        overflow-y: scroll;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
</style>