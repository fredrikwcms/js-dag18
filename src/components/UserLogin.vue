<template>
    <div>
        <input
            placeholder="Username"
            v-model="usrname"
        />
        <b-button type="button" @click="userLogin()">
        </b-button>
    </div>
</template>

<script>
export default {
    name: "ShowUser",
    data() {
        return {
            usrname: "asdf"
        };
    },
    methods: {
        userLogin: function() {
            this.$emit("inputData", this.usrname);
            this.usrname = "";
        }
    }
}
</script>

<style scoped>

</style>