import {Component} from 'angular2/core';
import {HeroFormComponent} from './hero-form.component/index';

@Component({
  selector: 'my-app',
  // WARNING: do NOT use native, as it would yield style framework like bootstrap invalid
  // encapsulation: ViewEncapsulation.Native,
  template: '<hero-form></hero-form>',
  directives: [HeroFormComponent]
})
export class AppComponent {

}