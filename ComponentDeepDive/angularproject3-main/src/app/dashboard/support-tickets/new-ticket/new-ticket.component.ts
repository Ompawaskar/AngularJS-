import { Component, ElementRef, EventEmitter, ViewChild, Output, output } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
    @ViewChild('form') form ?: ElementRef<HTMLFormElement>
    // @Output() add = new EventEmitter();
    add = output<{title: string, text: string}>();
    handleSubmit(title: string, req:string, form: HTMLFormElement){
      console.log(title, req);
      this.add.emit({title, text: req});
      this.form?.nativeElement.reset();
    }
}
