import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

  show:boolean=false;
  show1:boolean=false;

Showtag(){
  this.show=true;
}
 


}
