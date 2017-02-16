/*@ngInject*/
export default class HomeController {
  constructor(RandomNames) {
    this.name = 'World';
     this.random = RandomNames;
  }

  changeName() {
    this.name = 'angular-tips';
  }

   randomName() {
    this.name = this.random.getName();
  }
}