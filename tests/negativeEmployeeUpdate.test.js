import { at, assertThat } from '../src/utils/page-factory';
import { login } from '../src/model/Constants';
import { invalidEmployee } from '../src/model/NegativeConstants';

import employeesList from '../src/pages/EmployeesListPage';
import employeeDetailsPage from '../src/pages/EmployeeDetailsPage';
import onEmployeesListPage from '../src/pages-verifications/EmployeesListPageVerifications';
import onEmployeeDetailsPage from '../src/pages-verifications/EmployeeDetailsPageVerifications';

describe('Negative Employee Update process', () => {
    before('Login to Café Townsend with valid Username and Password.', () => {
        login();
    });

    invalidEmployee.forEach(negativeCase => {
        it(`Verify that User cannot update Employee with ${negativeCase.description}`, () => {
            const index = at(employeesList).generateRandomIndex();
            at(employeesList).openRandomEmployee(index);
            at(employeeDetailsPage)
                .setEmployeeData(
                    negativeCase.firstName,
                    negativeCase.lastName,
                    negativeCase.startDate,
                    negativeCase.email
                )
                .clickUpdateButton();
            assertThat(onEmployeeDetailsPage).errorMessageShown(negativeCase.field, negativeCase.error);
            at(employeeDetailsPage).clickBackButton();
            assertThat(onEmployeesListPage)
                .mainElementsLoaded()
                .correctRedirection();
        });
    });
});
