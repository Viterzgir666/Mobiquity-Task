import BasePageVerifications from './BasePageVerifications';
import Element from '../components/Element';

export default class EmployeeDetailsPageVerifications extends BasePageVerifications {
    inputAndCurrentInfoMatch(input, currentData) {
        expect(input).to.have.members(currentData);
    }

    errorMessageShown(field, error) {
        const proceedButton = 'button[type="submit"]';
        Element.of(field).shouldHaveAttribute('class', error);
        Element.of(proceedButton).shouldHaveAttribute('ng-disabled', 'true');
    }
}
