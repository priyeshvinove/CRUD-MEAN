import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get(environment.apiUrl)
  }
  insertData(data){
    return this.httpClient.post(environment.apiUrl+'/add',data)
  }

  getDataById(id){
    return this.httpClient.get(environment.apiUrl+'/'+id);
  }
  updateData(id,data){
    return this.httpClient.put(environment.apiUrl+'/update/'+id,data);
  }
  deleteData(id){
    return this.httpClient.delete(environment.apiUrl+'/'+id)
  }
}
