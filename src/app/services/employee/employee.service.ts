import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { EmployeeModel } from 'src/app/model/employee.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class EmployeeService {

  mockUrl: string = "http://localhost:3000/employee"
  allEmployee: EmployeeModel[] = []
  currentEmployee: EmployeeModel = {
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
  constructor(
    private http: HttpClient,
    private spinner: NgxSpinnerService
  ) { }

  getAllEmployee(): Subscription {
    console.log(this.mockUrl)
    this.spinner.show()
    return this.http.get<EmployeeModel[]>(this.mockUrl).subscribe(
      (data: EmployeeModel[]) => {
        console.log(data)
        this.allEmployee = data
        setTimeout(() => {
          this.spinner.hide()
        }, 1000)
      })
  }

  deleteEmployee(id: number): Observable<EmployeeModel> {
    return this.http.delete<EmployeeModel>(
      this.mockUrl + '/' + 'delete' + '/' + id
    )
  }

  createEmployee(employee: EmployeeModel): Observable<EmployeeModel> {
    return this.http.post<EmployeeModel>
    (this.mockUrl, employee)
  }

  updateEmployee(employee: EmployeeModel): Observable<EmployeeModel> {
    return this.http.put<EmployeeModel>
      ( this.mockUrl +'update', employee)
  }

 
}
