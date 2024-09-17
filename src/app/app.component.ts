import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { es } from '../assets/i18n/es';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rootConfig';
  constructor(private _config: PrimeNGConfig) {
    const lang = es;
    this._config.setTranslation(lang);
  }
}
