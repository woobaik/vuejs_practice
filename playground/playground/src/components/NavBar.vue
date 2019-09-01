<template>
    <div class="navbar">
        <router-link to="/" class="link">Home</router-link>
        <router-link :to="{ name: 'About' }" class="link">About</router-link>
        <router-link :to="{ name: 'Profile' }" class="link">Profile</router-link>
    </div>    
</template>

<script>
export default {
    
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
    }
</style>