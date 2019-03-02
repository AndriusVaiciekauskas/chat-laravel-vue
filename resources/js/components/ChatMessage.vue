<template>
    <div class="card">
        <div class="card-body">
            <p>{{ message.message }}</p>
            <small>{{ message.user.name }}</small>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['message', 'user'],
        methods: {
            scrollToEnd() {
                var container = document.querySelector('.scroll');
                var scrollHeight = container.scrollHeight;
                container.scrollTop = scrollHeight;
            }
        },
        mounted() {
            this.scrollToEnd();
        },
        updated() {
            this.scrollToEnd();
        }
    }
</script>