import { Component, OnInit } from '@angular/core';
import { bookModel } from '../book-model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit{

books:bookModel = {}

// constructor
constructor(private api : ApiService , private route : ActivatedRoute , private router : Router){}

ngOnInit(): void {
  this.route.params.subscribe((result:any)=>{
     console.log(result);
     const {id} = result
     this.getBookDetails(id)
  })
}

getBookDetails(bookId:any) {
  
this.api.getSingleBookAPI(bookId).subscribe((result:any)=>{
  this.books = result
  console.log(result);
})
}

update(){
  this.api.editBookAPI(this.books).subscribe((result:any)=>{
    alert("Updated Successfully")
    this.router.navigateByUrl('/home')

  })
}

cancel(bookId:any){
 this.getBookDetails(bookId)
 this.router.navigateByUrl('/home')
}

}
