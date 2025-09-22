import { Component } from '@angular/core';
import { ControlComponent } from "../../../ui/control/control.component";
import { ButtonComponent } from "../../../ui/button/button.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

}
