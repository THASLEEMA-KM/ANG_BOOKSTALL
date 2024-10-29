import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{

books:any={}

constructor(private api :ApiService , private route : ActivatedRoute , private router :Router){}

ngOnInit(): void {
  this.route.params.subscribe((result:any)=>{
    const {id} = result
    console.log(id);
    this.getBookDetails(id)
    
  })
}

getBookDetails(bookId:any) {
  
  this.api.getSingleBookAPI(bookId).subscribe((result:any)=>{
    this.books = result
    console.log(result);
  })
  }

  subscribe(){
    alert("Subscribed")
    this.router.navigateByUrl('/home')
  }
  backHome(){
    this.router.navigateByUrl('/home')
  }

}
