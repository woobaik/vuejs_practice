<template>
    <div class="navbar">
        <router-link to="/" class="link">Home</router-link>
        <router-link :to="{ name: 'About' }" class="link">About</router-link>
        <div>
            <router-link class="list" v-for="(user, index) in users" :key="index" :to="{name: 'profile', params: {user_id: user}}" >
                profile {{ user }}
            </router-link>
        </div>
        <div>
            <button class="btn btn-back" @click="goBack">Go Back</button>
            <button class="btn btn-home" @click="goHome">Go Home</button>
            <button class="btn btn-frd" @click="goFoward">Go Forward</button>
        </div>
        

    </div>    
</template>

<script>
export default {
    props: ['users'],
    methods: {
        goHome() {
        
            this.$router.push({name: 'Home'})
        },
        goBack() {
            this.$router.go(-1)
        },
        goFoward() {
            this.$router.go(1)
        }
        
    }
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

    .btn {
        background-color: lightgreen;
        padding: 5px 10px;
    }

</style>