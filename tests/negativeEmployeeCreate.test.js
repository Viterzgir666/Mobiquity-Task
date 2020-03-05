import { at, assertThat } from '../src/utils/page-factory';
import { login } from '../src/model/Constants';
import { invalidEmployee } from '../src/model/NegativeConstants';

import employeesList from '../src/pages/EmployeesListPage';
import employeeDetailsPage from '../src/pages/EmployeeDetailsPage';
import onEmployeeDetailsPage from '../src/pages-verifications/EmployeeDetailsPageVerifications';

describe('Negative Employee Create process', () => {
    before('Login to Café Townsend with valid Username and Password.', () => {
        login();
        at(employeesList).clickCreateButton();
    });

    invalidEmployee.forEach(negativeCase => {
        it(`Verify that User cannot create Employee with ${negativeCase.description}`, () => {
            at(employeeDetailsPage)
                .setEmployeeData(
                    negativeCase.firstName,
                    negativeCase.lastName,
                    negativeCase.startDate,
                    negativeCase.email
                )
                .clickAddButton();
            assertThat(onEmployeeDetailsPage).errorMessageShown(negativeCase.field, negativeCase.error);
            at(employeeDetailsPage).clearFields();
        });
    });
});
