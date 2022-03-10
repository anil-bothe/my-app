import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import EmployeeService from '../services/employee';

@Component({
  selector: '.test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  constructor(private _employees: EmployeeService) { }

  @Output("childMsg") public errMsg = new EventEmitter();
  public employees = [];

  ngOnInit(): void {
    this._employees.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  deleteItem(index) {
    this.employees.splice(index, 1);
  }

  appendItem(form: NgForm){
    let emp = this.employees.find(item => item.id == form.value.id)
    if (emp !== undefined){
      this.errMsg.emit("User already exists!")
      return
    }
    this.employees.push(form.value);
    this.errMsg.emit("")
  }
}
