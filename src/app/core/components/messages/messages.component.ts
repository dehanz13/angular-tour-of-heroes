import { Component } from '@angular/core';

import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.sass']
})
export class MessagesComponent {

  /* The MessagesComponent should display all messages, including the message sent by the HeroService when it fetches heroes.
  The messageService property must be public because we're going to bind to it in the template. 
  Angular only binds to public component properties. */
  constructor(public messageService: MessageService) {}


}

/** 
 * Adding a MessagesComponent that displays application messages at the bottom of the screen
 * Creating an injectable, application-wide MessageService for sending messages to be displayed
 * Injecting MessageService into the HeroService
 * Displaying a message when HeroService fetches heroes successfully 
 * */