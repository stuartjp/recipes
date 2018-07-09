import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'berk', 'https://ae01.alicdn.com/kf/HTB11qNrIXXXXXbIXFXXq6xXFXXX6/Summer-Sexy-deep-V-bra-Brand-push-up-close-adjustable-bra-A-B-cup-models-sexy.jpg' ),
    new Recipe('A test recipe', 'berk', 'https://ae01.alicdn.com/kf/HTB11qNrIXXXXXbIXFXXq6xXFXXX6/Summer-Sexy-deep-V-bra-Brand-push-up-close-adjustable-bra-A-B-cup-models-sexy.jpg' ),
    new Recipe('A test recipe', 'berk', 'https://ae01.alicdn.com/kf/HTB11qNrIXXXXXbIXFXXq6xXFXXX6/Summer-Sexy-deep-V-bra-Brand-push-up-close-adjustable-bra-A-B-cup-models-sexy.jpg' )
  ];

  constructor() { }

  ngOnInit() {
  }

}
