import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Hero} from '../hero'

@Component({
  selector: 'hero-form',
  moduleId: module.id,
  templateUrl: 'tpl.html',
  styles: [
    `.hero-form-container {
       margin: 200px auto;
       padding: 0 20px 15px 20px;
       width: 300px;
       border: thin solid steelblue;
       border-radius: 5px;
       box-shadow: 0em 0em 0.5em 0.05em steelblue;
     }`,
  ],
})
export class HeroFormComponent {
  POWERS = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model:Hero = {
    id: 18,
    name: 'Dr IQ',
    power: this.POWERS[1],
    alterEgo: 'Chuck Overstreet',
  };

  submitted = false;

  // onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model); }
}