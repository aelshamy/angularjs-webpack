import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.config';
import home from '../modules/home';
console.log(home);

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/aelshamy/angularjs-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [home,  uirouter])
  .config(routing)
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;