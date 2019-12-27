import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ArithmaticComponent } from "./arithmatic/arithmatic.component";
import { ColorComponent } from "./color/color.component";
import { UserComponent } from "./user/user.component";
import { EmployeeComponent } from "./employee/employee.component";
import { StudentComponent } from "./student/student.component";
import { ParentComponent } from "./parent/parent.component";
import { Parent1Component } from "./parent1/parent1.component";
import { ComponentInteractionComponent } from "./component-interaction/component-interaction.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ServicesComponent } from "./services/services.component";
import { AdminsComponent } from "./admins/admins.component";
import { MembersComponent } from "./members/members.component";
import { FormValidationComponent } from "./form-validation/form-validation.component";
import { PipeComponent } from "./pipe/pipe.component";
import { PComponent } from "./p/p.component";
import { HttpComponent } from "./http/http.component";
import { ExamComponent } from "./exam/exam.component";
import { ExamV1Component } from "./exam-v1/exam-v1.component";
import { ExamV2Component } from "./exam-v2/exam-v2.component";

const routes: Routes = [
  { path: "", redirectTo: "resister", pathMatch: "full" },
  { path: "color", component: ColorComponent },
  { path: "resister", component: ExamComponent },
  { path: "view1", component: ExamV1Component },
  { path: "view2", component: ExamV2Component },
  { path: "arithmatic", component: ArithmaticComponent },
  { path: "user", component: UserComponent },
  { path: "form-validation", component: FormValidationComponent },
  { path: "employee", component: EmployeeComponent },
  { path: "student", component: StudentComponent },
  {
    path: "component-interaction",
    component: ComponentInteractionComponent,
    children: [
      { path: "", redirectTo: "parent", pathMatch: "full" },
      { path: "parent", component: ParentComponent },
      { path: "child", component: Parent1Component }
    ]
  },
  {
    path: "services",
    component: ServicesComponent,
    children: [
      { path: "", redirectTo: "admins", pathMatch: "full" },
      { path: "admins", component: AdminsComponent },
      { path: "members", component: MembersComponent }
    ]
  },
  { path: "life-cycle-hook", component: PComponent },
  { path: "pipe", component: PipeComponent },
  { path: "http", component: HttpComponent },
  {
    path: "lazy",
    // loadChildren: "./lazy/lazy.module#LazyModule"

    loadChildren: () => import("./lazy/lazy.module").then(obj => obj.LazyModule)
  },

  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// Declaration of all Routing Components
export const routingComponents = [
  ArithmaticComponent,
  ColorComponent,
  UserComponent,
  EmployeeComponent,
  StudentComponent,
  ParentComponent,
  Parent1Component,
  PageNotFoundComponent,
  ComponentInteractionComponent,
  ServicesComponent,
  AdminsComponent,
  MembersComponent,
  FormValidationComponent,
  PipeComponent,
  HttpComponent
];
