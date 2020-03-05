export default class BaseElement {
    constructor(selector) {
        this.selector = selector;
    }

    get element() {
        return $(this.selector);
    }

    shouldBeDisplayed() {
        this.element.waitForDisplayed();
        return this.element;
    }

    shouldExist() {
        this.element.isExisting();
        return this.element;
    }

    click() {
        this.shouldBeDisplayed().click();
    }

    scrollTo() {
        this.shouldBeDisplayed().scrollIntoView();
    }

    doubleClick() {
        this.shouldBeDisplayed().doubleClick();
    }

    getText() {
        return this.shouldBeDisplayed().getText();
    }

    clearField() {
        return this.shouldBeDisplayed().clearValue();
    }

    getAttributeValue(attributeName) {
        return this.shouldExist().getAttribute(attributeName);
    }

    enterValue(text) {
        this.shouldBeDisplayed().setValue(text);
    }
}
