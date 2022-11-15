import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule } from'@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditFormComponent } from './pages/edit-form/edit-form.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    EditFormComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
