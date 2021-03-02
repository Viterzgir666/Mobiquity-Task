import { at, open, assertThat } from '../utils/page-factory';
import loginPage from '../pages/LoginPage';
import onEmployeesListPage from '../pages-verifications/EmployeesListPageVerifications';
import {validCredentials} from '../model/Constants'

export function login() {
    open(loginPage);
    at(loginPage).setCredentialsAndClickLogin(validCredentials.username, validCredentials.password);
    assertThat(onEmployeesListPage)
        .mainElementsLoaded()
        .correctUserGreeting(validCredentials.username)
        .correctRedirection();
}
