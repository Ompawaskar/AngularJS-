import { Component } from '@angular/core';
import { DashboardItemComponent } from '../dashboard-item/dashboard-item.component';
import { NgClass } from "../../../../node_modules/@angular/common/index";

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [DashboardItemComponent, NgClass],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  currentStatus = 'online';
  constructor(){
    setInterval(() => {
      let rand = Math.random();

      if(rand > 0.5)
        this.currentStatus = 'offline'
      else if(rand == 0.5)
        this.currentStatus = 'unknown'
      else
        this.currentStatus = 'online';
    }, 2000);
  }
}
