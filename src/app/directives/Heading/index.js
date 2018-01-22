import template from './template.html';

class Heading {
  constructor() {
    this.restrict = 'E';
    this.template = template;
    this.scope = {
      title: '@',
      icon: '@'
    };
  }
}

export default Heading
