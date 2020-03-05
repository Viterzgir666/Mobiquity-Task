import casual from 'casual';
import { at, open, assertThat } from '../utils/page-factory';
import loginPage from '../pages/LoginPage';
import onEmployeesListPage from '../pages-verifications/EmployeesListPageVerifications';

export const randomFirstName = casual.first_name;
export const randomLastName = casual.last_name;
export const randomEmail = casual.email;
export const randomDate = casual.date();

export const validCredentials = {
    username: 'Luke',
    password: 'Skywalker'
};
export function login() {
    open(loginPage);
    at(loginPage).setCredentialsClickLogin(validCredentials.username, validCredentials.password);
    assertThat(onEmployeesListPage)
        .mainElementsLoaded()
        .correctUserGreeting(validCredentials.username)
        .correctRedirection();
}
