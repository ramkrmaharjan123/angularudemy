import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
    //selector:'[app-servers]', //as attribute
    //selector:'.app-servers', // as css class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreateStatus = 'No server was created';
    serverName = '';
    serverCreated = false;
  servers = ['testServer1','testServer2'];
  constructor() { 
  
      setTimeout(() => 
                 { this.allowNewServer = true},2000);
  }

  ngOnInit() {
  }

  onServerCreate() {
      this.serverCreated = true;
      this.servers.push(this.serverName);
      this.serverCreateStatus = 'Server is created :' + this.serverName;
  }

  updateServerName(event:Event) {
      this.serverName = (<HTMLInputElement>event.target).value;
  }
}
