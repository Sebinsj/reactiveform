import { group } from '@angular/animations';
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
  get addexp(){
    return (<FormArray> this.resumeForm.get('experience')).controls

  }

  ngOnInit(): void {
      this.resumeForm=new FormGroup({
        firstName: new FormControl(null,Validators.required),
        lastName:new FormControl(null,Validators.required),
        dateofbirth:new FormControl(null),
        email:new FormControl(null,[Validators.required,Validators.email]),
        gender:new FormControl(null),
        languages:new FormGroup({
          english:new FormControl(null),
          hindi:new FormControl(null),
          malayalam:new FormControl(null),
          tamil:new FormControl(null),
          others:new FormControl(null),
        }),

        address:new FormGroup({
          house_no:new FormControl(null),
          street:new FormControl(null),
          city:new FormControl(null,Validators.required),
          state:new FormControl(null,Validators.required),
          pincode:new FormControl(null,[Validators.required]),
          
        }),
        experience:new FormArray([])


      });
  }
  onSubmit(){
    console.log(this.resumeForm);
    // alert('Form Submitted Sucessfully')
    
  }
  onExpAdd():void{
    const newExp=new FormGroup({
      companyname:new FormControl(null, Validators.required),
      position:new FormControl(null, Validators.required),
      years:new FormGroup({
        dateofjoining:new FormControl(null,Validators.required),
        dateofresign:new FormControl(null,Validators.required),
            }),
          });
       (this.resumeForm.get('experience') as FormArray).push(newExp);
  

  }
  onExpRemove(index:any):void{
    (this.resumeForm.get('experience')as FormArray).removeAt(index);

  }
  onReset(){
    this.resumeForm.reset()
  }


}
