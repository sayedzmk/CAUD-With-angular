import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/Recipes';
import { APIServicessService } from './api-servicess.service';

@Injectable({
  providedIn: 'root'
})
export class APIServicessRecipesService  extends APIServicessService<Recipe>  {

  constructor(public http:HttpClient) { 
    super("https://fir-afa02-default-rtdb.firebaseio.com/recipes.json",http)
  }
}
