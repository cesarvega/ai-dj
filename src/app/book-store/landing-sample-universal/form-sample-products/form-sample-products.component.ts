import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SupabaseService } from '@app/services/supabase.service';


@Component({
  selector: 'app-form-sample-products',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatInput, MatButtonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './form-sample-products.component.html',

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
  imageUrl: string | null = null;
  pitchEs: string | null = null;
  pitchEn: string | null = null;
  previewEs: string | null = null;
  previewEn: string | null = null;
  english: boolean =false
  spanish :boolean= false
  test: string=""
  constructor(
    private fb: FormBuilder,
    private supabaseService: SupabaseService
    ){
    this.basicInfo = this.fb.group({
      id: ['', Validators.required],
      typeProduct: ['', Validators.required],
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
    currency: ['', Validators.required],
    dateOffert:['', Validators.required],
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
    primary: ['', Validators.required],
    secondary: ['', Validators.required],
    tertiary: ['', Validators.required]
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



onFileSelected(event: Event, type:string): void {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    const file = input.files[0];
    this.supabaseService.uploadImage(file).then((url) => {
      if (url) {

        if(type === 'previewEs'){
          this.previewEs = url;
        }
        if(type === 'pitchEs'){
          this.pitchEs= url;
        }
         if(type === 'previewEn'){
          this.previewEn = url;
        }
        if(type === 'pitchEn'){
        this.pitchEn = url;
        }
        if(type==='image'){
          this.imageUrl = url;
        }


      }
    });
  }
}

onSubmitsendProductData(product: string): void {
  this.supabaseService.sendProductData(product)

}





onCheckbox1Change(event: any): void {
  this.spanish = event.target.checked;
}

// Manejador del segundo checkbox
onCheckbox2Change(event: any): void {
  this.english = event.target.checked;
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
combinedData.basicInfo.imageUrl = this.imageUrl;
combinedData.basicInfo.urlPitchEng = this.pitchEn;
combinedData.basicInfo.urlPitchEsp = this.pitchEs;
combinedData.basicInfo.urlPreviewEsp = this.previewEs;
combinedData.basicInfo.urlPreviewEng = this.previewEn

 // console.log(combinedData);
 // console.log(this.imageUrl)
 // this.test= JSON.stringify(combinedData)
  this.onSubmitsendProductData(JSON.stringify(combinedData))

}






}
