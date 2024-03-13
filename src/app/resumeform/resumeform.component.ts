import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resumeform',
  templateUrl: './resumeform.component.html',
  styleUrl: './resumeform.component.css'
})
export class ResumeformComponent implements OnInit {
  resumeForm!: FormGroup;

  genders=['Male','Female','Others'];
  languages=['Engilsh','Hindi','Malayalam','Tamil','Others']

  ngOnInit(): void {
      this.resumeForm=new FormGroup({
        firstName: new FormControl(null,Validators.required),
        lastName:new FormControl(null,Validators.required),
        dateofbirth:new FormControl(null),
        email:new FormControl(null,[Validators.required,Validators.email]),
        gender:new FormControl(null),
        languages:new FormControl(null),

        address:new FormGroup({
          house_no:new FormControl(null),
          street:new FormControl(null),
          city:new FormControl(null,Validators.required),
          state:new FormControl(null,Validators.required),
          pincode:new FormControl(null,[Validators.required]),
          
        }),
        experience:new FormArray([
          new FormControl(null),
          new FormControl(null),
          new FormControl(null),
          
        ])


      });
  }
  onSubmit(){
    console.log(this.resumeForm);
    alert('Form Submitted Sucessfully')
    
  }


}
