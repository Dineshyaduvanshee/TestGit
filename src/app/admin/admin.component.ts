import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  users!: FormGroup;

  constructor(private fb: FormBuilder,private localStorageService: LocalStorageService) {
    console.log("This constructor from the admin component");
  }

  ngOnInit() {
    this.users = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
      
    });
  }

  // Add a method to handle form submission if needed
  onSubmit() {
    // Access the form values
    const formValues = this.users.value;

    // Do something with the form values, e.g., send to a service
    console.log(formValues);
  }
  saveData(){
  
      const data = this.users.value;
      console.log(data);
      
    localStorage.setItem('session', JSON.stringify(data));

  }
}
