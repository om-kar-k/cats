import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { category } from 'src/Models/Category';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-cat-edit',
  templateUrl: './cat-edit.component.html',
  styleUrls: ['./cat-edit.component.css']
})
export class CatEditComponent implements OnInit {
  id:number;
  modifiedcategory:category;

  constructor(private _service :CatService, private activerout:ActivatedRoute,private router:Router) { }



  ngOnInit(): void {

    this.id= this.activerout.snapshot.params["id"];// route variable



      this._service.getCategoryById(this.id).subscribe(data=>

      {this.modifiedcategory=data,

      console.log(this.id)});

  }

  onSubmit(modifiedcategory:any)

  {

  return this._service.UpdateCategory(this.modifiedcategory).subscribe(data=>

    console.log(modifiedcategory)

   

    );

  }
}
