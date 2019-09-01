<template>
    <div class="navbar">
        <router-link to="/" class="link">Home</router-link>
        <router-link :to="{ name: 'About' }" class="link">About</router-link>
        <div>
            <router-link class="list" v-for="(user, index) in users" :key="index" :to="{name: 'profile', params: {user_id: user}}" >
                profile {{ user }}
            </router-link>
        </div>

        

    </div>    
</template>

<script>
export default {
    props: ['users']
}
</script>

<style scoped>
    .navbar {
        display: flex;
        justify-content: center;
    }

    .link {
        border-radius: 5%;
        padding: 5px 10px;
        margin: 3px;
        display: block;
        background-color: #8f7adb;
        color: white;
        text-decoration: none;
        align-self: flex-start;
    }

    .list {
        display: flex;
        flex-direction: column;
        margin: 5px;
    }
</style>