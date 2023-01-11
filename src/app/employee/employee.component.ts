import { Component, OnInit } from '@angular/core';
import { ApiEmployeeService } from '../shared/api-employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employees !: any;
  constructor(private api: ApiEmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees() {
    this.api.getEmployees().subscribe(res => {
      console.log(res)
      this.employees = res;

    })
  }

}
