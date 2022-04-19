import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CommentsComponent } from './components/comments/comments.component';
import { DisplayDataComponent } from './components/display-data/display-data.component';
import { DataModalComponent } from './Modals/data-modal/data-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    CarDetailsComponent,
    CommentsComponent,
    DisplayDataComponent,
    DataModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatCardModule,
    NgbModule,
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
