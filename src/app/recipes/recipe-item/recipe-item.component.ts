import { APIServicessRecipesService } from './../../services/api-servicess-recipes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  allData:any=[];
  constructor(private serv:APIServicessRecipesService) {
    
  }

  ngOnInit(): void {
  }
  viwe(){
    this.serv.get().subscribe((data)=>{
      console.log(data)
    })
  }
}
