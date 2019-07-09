const userEmail = 'user@gmail.com';
const adminEmail = 'admin@gmail.com';
const userPassword = 'UserPass';
const adminPassword = 'AdminPass';
const userNewPassword = 'UserNewPass';
const adminNewPassword = 'AdminNewPass';
const minEmailLength = 6;
const minPasswordLength = 5;
let message;
let enterEmail = prompt('Please, enter your email.');

if (!enterEmail) {
    message = 'Canceled!';

} else if (enterEmail.length < minEmailLength) {
    message = 'I don\'t know any emails having name length less than 6 symbols.';

} else {
    if (enterEmail === userEmail || enterEmail === adminEmail) {
        let password = prompt('Please, enter your password.');

        if (!password) {
            message = 'Canceled!';

        } else if (enterEmail === userEmail && password === userPassword 
            || enterEmail === adminEmail && password === adminPassword) {
            let changePassword = confirm('Do you want to change your password?');

            if (!changePassword) {
                message = 'You have failed the change.';
            } else {
                let enterOldPassword = prompt('Please, enter your old password.');

                if (!enterOldPassword) {
                    message = 'Canceled!';

                } else if (enterEmail === userEmail && enterOldPassword === userPassword 
                    || enterEmail === adminEmail && enterOldPassword === adminPassword) {
                    let enterNewPassword = prompt('Please, enter your new password.');

                    if (!enterNewPassword) {
                        message = 'Canceled!';

                    } else if (enterNewPassword.length < minPasswordLength) {
                        message = 'It\'s too short password. Sorry.';

                    } else if (enterEmail === userEmail && enterNewPassword === userNewPassword 
                        || enterEmail === adminEmail && enterNewPassword === adminNewPassword) {
                        let newPasswordVerification = prompt('Please, confirm your new password.');

                        if (newPasswordVerification === enterNewPassword) {
                            message = 'You have successfully changed your password.';
                        } else if (!newPasswordVerification) {
                            message = 'Canceled!';
                        } else {
                            message = 'You wrote the wrong password.';
                        }

                    } else {
                        message = 'I don\'t know you too!';
                    }       
                }
            } 

        } else {
            message = 'Wrong password!';
        }

    } else {
        message = 'I don\'t know you!';
    }
}
alert(message);