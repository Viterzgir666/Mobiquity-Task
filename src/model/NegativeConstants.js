import casual from 'casual';

import { userNameField, passwordField } from '../pages/LoginPage';
import { firstNameField, lastNameField, startDateField, emailField } from '../pages/EmployeeDetailsPage';
import { validCredentials, randomFirstName, randomDate, randomEmail, randomLastName } from './Constants';

export const emptyError = 'ng-invalid-required';
const invalidError = 'ng-valid-required';

const randomPassword = casual.password;

export const invalidCredentials = [
    {
        description: 'empty Username and Password fields',
        username: '',
        password: '',
        field: userNameField,
        error: emptyError
    },
    {
        description: 'empty Username and valid Password',
        username: '',
        password: validCredentials.password,
        field: userNameField,
        error: emptyError
    },
    {
        description: 'valid Username and empty Password',
        username: validCredentials.username,
        password: '',
        field: passwordField,
        error: emptyError
    },
    {
        description: 'invalid Username and valid Password',
        username: randomFirstName,
        password: validCredentials.password,
        field: userNameField,
        error: invalidError
    },
    {
        description: 'valid Username and invalid Password',
        username: validCredentials.username,
        password: randomPassword,
        field: passwordField,
        error: invalidError
    },
    {
        description: 'invalid Username and Password fields',
        username: randomFirstName,
        password: randomPassword,
        field: userNameField,
        error: invalidError
    }
];

export const invalidEmployee = [
    {
        description: 'all required fields empty',
        firstName: '',
        lastName: '',
        startDate: '',
        email: '',
        field: firstNameField,
        error: emptyError
    },
    {
        description: 'empty First Name and valid Last Name, Start Date, Email fields',
        firstName: '',
        lastName: randomLastName,
        startDate: randomDate,
        email: randomEmail,
        field: firstNameField,
        error: emptyError
    },
    {
        description: 'valid First Name, Start Date and Email fields and empty Last Name',
        firstName: randomFirstName,
        lastName: '',
        startDate: randomDate,
        email: randomEmail,
        field: lastNameField,
        error: emptyError
    },
    {
        description: 'valid First Name, Last Name and Email fields and empty Start Date',
        firstName: randomFirstName,
        lastName: randomLastName,
        startDate: '',
        email: randomEmail,
        field: startDateField,
        error: emptyError
    },
    {
        description: 'valid First Name, Last Name and Start Date fields and empty Email',
        firstName: randomFirstName,
        lastName: randomLastName,
        startDate: randomDate,
        email: '',
        field: emailField,
        error: emptyError
    },
    {
        description: 'filled in First and Last Name fields, valid Start date and invalid Email',
        firstName: randomFirstName,
        lastName: randomLastName,
        startDate: randomDate,
        email: '@gmail.com',
        field: emailField,
        error: invalidError
    }

    /*
    {
        // at the moment of writing the autotest, this particular case doesn't cause the error, 
        // the Employee can be successfully UPDATED, if all the fields are filled in with valid data, 
        // and Date field contains invalid data
        description: 'filled in First and Last Name fields, invalid Start date and valid Email',
        firstName: randomFirstName,
        lastName: randomLastName,
        startDate: '2019',
        email: randomEmail,
        field: startDateField,
        error: invalidError
    }
    */
];
