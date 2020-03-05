import casual from 'casual';
import BasePage from './BasePage';
import Element from '../components/Element';

export const editButton = '#bEdit';
export const createButton = '#bAdd';

const pickedEmployee = index => `#employee-list li:nth-child(${index})`;
const employeeList = '#employee-list li';

export const employeeName = (firstname, lastname) => `//*[text()[contains(.,'${firstname} ${lastname}')]]`;

export default class EmployeesListPage extends BasePage {
    generateRandomIndex() {
        return casual.integer(1, `${$$(employeeList).length}`);
    }
    openRandomEmployee(index) {
        Element.of(pickedEmployee(index)).scrollTo();
        Element.of(pickedEmployee(index)).doubleClick();
    }

    openEmployeeByName(firstname, lastname) {
        Element.of(employeeName(firstname, lastname)).doubleClick();
        return this;
    }

    openEmployee(index) {
        Element.of(employeeListItem(index)).doubleClick();
        return this;
    }

    clickEditButton() {
        Element.of(editButton).click();
        return this;
    }

    clickCreateButton() {
        Element.of(createButton).click();
        return this;
    }
}
