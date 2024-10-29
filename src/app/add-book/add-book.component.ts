import { Component, OnInit } from '@angular/core';
import { bookModel } from '../book-model';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit{
books:bookModel = {}
allBooks:any = []
constructor(private api:ApiService, private router:Router){}

ngOnInit(): void {
  this.api.getAllBooksAPI().subscribe((result:any)=>{
    this.allBooks = result
    console.log(this.allBooks);
    
  })
}

add(){
  const existingBook = this.allBooks.find((item:any)=>item.id==this.books.id || item.name==this.books.name)  
  if(existingBook){
    alert("The book is Already Exist!!! Please Add Another")
    this.books={}
  }
  else{
    this.api.addBookAPI(this.books).subscribe({
      next:(result:any)=>{
        console.log(result);
        alert("Book Added Successfully ")
        this.router.navigateByUrl('/home')
      },
      error:(reason:any)=>{
        console.log(reason);
        
      }
    })
  }
  
}
cancel(){
this.books={}
this.router.navigateByUrl('/home')
}
}
