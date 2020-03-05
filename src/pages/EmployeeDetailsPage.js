import BasePage from './BasePage';
import Element from '../components/Element';

export const updateButton = 'button.main-button:nth-child(1)';
const addButton = `//button[text() = 'Add']`;
export const deleteButton = '[ng-click="deleteEmployee()"]';
const backButton = '.subButton.bBack';

const field = field => `input[ng-model="selectedEmployee.${field}"]`;
export const firstNameField = `${field('firstName')}`;
export const lastNameField = `${field('lastName')}`;
export const startDateField = `${field('startDate')}`;
export const emailField = `${field('email')}`;

export default class EmployeeDetailsPage extends BasePage {
    clickUpdateButton() {
        Element.of(updateButton).click();
        return this;
    }

    clickAddButton() {
        Element.of(addButton).click();
        return this;
    }
    clickBackButton() {
        return Element.of(backButton).click();
    }

    clickDeleteButton() {
        Element.of(deleteButton).click();
        return this;
    }

    confirmEmployeeDeleting() {
        browser.acceptAlert();
        return this;
    }

    setEmployeeData(firstName, lastName, startDate, email) {
        Element.of(firstNameField).enterValue(firstName);
        Element.of(lastNameField).enterValue(lastName);
        Element.of(startDateField).enterValue(startDate);
        Element.of(emailField).enterValue(email);
        return this;
    }

    getEmployeeData() {
        return [
            Element.of(firstNameField).getAttributeValue('value'),
            Element.of(lastNameField).getAttributeValue('value'),
            Element.of(startDateField).getAttributeValue('value'),
            Element.of(emailField).getAttributeValue('value')
        ];
    }

    clearFields() {
        Element.of(firstNameField).clearField();
        Element.of(lastNameField).clearField();
        Element.of(startDateField).clearField();
        Element.of(emailField).clearField();
        return this;
    }
}
