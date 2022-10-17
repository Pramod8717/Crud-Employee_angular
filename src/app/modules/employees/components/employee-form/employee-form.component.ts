import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  acceptTermsAndCondition: boolean = false

  constructor(
    public employeeService: EmployeeService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  save(employee: EmployeeModel) {
    console.log(employee)
    if (employee.id == 0) {
      console.log('CREATE EMPLOYEE')
      this.createEmployee(employee)
    } else {
      console.log('UPDATE EMPLOYEE')
      this.updateEmployee(employee)
    }
  }

  createEmployee(currentEmployee: EmployeeModel) {
    this.employeeService.createEmployee(currentEmployee).subscribe(
      (currentEmployee: EmployeeModel) => {
        this.employeeService.getAllEmployee()
        this.clear()
        this.toastrService.success('Employee created successfully', 'Employee CRUD')
      }
    )
  }

  updateEmployee(currentEmployee: EmployeeModel) {
    this.employeeService.updateEmployee(currentEmployee).subscribe(
      (currentEmployee: EmployeeModel) => {
        this.employeeService.getAllEmployee()
        this.clear()
        this.toastrService.info('Employee updated successfully', 'Employee CRUD')
      }
    )
  }

  clear() {
    this.employeeService.currentEmployee = {
      firstName: '',
      lastName: '',
      address: '',
      panCard: '',
      dateOfBirth: '',
      hobbies: '',
      gender: '',
      familyMemberDetails: '',
      id: 0
    }
  }
}