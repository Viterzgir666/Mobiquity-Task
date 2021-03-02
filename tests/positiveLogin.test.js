import { at, open, assertThat } from '../src/utils/page-factory';
import loginPage from '../src/pages/LoginPage';
import { validCredentials } from '../src/model/Constants';
import onEmployeesListPage from '../src/pages-verifications/EmployeesListPageVerifications';

describe('Positive Login process', () => {
    it('Verify that User can successfully login to Café Townsend with valid Username and Password', () => {
        open(loginPage);
        at(loginPage).setCredentialsAndClickLogin(validCredentials.username, validCredentials.password);
        assertThat(onEmployeesListPage)
            .mainElementsLoaded()
            .correctUserGreeting(validCredentials.username)
            .correctRedirection();
    });
});
