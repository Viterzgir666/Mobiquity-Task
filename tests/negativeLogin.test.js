import { at, open, assertThat } from '../src/utils/page-factory';
import loginPage from '../src/pages/LoginPage';
import onLoginPage from '../src/pages-verifications/LoginPageVerifications';
import { invalidCredentials } from '../src/model/NegativeConstants';

describe('Negative Login process', () => {
    invalidCredentials.forEach(negativeCase => {
        it(`Verify that User cannot login to Café Townsend with ${negativeCase.description}`, () => {
            open(loginPage);
            at(loginPage).setCredentialsClickLogin(negativeCase.username, negativeCase.password);
            assertThat(onLoginPage).errorMessageShown(negativeCase.field, negativeCase.error);
            at(loginPage).clearFields();
        });
    });
});
