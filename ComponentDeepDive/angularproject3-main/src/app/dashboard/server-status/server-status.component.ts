import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  enum = ['online', 'Offline', 'unknown'];
  currentStatus = this.enum[Math.floor(Math.random() * this.enum.length)];
  private interval?: ReturnType<typeof setInterval>;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.currentStatus =
        this.enum[Math.floor(Math.random() * this.enum.length)];
    }, 1000);
  }

  ngOnDestroy(): void {
      clearTimeout(this.interval)
  }
}
