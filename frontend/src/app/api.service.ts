import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})


export class ApiService {
  apiUrl:String='api';

  // apiUrl:String = 'http://localhost:8524/api'

 constructor(private http :HttpClient) { }

 //to fetch all data list
getblogList(){
 return this.http.get(`${this.apiUrl}/bloglist`)
}

// to delete student
deleteblog(id:any){
 return this.http.delete(`${this.apiUrl}/blog/${id}`)
}

// to add new student 

addblog(data:any){
 return this.http.post(`${this.apiUrl}/blog`, data)

}


// to update existing blog
updateblog(data:any, id:any){
 return this.http.put(`${this.apiUrl}/blog`, {data,id})

}


// to fetch data of a single blog

getSingleblog(id:any){
 return this.http.get(`${this.apiUrl}/blog/${id}`)
}



}
