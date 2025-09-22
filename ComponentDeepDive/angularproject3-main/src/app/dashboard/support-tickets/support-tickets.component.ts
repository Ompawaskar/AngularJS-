import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket/ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css',
})
export class SupportTicketsComponent {
  tickets: Ticket[] = [];

  onAdd(ticket: { title: string; text: string }) {
    this.tickets.push({
      title: ticket.title,
      request: ticket.text,
      id: new Date().toString(),
      status: 'open',
    });
  }

  onCloseTicket(id: string){
    this.tickets = this.tickets.map((ticket) => {
      if(ticket.id === id){
        return {...ticket, status: 'closed'};
      }
      return ticket;
    });
  }
}
