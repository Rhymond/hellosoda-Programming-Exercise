import template from './template.html';

class Modal {
  constructor() {
    this.restrict = 'E';
    this.template = template;
    this.scope = {
      score: '=',
      name: '='
    };
  }
}

export default Modal
