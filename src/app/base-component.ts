import {MatDialog, MatSnackBar, MatSnackBarConfig} from '@angular/material';

export enum MESSAGE_TYPE {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}

export class BaseComponent {
  private DEFAULT_MESSAGE_DURATION = 5000;

  constructor(protected snackBar: MatSnackBar) {
  }

  showMessage(message: string, type: MESSAGE_TYPE = MESSAGE_TYPE.SUCCESS) {
    const config = new MatSnackBarConfig();
    config.panelClass = ['message-' + type];
    config.duration = this.DEFAULT_MESSAGE_DURATION;
    this.snackBar.open(message, 'OK', config);
  }
}
