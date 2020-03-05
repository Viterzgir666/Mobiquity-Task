import BaseElement from './BaseElement';

export default class Element extends BaseElement {
    static of(value) {
        return new Element(value);
    }

    shouldIncludeText(text) {
        expect(this.getText()).to.have.string(text);
    }

    shouldHaveAttribute(attributeName, text) {
        expect(this.getAttributeValue(attributeName)).to.have.string(text);
    }

    shouldNotHaveAttribute(attributeName, text) {
        expect(this.getAttributeValue(attributeName)).to.not.have.string(text);
    }

    doesntExist() {
        expect(this.element.isExisting()).to.equal(false);
    }
}
