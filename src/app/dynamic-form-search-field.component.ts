import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Base } from './base';

@Component({
	selector: 'app-search-field',
	templateUrl: './dynamic-form-search-field.component.html',
})
export class DynamicFormSearchFieldComponent {
	@Input() searchField!: Base<string>;
	@Input() searchForm!: FormGroup;
	get isValid() {
		return this.searchForm.controls[this.searchField.key].value !== '';
	}
	get isInputValid() {
		let searchValue = this.searchForm.controls[this.searchField.key].value;
		return /^[1-9]\d*$/.test(searchValue) || searchValue === '';
	}
}
