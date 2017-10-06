const ROOT = '#root';
const ONE_HUNDRED_PERCENT = '100%';

class DocumentStyle {
  constructor(customDocument) {
    this.document = customDocument || document;
  }

  setOneHundredPercentHeight() {
    this.document.body.style.height = ONE_HUNDRED_PERCENT;
    this.document.documentElement.style.height = ONE_HUNDRED_PERCENT;

    this.document.querySelector(ROOT).style.height = ONE_HUNDRED_PERCENT;
  }
}

export default DocumentStyle;
