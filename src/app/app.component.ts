import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ThemeService } from './theme.service';

interface State {
  name: string;
  code: string;
}

interface Theme {
  name: string;
  ext: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private primengConfig: PrimeNGConfig,
    private themeService: ThemeService
  ) { }

  selectedState: State | undefined;

  states: State[] = [
    { name: 'Kerala', code: 'Kerala' },
    { name: 'Arizona', code: 'Arizona' },
    { name: 'California', code: 'California' },
    { name: 'Florida', code: 'Florida' },
    { name: 'Ohio', code: 'Ohio' },
    { name: 'Washington', code: 'Washington' }
  ];

  themes: Theme[] = [
    {
      name: 'lara-light-blue',
      ext: 'png'
    },
    {
      name: 'lara-dark-blue',
      ext: 'png'
    },
    {
      name: 'lara-light-teal',
      ext: 'png'
    },
    {
      name: 'lara-dark-teal',
      ext: 'png'
    },
    {
      name: 'md-light-indigo',
      ext: 'svg'
    },
    {
      name: 'md-dark-indigo',
      ext: 'svg'
    },
    {
      name: 'bootstrap4-light-blue',
      ext: 'svg'
    },
    {
      name: 'bootstrap4-dark-blue',
      ext: 'svg'
    },
    {
      name: 'saga-blue',
      ext: 'png'
    },
    {
      name: 'vela-blue',
      ext: 'png'
    },
    {
      name: 'arya-blue',
      ext: 'png'
    }
  ];

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
  }
}
