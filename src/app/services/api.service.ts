import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bookModel } from '../book-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  server_url = "https://ang-bookstall-server.onrender.com"
  // server_url = "http://localhost:3000"


  constructor(private http:HttpClient) { }

  addBookAPI(books:bookModel){
    return this.http.post(`${this.server_url}/books`,books)
  }

  getAllBooksAPI(){
    return this.http.get(`${this.server_url}/books`)
  }


  getSingleBookAPI(bookId:any){
    return this.http.get(`${this.server_url}/books/${bookId}`)
  }

  editBookAPI(book:bookModel){
    return this.http.put(`${this.server_url}/books/${book.id}`,book)
  }

  removeBookAPI(bookId:any){
    return this.http.delete(`${this.server_url}/books/${bookId}`)
  }
}
