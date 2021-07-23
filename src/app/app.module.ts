import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreditCardModule } from './credit-card/credit-card.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CreditCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
