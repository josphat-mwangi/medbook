import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
    
  }
   getList(){
    return[
      
      {'name':'Davido', "gender": "male", 'dob':'15/01/1993', "typeofservices": "outpatient", "Generalcomment": "first Time"},
      {'name':'Dan', "gender": "male", 'dob':'15/01/1993', "typeofservices": "outpatient", "Generalcomment": "first Time"},
    ];
  }
}
