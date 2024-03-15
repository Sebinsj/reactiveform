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
  userSelectedLanguages:[]=[];

  genders=['Male','Female','Others'];
  languages=['Engilsh','Hindi','Malayalam','Tamil','Others']
  get addexp(){
    return (<FormArray> this.resumeForm.get('experience')).controls

  }

   pincodeValidator(control: FormControl): { [key: string]: any } | null {
    const validPattern = /^\d{6}$/; // Regular expression for 6 digits

    if (control.value && !validPattern.test(control.value)) {
        return { 'invalidPincode': true }; // Return validation error if pincode doesn't match pattern
    }

    return null; // Return null if validation succeeds
}

  ngOnInit(): void {
      this.resumeForm=new FormGroup({
        firstName: new FormControl(null,Validators.required),
        lastName:new FormControl(null,Validators.required),
        dateofbirth:new FormControl(null),
        email:new FormControl(null,[Validators.required,Validators.email]),
        gender:new FormControl(null),
        languages:new FormGroup({
          english:new FormControl(false),
          hindi:new FormControl(false),
          malayalam:new FormControl(false),
          tamil:new FormControl(false),
          others:new FormControl(false),
        }),

        address:new FormGroup({
          house_no:new FormControl(null),
          street:new FormControl(null),
          city:new FormControl(null,Validators.required),
          state:new FormControl(null,Validators.required),
          pincode:new FormControl(null,[Validators.required, this.pincodeValidator]),
          
        }),
        experience:new FormArray([])


      });
  }
  onSubmit(){
    console.log(this.resumeForm);
    alert('Form Submitted Sucessfully')
    
    
  }
  onExpAdd():void{
    const newExp=new FormGroup({
      companyname:new FormControl(null,Validators.required),
      position:new FormControl(null,Validators.required),
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
  selectedLanguages():void{

    
    
  }


}
