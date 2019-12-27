import { IEmployee } from "./employee";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private http: HttpClient) {}

  // private path: string = "../assets/employee.json";
  // getData(): Observable<IEmployee> {
  //   return this.http.get<IEmployee>(this.path);
  // }

  private path: string = "http://dummy.restapiexample.com/api/v1/employees";
  getData(): Observable<object[]> {
    return this.http.get<object[]>(this.path);
  }
}
