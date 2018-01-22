import Avatar from './Avatar'
import PeopleList from './PeopleList'
import Modal from './Modal'
import Score from './Score'
import Heading from './Heading'

angular.module('app.directives', [])
  .directive('avatar', () => new Avatar)
  .directive('modal', () => new Modal)
  .directive('score', () => new Score)
  .directive('heading', () => new Heading)
  .directive('peopleList', () => new PeopleList);
