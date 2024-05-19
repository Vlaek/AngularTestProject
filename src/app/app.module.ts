import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyEmptyPage } from './features/components/empty-route/empty-route.component';
import { MyNavigation } from './features/components/navigation/navigation.component';

@NgModule({
  declarations: [AppComponent, MyNavigation, MyEmptyPage],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
