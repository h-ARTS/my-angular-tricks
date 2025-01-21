import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notifications-button',
  standalone: true,
  imports: [],
  templateUrl: './notifications-button.component.html',
  styleUrl: './notifications-button.component.scss',
})
export class NotificationsButtonComponent {
  @Input() count = 0;
}
