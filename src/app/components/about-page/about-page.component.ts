import { Component, OnInit } from '@angular/core';
import {ChangeLog} from '../../models/ChangeLog';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  changeLogs: ChangeLog[] = [
    new ChangeLog('1.2.0', '6 December 2020', ['Added a setting so that the user can decide if they want to perform actions for all GPUs or not.', 'Added support for overclocking.', 'Algorithm names are now displayed instead of IDs for a better user experience.'], ['Fixed device_settings.json not parsing correctly for certain cards.']),
    new ChangeLog('1.1.0', '22 August 2020', ['Created About page.', 'Enabling/Disabling an algorithm for one GPU enables/disables the algorithm for the rest.'], []),
    new ChangeLog('1.0.0', '27 Apr 2020', ['Upload your miner\'s config file.', 'Enable/Disable algorithms for each GPU.'], []),
  ];

  constructor() { }

  ngOnInit() {
  }

}
