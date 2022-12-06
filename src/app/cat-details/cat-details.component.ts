import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { category } from 'src/Models/Category';
import {CatService} from '../cat.service';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css']
})
export class CatDetailsComponent implements OnInit {

  constructor(private _service: CatService , private router: Router, private active: ActivatedRoute ){}
  Id:number ;
  currentcategory : category;
  ngOnInit(): void {
    this.Id =  this.active.snapshot.params["id"];
    console.log(this.Id);
    this._service.getCategoryById(this.Id).subscribe(data=>
      {
        this.currentcategory=data;
        console.log(this.currentcategory)
      }
      );
  }

}
