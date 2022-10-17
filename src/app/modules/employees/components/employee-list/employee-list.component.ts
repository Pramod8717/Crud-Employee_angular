import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { EmployeeModel } from '../../../../model/employee.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  constructor(
    public employeeService: EmployeeService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    console.log('')
    this.employeeService.getAllEmployee()
  }

  deleteEmployee(id: number) {
    console.log(id)
;
    this.employeeService.deleteEmployee(id).subscribe(
      (employee: EmployeeModel) => {
        this.employeeService.getAllEmployee()
        this.toastrService.error('Employee deleted successfully', 'Employee CRUD')
      }
    )
  }

  editEmployee(employee: EmployeeModel) {
    this.employeeService.currentEmployee = Object.assign({}, employee)
  }
}