import { Component, OnInit } from '@angular/core';
import {category} from 'src/Models/Category';
import {CatService} from '../cat.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {
  catlist : category [] =[];


  constructor(private _service : CatService ) { }

  ngOnInit(): void {
    this._service.getCategories().subscribe(data=>{this.catlist=data;
    console.log(this.catlist)
    });
  }
  delete(id:any){
    confirm("Do you really want to delete???") 
    this._service.DeleteCategory(id).subscribe();
  }
}
