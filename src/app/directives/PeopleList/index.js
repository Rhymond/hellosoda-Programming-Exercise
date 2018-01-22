import template from './template.html'

class PeopleList {
  constructor() {
    this.restrict = 'E';
    this.template = template;
    this.scope = {
      people: '=',
      view: '&',
    }
  }

  link(scope) {
    scope.viewPerson = (person) => {
      scope.view({ person: person })
    }
  }
}

export default PeopleList
