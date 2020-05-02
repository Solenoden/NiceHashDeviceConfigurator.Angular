import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Device} from '../../models/Device';

@Component({
  selector: 'app-gpu-settings-list-sidebar',
  templateUrl: './gpu-settings-list-sidebar.component.html',
  styleUrls: ['./gpu-settings-list-sidebar.component.scss']
})
export class GpuSettingsListSidebarComponent implements OnInit {
  @Input('device') device: Device;

  @Output('onSelect') onSelect = new EventEmitter<number>();

  selectedGPU: number = 0;

  constructor() { }

  ngOnInit() {
    this.selectGPU(0);
  }

  selectGPU(index) {
    this.selectedGPU = index;

    this.onSelect.emit(index);
  }

  getGpuItemStyleClasses(index) {
    let styleClasses = 'gpu-item';

    if (index === this.selectedGPU) {
      styleClasses = styleClasses + ' selected';
    }

    return styleClasses;
  }

}
