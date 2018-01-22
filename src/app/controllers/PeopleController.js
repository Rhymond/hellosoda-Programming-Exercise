class PeopleController {
  constructor($scope, $http, LoggerService) {
    this.http = $http;
    this.logger = LoggerService;

    this.logger.log({
      message: 'User is watching People list'
    });

    /**
     * Get People data from Server
     */
    $http.get(process.env.API_URL + '/api/people')
      .then(response => {
        this.people = response.data.people;
      });

    /**
     * Array Required for rendering social network data
     * @type {{socialName: {fields: [*], icon: string}}}
     */
    this.social = {
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

  /**
   * Close the modal
   */
  closeModal() {
    this.modal = false;
  };

  /**
   * Open person Card
   * @param index person array index
   */
  setPerson(person) {
    this.logger.log({
      message: 'User selected an user card',
      person_id: person.id
    });

    this.modal = true;
    this.person = person;
  };
}

PeopleController.$inject = ['$scope', '$http', 'LoggerService'];

export default PeopleController
