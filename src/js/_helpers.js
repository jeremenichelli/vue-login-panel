/*
 * Validates credentials according to specific data/validation model
 * @method validate
 * @params {Object} data
 * @®eturns {Promise}
 */
const validate = function(data) {

    return new Promise(function (resolve, reject) {
        for (const field in data.credentials) {
            if (data.credentials.hasOwnProperty(field)) {
                // validate length only if minLength configuration exists for field
                if (data.validation
                        && data.validation[field]
                        && data.validation[field].minLength) {

                    // assign false if minLength condition is not passed
                    if (data.credentials[field].length < data.validation[field].minLength) {
                        // generate dynamic error
                        reject(`${field} must have at least ${data.validation[field].minLength} characters`);
                    }
                }
            }
        }

        resolve();
    });
};

/*
 * Fake call method which returns a Promise, only rejects if password equals `password`
 * @method fakeCall
 * @params {Object} credentials
 * @®eturns {Boolean}
 */
const fakeCall = function(credentials) {

    return new Promise(function(resolve, reject) {
        // fake server delay added
        setTimeout(function() {
            // only reject if password equals 'password'
            if (credentials.password === 'password') {
                reject('incorrect password, try again');
            } else {
                resolve();
            }
        }, 750);
    });
};

/*
 * Method to check credentials
 * @method sendCredentials
 * @params {Object} credentials
 * @®eturns {Promise}
 */
const sendCredentials = credentials => fakeCall(credentials);

export { validate, sendCredentials };
