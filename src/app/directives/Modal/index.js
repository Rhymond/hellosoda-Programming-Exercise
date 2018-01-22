import template from './template.html';

class Modal {
    constructor() {
      this.restrict = 'E';
      this.template = template;
      this.transclude = true
      this.scope = {
        model: '=',
        onClose: '&'
      };
  }
}

export default Modal
