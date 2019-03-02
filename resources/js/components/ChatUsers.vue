<template>
    <div>
        Users:
        <p v-for="user in joinedUsers">{{ user.name }}</p>
    </div>
</template>

<script>
    export default {
        props: ['joinedUsers']
    }
</script>