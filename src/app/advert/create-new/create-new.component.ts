import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent implements OnInit {

  createFormGroup: FormGroup = this.formBuilder.group({
    title: new FormControl('', [Validators.required, Validators.minLength(4)]),
    category: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required ,Validators.pattern(/^https?:\/\/[\w]+/)]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)])
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  
}
