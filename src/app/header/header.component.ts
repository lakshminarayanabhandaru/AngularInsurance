import { Component, OnInit } from '@angular/core';
import { PageLink } from '../footer/pagelink';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  majHeader: string;
  logo: string;
  linkText: string = 'Login';
  links: PageLink[];
  constructor() {
    this.majHeader = 'Insurance Company';
    this.logo = 'assets/images/logo.JPG';
    this.links = [
    { linkText: 'Products', linkStyle: 'nav-link', linkRef: 'products' },
    { linkText: 'History', linkStyle: 'nav-link', linkRef: 'history' },
    { linkText: 'Advisors', linkStyle: 'nav-link', linkRef: 'advisors' },
    { linkText: 'Get Quote', linkStyle: 'nav-link', linkRef: 'quote' },
    { linkText: 'Branches', linkStyle: 'nav-link', linkRef: 'branches' }
  ];
  }

  ngOnInit() {
  }

}
