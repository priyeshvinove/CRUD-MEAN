import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EmployeeComponent } from './empoyee/employee/employee.component';

const routes: Routes = [ 
  {path:'',component:EmployeeComponent},
  {path:'add-employee',component:AddEmployeeComponent},
  {path:'edit/:id',component:EditEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
