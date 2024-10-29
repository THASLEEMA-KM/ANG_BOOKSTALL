import { Component, OnInit } from '@angular/core';
import { bookModel } from './book-model';
import { Router } from '@angular/router';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bookStall';

  allBooks:bookModel[] = []

  constructor(private router:Router , private api:ApiService){}

  ngOnInit(): void {
    this.getAllBooks()
  }

  addbook(){
    this.router.navigateByUrl('/books')
  }

  getAllBooks(){
    this.api.getAllBooksAPI().subscribe((result:any)=>{
      this.allBooks = result
      console.log(this.allBooks);
      
    })
  }
}

