import BasePageVerifications from './BasePageVerifications';
import Element from '../components/Element';
import { emptyError } from '../model/NegativeConstants';

const invalidErrorMessage = '.error-message.ng-binding';
const invalidUsernameOrPassword = 'Invalid username or password';

export default class LoginPageVerifications extends BasePageVerifications {
    errorMessageShown(field, error) {
        error == emptyError
            ? `${Element.of(invalidErrorMessage).shouldHaveAttribute('class', 'ng-hide')}`
            : `${Element.of(invalidErrorMessage).shouldIncludeText(invalidUsernameOrPassword)}`;
        Element.of(field).shouldHaveAttribute('class', error);
    }
}
