import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private apiservice:ApiService) { }
  blogs:any =[]
// intilize on a data while opening
  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.apiservice.getblogList().subscribe(res=>{
      this.blogs = res
    })
  }

  editblog(data:any, id:any){
      this.apiservice.updateblog(data,id).subscribe(res=>{
        this.blogs = res
    })
  }

  deleteblog(id:any){
    this.apiservice.deleteblog(id).subscribe(res=>{
        this.blogs = res
      })
    }

    
 
    
  }


