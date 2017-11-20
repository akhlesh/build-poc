import {Component} from '@angular/core';
import { getName, isString } from 'common';

@Component({
    selector: 'test',
    template: '<h1>{{msg}}</h1>'
})
export class TestComponent{
  msg: string = 'hello test';

  ngOnInit(){
    this.msg =  isString(this.msg) ? getName(this.msg) : 'nothing';
  }
}