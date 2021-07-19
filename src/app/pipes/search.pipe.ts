import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users: any, search:any): any {
    if(search == undefined){
      return users;
    }else{
      return users.filter(user=>{
        return user.name.toLowerCase().includes(search.toLowerCase());
      })
    }
    

  }
  
  transforms(torneos: any, search:any): any {
    if(search == undefined){
      return torneos;
    }else{
      return torneos.filter(torneos=>{
        return torneos.name.toLowerCase().includes(search.toLowerCase());
      })
    }
    
  }



}
