import template from './template.html';

class Avatar {
    constructor() {
      this.restrict = 'E';
      this.template = template;
      this.scope = {
        person: '=',
        size: '=?'
      };
  }

  controller($scope, LoggerService) {
    $scope.logger = LoggerService;
    $scope.size = angular.isDefined($scope.size) ? $scope.size : '64';
  }

  link(scope) {
    /**
     * Log user interaction with avatar
     * @param person Person object
     */
    scope.hover = () => {
      scope.logger.log({
        message: 'User hover over an avatar',
        person_id: scope.person.id
      });
    }
  }
}

export default Avatar
