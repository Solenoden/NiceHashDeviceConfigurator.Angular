import { Component, OnInit } from '@angular/core';
import {ChangeLog} from '../../models/ChangeLog';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  changeLogs: ChangeLog[] = [
    new ChangeLog('1.0.0', '27 Apr 2020', ['Upload your miner\'s config file.', 'Enable/Disable algorithms for each GPU'], []),
    new ChangeLog('1.1.0', '22 August 2020', ['Created About page', 'Enabling/Disabling an algorithm for one GPU enables/disables the algorithm for the rest.'], [])
  ];

  constructor() { }

  ngOnInit() {
  }

}
