import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsComponent } from './news/news.component';
import { HttpService } from './services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
  ],
  providers: [
    HttpService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
