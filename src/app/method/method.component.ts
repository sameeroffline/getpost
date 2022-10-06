import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Method } from './method.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-method',
  templateUrl: './method.component.html',
  styleUrls: ['./method.component.css']
})
export class MethodComponent implements OnInit {

   inputForm!: FormGroup;

  details: any;
  search : any;

  model : Method = new Method();

  constructor( private task:TaskService, private formbuilder:FormBuilder) { }

  ngOnInit(): void {

    this. inputForm = this.formbuilder.group({
      userId : [''],
      firstname : [''],
      lastname :[''],
      message : [''],
      age : ['']
    })

    this.alldetails();
  }

  
  alldetails(){
    this.task.getmethod().subscribe(res=>{
      this.details = res
    })
  }
  

  postDetails(){
    
    this.model.userId = this. inputForm.value.userId;
    this.model.firstname = this. inputForm.value.firstname;
    this.model.lastname = this. inputForm.value.lastname;
    this.model.message = this. inputForm.value.message;
    this.model.age = this. inputForm.value.age;

    this.task.postmethod(this.model).subscribe(res=>{
      console.log(res);
      alert("Added successfully")
      console.log("Added successfully")
      this.alldetails()
      this. inputForm.reset();
    })
  }
}





 