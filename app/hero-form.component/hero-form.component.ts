import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Hero} from '../hero'

@Component({
  selector: 'hero-form',
  moduleId: module.id,
  templateUrl: 'tpl.html',
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
}