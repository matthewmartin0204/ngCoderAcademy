import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { ColorComponent } from './components/color/color.component';
import { DuckgooseComponent } from './components/duckgoose/duckgoose.component';
import { ServiceExampleComponent } from './components/service-example/service-example.component';
import { MyServiceService } from './services/my-service.service'

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ColorComponent,
    DuckgooseComponent,
    ServiceExampleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
