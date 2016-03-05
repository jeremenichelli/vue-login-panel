import Vue from 'vue';
import { validate, sendCredentials } from './_helpers';

// vm data
const data = {
    credentials: {
        user: '',
        password: ''
    },
    validation: {
        user: {
            minLength: 8
        },
        password: {
            minLength: 8
        }
    },
    error: '',
    valid: true,
    logged: false,
    loading: false
};

// ViewController
new Vue({
    el: '#app',
    data,
    methods: {
        onLogin(e) {
            e.preventDefault();

            if (this.loading) {
                return;
            }

            // internal this reference
            const self = this;

            validate(self)
                .then(() => {
                    self.valid = self.loading = true;
                })
                .then(() => sendCredentials(self.credentials))
                .then(() => {
                    self.loading = false;
                    self.logged = true;
                })
                .catch(err => {
                    self.loading = false;
                    self.valid = false;
                    self.error = err;
                });
        },
        onLogout() {
            this.logged = false;
            this.credentials.user = '';
            this.credentials.password = '';
        }
    }
});
