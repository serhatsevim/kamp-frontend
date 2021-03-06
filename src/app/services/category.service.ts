import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
	
  apiUrl = "https://localhost:44134/api/categories/getall";  
  constructor(private httpClient:HttpClient) { }
  
  getCategories():Observable<ListResponseModel<Category>>{
	return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);
  }	 
}
