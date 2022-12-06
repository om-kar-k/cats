import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { category } from 'src/Models/Category';
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CatService {
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
url : string = "http://localhost:52692/api/category";

  constructor(private http:HttpClient) { }

  getCategories() : Observable<any>
  {
    return this.http.get<any>(this.url);
  }
 getCategoryById(id : number) : Observable<any>
 {
  return this.http.get<any>(`${this.url}/${id}`);
 }
 UpdateCategory( cat:category): Observable<category> {

  return this.http.put<category>(this.url+"/"+ cat.id,cat,this.httpOptions).pipe(catchError(this.handleError));

}
AddCategory(newcategory:category):Observable<any>
  {
    return this.http.post<any>(this.url,newcategory);
  }
  DeleteCategory(id:Number) : Observable<any>{
    return this.http.delete<any>(this.url+ "/" + id )
  }
handleError(error:HttpErrorResponse){

  let errorMessage="";

  errorMessage=error.status +'\n'+error.statusText+'\n'+error.error;

  alert(errorMessage);

  return throwError(errorMessage);

}
}
