import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { employee } from "../employee";

@Injectable()
class EmployeeService {
  private _url = "/assets/data/employees.json"
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<employee[]> {
    return this.http.get<employee[]>(this._url);
  }
}


export default EmployeeService
