import { Component } from '@angular/core';
import { ServerStatusComponent } from './server-status/server-status.component';
import { SupportTicketsComponent } from './support-tickets/support-tickets.component';
import { TrafficComponent } from './traffic/traffic.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ServerStatusComponent,SupportTicketsComponent,TrafficComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
