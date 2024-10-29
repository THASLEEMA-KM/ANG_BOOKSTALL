import { Component, OnInit } from '@angular/core';
import { bookModel } from '../book-model';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  p:number = 1;
  allBooks:bookModel[] = []
  searchKey:string=""
  
  constructor(private router:Router , private api:ApiService){}

  ngOnInit(): void {
    this.getAllBooks()
  }


  getAllBooks(){
    this.api.getAllBooksAPI().subscribe((result:any)=>{
      this.allBooks = result
      console.log(this.allBooks);
      
    })
  }

  removeBook(bookId:any){
    this.api.removeBookAPI(bookId).subscribe((result:any)=>{
      alert("Book Deleted")
      this.getAllBooks()
      this.router.navigateByUrl('/home')
    })
  }
}
