'use strict';

angular.module('app.controllers', [])
  .controller('PeopleController', PeopleController);

function PeopleController($scope, $http, loggerService) {
  loggerService.log({
    message: 'User is watching People list'
  });

  /**
   * Get People data from Server
   */
  $http.get('/api/people').then(function (response) {
    $scope.people = response.data.people;
  });

  /**
   * Simply close the modal
   */
  $scope.closeModal = function () {
    $scope.modal = false;
  };

  /**
   * Open person Card
   * @param index person array index
   */
  $scope.viewPerson = function (index) {
    $scope.modal = true;
    $scope.person = $scope.people[index];

    loggerService.log({
      message: 'User selected an user card',
      person_id: $scope.person.id
    })
  };

  /**
   * Log user interaction with avatar
   * @param person Person object
   */
  $scope.hoverAvatar = function (person) {
    loggerService.log({
      message: 'User hover over an avatar',
      person_id: person.id
    })
  };

  /**
   * Array Required for rendering social network data
   * @type {{socialName: {fields: [*], icon: string}}}
   */
  $scope.social = {
    twitter: {
      fields: [
        'username',
        'account_age',
        'following',
        'followers'
      ],
      icon: 'twitter'
    },
    facebook: {
      fields: [
        'id',
        'account_age',
        'friends'
      ],
      icon: 'facebook-f'
    }
  }
}

PeopleController.$inject = ['$scope', '$http', 'loggerService'];
