import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatService } from '../cat.service';
import { category } from 'src/Models/Category';

@Component({
  selector: 'app-cat-add',
  templateUrl: './cat-add.component.html',
  styleUrls: ['./cat-add.component.css']
})
export class CatAddComponent implements OnInit {
  newcategory:category={id:2,catname:""};
    constructor(private _service:CatService,private router:Router) { }
  
    ngOnInit(): void {
    }
  
    onSubmit(form:any)
    {
      this.newcategory=form.value;
      this._service.AddCategory(this.newcategory).subscribe(data=>
        
      console.log(this.newcategory));
      this.router.navigateByUrl("catlist");
      }
    }
