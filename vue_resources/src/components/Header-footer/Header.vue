<template>
    <div class="header-container">
        <div class="header-logo">
            <img :src="logo" class="header-logo-image" @click="logoClick">
        </div>
        <div class="header-menu">
            <img :src="menu" class="header-menu-image" @click="showNavigation = !showNavigation">
        </div>
         <md-drawer :md-active.sync="showNavigation" :md-right="true" :md-swipeable="true">
      
         </md-drawer>

        
    </div>
    
</template>

<script>
    import Logo from '../../assets/images/header-footer/logo.jpeg'
    import Menu from '../../assets/images/header-footer/Hamburger_icon.svg'
    
    export default {    
        data: function() {
            return {
                logo: Logo,
                menu: Menu,
                showNavigation: false
            }
        },

        methods: {
            logoClick() {
                alert('logo')
            },
            menuClick() {
                alert('menu')
            }
        }
    }
</script>

<style scoped>
    .header-container {
        background-color: #ab131b;
        height: 4.5rem;
        display: flex;
        justify-content: space-between
    }

    .header-logo-image   {
        width: 6rem;
        height: 4.5rem;;
    }

    .header-menu-image {
        height: 4.5rem;;
    }
</style>
