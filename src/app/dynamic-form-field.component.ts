import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Base } from './base';

@Component({
	selector: 'app-field',
	templateUrl: './dynamic-form-field.component.html',
})
export class DynamicFormFieldComponent {
	@Input() field!: Base<string>;
	@Input() form!: FormGroup;
	get isValid() {
		return this.form.controls[this.field.key].valid;
	}
}
