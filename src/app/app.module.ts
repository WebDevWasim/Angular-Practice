import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { NavbarComponent } from "./navbar/navbar.component";
import { ChildComponent } from "./child/child.component";
import { Child1Component } from "./child1/child1.component";
import { PComponent } from "./p/p.component";
import { CComponent } from "./c/c.component";
import { OriginalFormValidationComponent } from "./original-form-validation/original-form-validation.component";

import { SquareRootPipe } from "./square-root.pipe";
import { MaxNumberPipe } from "./max-number.pipe";
import { SearchPipe } from "./search.pipe";
import { ExamComponent } from './exam/exam.component';
import { ExamV1Component } from './exam-v1/exam-v1.component';
import { ExamV2Component } from './exam-v2/exam-v2.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarComponent,
    ChildComponent,
    Child1Component,
    PComponent,
    CComponent,
    OriginalFormValidationComponent,
    SquareRootPipe,
    MaxNumberPipe,
    SearchPipe,
    ExamComponent,
    ExamV1Component,
    ExamV2Component
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
