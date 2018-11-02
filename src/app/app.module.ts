import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ShowAdvisorsComponent } from './show-advisors/show-advisors.component';
import { ShowQuoteComponent } from './show-quote/show-quote.component';
import { MenuComponent } from './header/menu/menu.component';
import { SearchBranchComponent } from './search-branch/search-branch.component';
import { ShowBranchComponent } from './show-branch/show-branch.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HighlightDirective } from './highlight.directive';
import { AddElementDirective } from './add-element.directive';
import { ShowLocationComponent } from './show-location/show-location.component';
import { FilterPipe } from './filter.pipe';
import { ShowPolicyDetailsComponent } from './show-policy-details/show-policy-details.component';
import { ShowHealthPolicyComponent } from './show-health-policy/show-health-policy.component';
import { DetailsComponent } from './details/details.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations:   [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ShowAdvisorsComponent,
    ShowQuoteComponent,
    MenuComponent,
    SearchBranchComponent,
    ShowBranchComponent,
    TestimonyComponent,
    LoginComponent,
    LogoutComponent,
    HighlightDirective,
    AddElementDirective,
    ShowLocationComponent,
    FilterPipe,
    ShowPolicyDetailsComponent,
    ShowHealthPolicyComponent,
    DetailsComponent,
    LifecycleComponent,
    ChildComponent
  ],
  imports:   [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers:   [HttpClient],
  bootstrap:   [LifecycleComponent],
  entryComponents:   [ShowLocationComponent]
})
export class AppModule { }
