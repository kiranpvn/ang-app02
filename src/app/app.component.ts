import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-app02';
  t1:number=0;
  msg:string='';
  calculate(op:string){
    if ( op==="next")
      this.msg=`Next of ${this.t1} is ${this.t1+1} `
      else if (op==="square")
      this.msg=`Square of ${this.t1} is ${this.t1*this.t1} `
  }
}
