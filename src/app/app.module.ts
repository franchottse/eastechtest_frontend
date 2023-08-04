import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicSearchFormComponent } from './dynamic-search-form.component';
import { DynamicFormFieldComponent } from './dynamic-form-field.component';
import { DynamicFormSearchFieldComponent } from './dynamic-form-search-field.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
	imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
	declarations: [
		AppComponent,
		DynamicFormComponent,
		DynamicSearchFormComponent,
		DynamicFormFieldComponent,
		DynamicFormSearchFieldComponent,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
