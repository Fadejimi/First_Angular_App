import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  //template: `
    //<app-server></app-server>
    //<app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No Server was created';
  serverName: string = 'New Server';
  serverCreated: boolean = false;
  servers = ['Testserver', 'Testserver2'];

  constructor() {
    setTimeout(() => {
        this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
      this.serverCreated = true;
      this.servers.push(this.serverName);
      this.serverCreationStatus = 'Server was created, Name is ' + this.serverName;
  }

  onUpdateServer(event: Event) {
      this.serverName = (<HTMLInputElement>event.target).value;
  }
}
