import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';

import { Employee, User } from '../../static/models/models';
import {Router} from '@angular/router';
import { AppComponent } from '../../app.component';
import 'rxjs/add/operator/map';
import { AuthenticationService } from '../services/authentication.service';


@Injectable()
export class DataService {
  private readonly API_URL = 
  'https://djangular-rest.herokuapp.com/api/tickets/';

  dataChangeUser: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  dataChange: BehaviorSubject<Employee[]> = new BehaviorSubject<Employee[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;


  user_get: User[];
  selectedEmployee : Employee;
  employeeList : Employee[];


  constructor (private http: Http, public router: Router, public af: AuthenticationService) {}

  get data_users(): User[] {
    return this.dataChangeUser.value;
  }

  get data(): Employee[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  getUser(email){
    this.http.get('https://djangular-rest.herokuapp.com/api/accounts/by/' + email + '/')
    
 
    .map((data : Response) =>{
      return data.json()
    }).toPromise().then(x => {
      this.user_get = x;
      console.log(x.username)
      console.log(x)
      this.user_get = x
      console.log(this.user_get)
      this.af.authenticated = true;

    })
  }


  /** CRUD METHODS */
  getEmployeeList(){
    this.http.get('https://djangular-rest.herokuapp.com/api/tickets/')
    
    .map((data : Response) =>{
      return data.json() as Employee[];
    }).toPromise().then(x => {
      this.employeeList = x;
      console.log(this.employeeList);
    })
  }
 
  


  postLoggin(emp : Employee){
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('https://djangular-rest.herokuapp.com/api/accounts/login/', body,requestOptions).map(x => x.json());
    
    
  }


    // ADD, POST METHOD
    postEmployee(emp : Employee){
      var body = JSON.stringify(emp);
      var headerOptions = new Headers({'Content-Type':'application/json'});
      var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
      
     
      return this.http.post('https://djangular-rest.herokuapp.com/api/tickets/create/', body,requestOptions).map(x => x.json());
    }
  
      // UPDATE, PUT METHOD
      putEmployee(id, emp) {
        var body = JSON.stringify(emp);
        var headerOptions = new Headers({ 'Content-Type': 'application/json' });
        var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
        return this.http.put('https://djangular-rest.herokuapp.com/api/tickets/' + id + '/edit/',
          body,
          requestOptions).map(res => res.json());
      }
  
    // DELETE METHOD
    deleteEmployee(id: number) {
          return this.http.delete('https://djangular-rest.herokuapp.com/api/tickets/' + id + '/delete/').map(res => res.json());
        }



}













