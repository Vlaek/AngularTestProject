import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MyCalculatorModule } from './calculator/my-calculator.module';
import { AppComponent } from './app.component';
import { MyNavigation } from './components/navigation/navigation.component';
import { MyEmptyPage } from './components/empty-route/empty-route.component';

@NgModule({
  declarations: [AppComponent, MyNavigation, MyEmptyPage],
  imports: [BrowserModule, AppRoutingModule, MyCalculatorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
