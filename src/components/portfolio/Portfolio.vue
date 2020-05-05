<template>
    <div>

        <router-view></router-view>

    </div>


    
</template>

<script>
    export default {
        methods: {
            navigateToHome() {
                this.$router.push({ name: 'homes' });
            },
            navigateToUser() {
                this.$router.push('/user');
            }
        }
    }
</script>