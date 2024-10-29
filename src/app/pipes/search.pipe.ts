import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allBooks:any[],searchKey:string): any[] {
    const result:any = []

    if(!allBooks || searchKey==""){
      return allBooks
    }else{
      allBooks.forEach((item:any)=>{
        if(item['name'].toLowerCase().includes(searchKey.toLowerCase()) || item['author'].toLowerCase().includes(searchKey.toLowerCase()) )
          {
          result.push(item)
          }
          // if(item['genre'].toLowerCase().includes(searchKey.toLowerCase()))
          //   {
          //   result.push(item)
          //   }
      })
    }
    return result
  }

}
