import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-sample-products',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-sample-products.component.html',
  styleUrls: ['./form-sample-products.component.scss'],
})
export class FormSampleProductsComponent {
  basicInfo : FormGroup
  name : FormGroup
  description: FormGroup
  price:FormGroup
  offert: FormGroup
  button_label: FormGroup
  color:FormGroup
  features: FormArray;
  featuresForm: FormGroup;
  benefits: FormArray;
  benefitsForm:FormGroup;
  chapters: FormArray;
  chaptersForm: FormGroup;
  
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3970426649.
  constructor(private fb: FormBuilder){
// Suggested code may be subject to a license. Learn more: ~LicenseLog:4269790677.
    this.basicInfo = this.fb.group({
      id: ['1234', Validators.required],
      typeProduct: ['book', Validators.required],
      urlPitchEng: ['', Validators.required],
      urlPitchEsp: ['', Validators.required],
      urlPreviewEsp: ['', Validators.required],
      urlPreviewEng: ['', Validators.required],
      haveBenefits: [false, Validators.required],
      haveFeatures: [false, Validators.required],
      haveChapters: [false, Validators.required],
      imageUrl: ['', Validators.required],
  })
  this.name = this.fb.group({
      es: ['', Validators.required],
      en: ['', Validators.required]
  })
  this.description= this.fb.group({
    es: ['', Validators.required],
    en: ['', Validators.required]
  })
  this.price= this.fb.group({
    current: ['', Validators.required],
    original: ['', Validators.required],
    currency: ['', Validators.required]
  })
  this.offert= this.fb.group({
    es: ['', Validators.required],
    en: ['', Validators.required]
  })
  this.button_label= this.fb.group({
    es: ['', Validators.required],
    en: ['', Validators.required],
    link: ['', Validators.required]
  })
  this.color = this.fb.group({
    primary: ['#4A148C', Validators.required],
    secondary: ['#FF69B4', Validators.required],
    tertiary: ['#8E24AA', Validators.required]
  });
  this.featuresForm = this.fb.group({
    features: this.fb.array([])  // Initialize the FormArray
  });
  this.benefitsForm = this.fb.group({
    benefits: this.fb.array([])  // Initialize the FormArray
  });
  this.chaptersForm = this.fb.group({
    chapters: this.fb.array([])  // Initialize the FormArray
  });

  this.features = this.fb.array([]);
  this.benefits = this.fb.array([]);
  this.chapters= this.fb.array([])

}
 // Getter for convenience
 get featuresArray(): FormArray {
  return this.featuresForm.get('features') as FormArray;
}
get benefitsArray(): FormArray {
  return this.benefitsForm.get('benefits') as FormArray;
}
get chaptersArray(): FormArray {
  return this.chaptersForm.get('chapters') as FormArray;
}


// Method to add a new feature
addFeature(): void {
  this.featuresArray.push(this.fb.group({
    title_en: ['', Validators.required],
    title_es: ['', Validators.required],
    description_en: ['', Validators.required],
    description_es: ['', Validators.required]
  }));
}

addBenefit(): void {
  this.benefitsArray.push(this.fb.group({
    title_en: ['', Validators.required],
    title_es: ['', Validators.required],
    
  }));
}
 addChapter(): void {
   this.chaptersArray.push(this.fb.group({
     title_en: ['', Validators.required],
title_es: ['', Validators.required],

   }));}

// Method to remove a feature
removeFeature(index: number): void {
  this.featuresArray.removeAt(index);
}
removeBenefit(index: number): void {
  this.benefitsArray.removeAt(index);
}
removeChapter(index: number): void {
  this.chaptersArray.removeAt(index);
}



onSubmit($event: Event): void {
  const combinedData = {
    basicInfo: this.basicInfo.value,
    name: this.name.value,
    description: this.description.value,
    price: this.price.value,
    offert: this.offert.value,
    button_label: this.button_label.value,
    color: this.color.value,
    features: this.featuresForm.value,
    benefits: this.benefitsForm.value,
    chapters: this.chaptersForm.value,
  };
if(this.featuresArray.length > 0 ){
combinedData.basicInfo.haveFeatures = true
}
if(this.benefitsArray.length > 0 ){
combinedData.basicInfo.haveBenefits=true
}
if(this.chaptersArray.length > 0 ){
combinedData.basicInfo.haveChapters=true
}
  console.log(combinedData);
}






}
