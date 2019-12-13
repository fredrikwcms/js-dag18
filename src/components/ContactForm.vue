<template>
    <div>
        <b-form @submit="sendForm()">
            <b-form-group 
            id="group-1" 
            label="Enter your name:" label-for="name-input">
                <b-form-input 
                    id="name-input" v-model="formInput.name"
                    required
                    placeholder="Your name"
                    ></b-form-input>
            </b-form-group>
            <b-form-group
                id="group-2"
                label="Enter your email"
                label-for="mail-input">
                <b-form-input
                    id="mail-input"
                    v-model="formInput.mail"
                    type="email"
                    required
                    placeholder="Your email"
                ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
                <h5 v-for="form in forms" v-bind:key="form">{{form.name + ' ' + form.mail}}</h5>
        
        </b-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formInput: {name: "", mail: ""},
            forms: []
        }
    },
    mounted() {
        if (localStorage.getItem('form')) {
            try {
                this.forms = JSON.parse(localStorage.getItem('form'));
            } catch(e) {
                localStorage.removeItem('form');
            }
        }
    },
    watch: {
        // form(newForm) {
        //     localStorage.form.name = newForm;
        // }
    },
    methods: {
        sendForm() {
            this.forms.push(this.formInput);
            this.formInput = '';
            this.saveForm();
        },
        saveForm() {
            const parsed = JSON.stringify(this.forms);
            localStorage.setItem('form', parsed)
        },
    }
}
</script>

<style scoped>

</style>