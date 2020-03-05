import BasePage from './BasePage';
import Element from '../components/Element';

export const userNameField = 'input[type="text"]';
export const passwordField = 'input[type="password"]';
export const loginButton = 'button.main-button';

export default class LoginPage extends BasePage {
    open() {
        super.open('/');
        return this;
    }

    enterUsername(username) {
        Element.of(userNameField).enterValue(username);
        return this;
    }

    enterPassword(password) {
        Element.of(passwordField).enterValue(password);
        return this;
    }

    clickLoginButton() {
        Element.of(loginButton).click();
        return this;
    }

    setCredentialsClickLogin(username, password) {
        this.enterUsername(username)
            .enterPassword(password)
            .clickLoginButton();
        return this;
    }
    clearFields() {
        Element.of(userNameField).clearField();
        Element.of(passwordField).clearField();
        return this;
    }
}
