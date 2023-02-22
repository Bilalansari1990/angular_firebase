import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Page404Component } from './page404/page404.component';
import { LoginComponent } from './auth/login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarModule,
} from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';

import { CreateComponent } from './create/create.component';
import { ListStuedentComponent } from './list-stuedent/list-stuedent.component';
import { EditStuedentComponent } from './edit-stuedent/edit-stuedent.component';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './enviorment/environment';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    LoginComponent,
    CreateComponent,
    ListStuedentComponent,
    EditStuedentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule,
    RouterModule.forRoot([]),
    MatExpansionModule,
    MatListModule,
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } },
  ],
  bootstrap: [AppComponent],
  exports: [Page404Component, LoginComponent],
})
export class AppModule {}
