import BasePageVerifications from './BasePageVerifications';
import Element from '../components/Element';
import { createButton, editButton } from '../pages/EmployeesListPage';
import { deleteButton } from '../pages/EmployeeDetailsPage';
import { employeeName } from '../pages/EmployeesListPage';

const userGreeting = '#greetings';
const employeesList = '.main-view-container';
const logoutButton = 'p[ng-click="logout()"]';

export default class EmployeesListPageVerifications extends BasePageVerifications {
    correctRedirection() {
        expect(browser.getUrl()).to.not.have.string('login');
        expect(browser.getUrl()).to.have.string('employees');
    }

    correctUserGreeting(username) {
        Element.of(userGreeting).shouldIncludeText(username);
        return this;
    }

    mainElementsLoaded() {
        Element.of(employeesList).shouldBeDisplayed();
        Element.of(logoutButton).shouldBeDisplayed();
        Element.of(createButton).shouldBeDisplayed();
        Element.of(editButton).shouldBeDisplayed();
        Element.of(deleteButton).shouldBeDisplayed();
        return this;
    }
    removedEmployeeNotFound(firstname, lastname) {
        Element.of(employeeName(firstname, lastname)).doesntExist();
        return this;
    }
}
