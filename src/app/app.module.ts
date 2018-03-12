import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }          from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductTemplateComponent } from './templates/product-template/product-template.component';

import { DataService } from './services/data.service';
import { ExtraZerosPipe } from './pipes/extra-zeros.pipe';
import { RoundPricePipe } from './pipes/round-price.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductTemplateComponent,
    ExtraZerosPipe,
    RoundPricePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DataService,
    ExtraZerosPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
