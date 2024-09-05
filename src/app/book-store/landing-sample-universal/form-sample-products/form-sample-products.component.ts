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
  idForm: FormGroup;
  nameForm: FormGroup;
  descriptionForm: FormGroup;
  priceForm: FormGroup;
  featuresForm: FormGroup;
  benefitsForm: FormGroup;
  chaptersForm: FormGroup;
  ctaForm: FormGroup;
  combinedForm: any = {};

  constructor(private fb: FormBuilder) {
    // Inicialización de los formularios separados
    this.idForm = this.fb.group({
      id: ['1234', Validators.required],
      typeProduct: ['book', Validators.required],
      urlPitchEng: ['', Validators.required],
      urlPitchEsp: ['', Validators.required],
    });

    this.nameForm = this.fb.group({
      name: this.fb.group({
        en: ['', Validators.required],
        es: ['', Validators.required],
      }),
    });

    this.descriptionForm = this.fb.group({
      description: this.fb.group({
        en: ['', Validators.required],
        es: ['', Validators.required],
      }),
    });

    this.priceForm = this.fb.group({
      price: this.fb.group({
        current: [5, Validators.required],
        original: [15, Validators.required],
        currency: ['USD', Validators.required],
        offert: this.fb.group({
          en: ['', Validators.required],
          es: ['', Validators.required],
        }),
      }),
    });

    this.featuresForm = this.fb.group({
      haveFeatures: [false],
      features: this.fb.array([]),
    });

    this.benefitsForm = this.fb.group({
      haveBenefits: [true],
      benefits: this.fb.array([]),
    });

    this.chaptersForm = this.fb.group({
      haveChapters: [true],
      chapters: this.fb.array([]),
    });

    this.ctaForm = this.fb.group({
      cta: this.fb.group({
        button_label: this.fb.group({
          en: ['', Validators.required],
          es: ['', Validators.required],
        }),
        link: ['', Validators.required],
      }),
    });
  }

  // Getters para las partes dinámicas
  get features() {
    return this.featuresForm.get('features') as FormArray;
  }

  get benefits() {
    return this.benefitsForm.get('benefits') as FormArray;
  }

  get chapters() {
    return this.chaptersForm.get('chapters') as FormArray;
  }

  // Métodos para añadir dinámicamente elementos
  addFeature() {
    const featureForm = this.fb.group({
      name: ['', Validators.required],
    });
    this.features.push(featureForm);
  }

  addBenefit() {
    const benefitForm = this.fb.group({
      title: this.fb.group({
        en: ['', Validators.required],
        es: ['', Validators.required],
      }),
      description: this.fb.group({
        en: ['', Validators.required],
        es: ['', Validators.required],
      }),
    });
    this.benefits.push(benefitForm);
  }

  addChapter() {
    const chapterForm = this.fb.group({
      name: this.fb.group({
        en: ['', Validators.required],
        es: ['', Validators.required],
      }),
    });
    this.chapters.push(chapterForm);
  }

  // Métodos para eliminar dinámicamente elementos
  removeFeature(index: number) {
    this.features.removeAt(index);
  }

  removeBenefit(index: number) {
    this.benefits.removeAt(index);
  }

  removeChapter(index: number) {
    this.chapters.removeAt(index);
  }

  // Método para combinar todos los formularios y enviar los datos
  onSubmit() {
    
      // Combina los formularios en un solo objeto
      this.combinedForm = {
        ...this.idForm.value,
        ...this.nameForm.value,
        ...this.descriptionForm.value,
        ...this.priceForm.value,
        ...this.featuresForm.value,
        ...this.benefitsForm.value,
        ...this.chaptersForm.value,
        ...this.ctaForm.value,
      };
      console.log('Id Form:', this.idForm.value);
      console.log('cta Form:', this.ctaForm.value);
      // Filtra arrays vacíos
      this.combinedForm.features = this.combinedForm.features.filter(
        (feature: any) => feature.name.trim() !== ''
      );
      this.combinedForm.benefits = this.combinedForm.benefits.filter(
        (benefit: any) =>
          benefit.title.en.trim() !== '' &&
          benefit.title.es.trim() !== '' &&
          benefit.description.en.trim() !== '' &&
          benefit.description.es.trim() !== ''
      );
      this.combinedForm.chapters = this.combinedForm.chapters.filter(
        (chapter: any) =>
          chapter.name.en.trim() !== '' && chapter.name.es.trim() !== ''
      );

      // Imprime el formulario combinado
      console.log('Combined Form:', this.combinedForm);
   
  }
}
