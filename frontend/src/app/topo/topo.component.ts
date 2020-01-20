import { Component, OnInit } from '@angular/core';
import { faUser,faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  faUser = faUser;
  faSignOutAlt = faSignOutAlt;
  
  constructor() { }

  ngOnInit() {
  }

}

