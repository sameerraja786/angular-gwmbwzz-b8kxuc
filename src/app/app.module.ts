import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StudentModule } from './student/student.module';
import { NgifModule } from './ngif/ngif.module';
import { NgifelseModule } from './ngifelse/ngifelse.module';
import { NgifthenModule } from './ngifthen/ngifthen.module';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { CardsComponent } from './cards/cards.component';
import { PipeComponent } from './pipe/pipe.component';
import { MyTitlePipe } from './my-title.pipe';
import { RouterComponent } from './router/router.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { StudentLoginComponent } from './student-login/student-login.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { TeacherLogin2Component } from './teacher-login2/teacher-login2.component';
import { JsondataComponent } from './jsondata/jsondata.component';
import { AdminRoutingModule } from './admin_Module/admin-routing/admin-routing.module';
import { GaurdCanactiveGuard } from './guardExample/gaurd-canactive.guard';
import { PostalComponent } from './SERVICE/postal/postal.component';
import { PostalserviceService } from './SERVICE/postalservice.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StudentModule,
    NgifModule,
    NgifelseModule,
    NgifthenModule,
    FontAwesomeModule,
    AppRoutingModule,
    AdminRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NgswitchComponent,
    CardsComponent,
    PipeComponent,
    MyTitlePipe,
    RouterComponent,
    StudentLoginComponent,
    TeacherLoginComponent,
    TeacherLogin2Component,
    JsondataComponent,
    PostalComponent,
  ],
  bootstrap: [AppComponent],
  providers: [GaurdCanactiveGuard, PostalserviceService, HttpClient],
})
export class AppModule {}
