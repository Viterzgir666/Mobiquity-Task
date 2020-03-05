import casual from 'casual';
import { at, assertThat } from '../src/utils/page-factory';
import { login } from '../src/model/Constants';
import employeesList from '../src/pages/EmployeesListPage';
import employeeDetailsPage from '../src/pages/EmployeeDetailsPage';
import onEmployeesListPage from '../src/pages-verifications/EmployeesListPageVerifications';
import onEmployeeDetailsPage from '../src/pages-verifications/EmployeeDetailsPageVerifications';

const firstNameUpdate = casual.first_name;
const lastNameUpdate = casual.last_name;

describe('Positive Employee Create, Update, Delete process', () => {
    before('Login to Café Townsend with valid Username and Password.', () => {
        login();
    });

    it('Verify that User can create Employee after filling in all the required fields with valid data', () => {
        const firstNameCreate = casual.first_name;
        const lastNameCreate = casual.last_name;
        const dateCreate = casual.date();
        const emailCreate = casual.email;
        const create = [firstNameCreate, lastNameCreate, dateCreate, emailCreate];

        at(employeesList).clickCreateButton();
        at(employeeDetailsPage).setEmployeeData(firstNameCreate, lastNameCreate, dateCreate, emailCreate);
        at(employeeDetailsPage)
            .setEmployeeData(firstNameCreate, lastNameCreate, dateCreate, emailCreate)
            .clickAddButton();
        at(employeesList).openEmployeeByName(firstNameCreate, lastNameCreate);
        const currentData = at(employeeDetailsPage).getEmployeeData();
        assertThat(onEmployeeDetailsPage).inputAndCurrentInfoMatch(create, currentData);
    });

    it('Verify that User can update Employee after updating all the required fields with valid data', () => {
        const dateUpdate = casual.date();
        const emailUpdate = casual.email;
        const update = [firstNameUpdate, lastNameUpdate, dateUpdate, emailUpdate];
        at(employeeDetailsPage)
            .setEmployeeData(firstNameUpdate, lastNameUpdate, dateUpdate, emailUpdate)
            .clickUpdateButton();
        at(employeesList).openEmployeeByName(firstNameUpdate, lastNameUpdate);
        const currentData = at(employeeDetailsPage).getEmployeeData();
        assertThat(onEmployeeDetailsPage).inputAndCurrentInfoMatch(update, currentData);
    });

    it('Verify that User can delete Employee', () => {
        at(employeeDetailsPage)
            .clickDeleteButton()
            .confirmEmployeeDeleting();
        assertThat(onEmployeesListPage).removedEmployeeNotFound(firstNameUpdate, lastNameUpdate);
    });
});
