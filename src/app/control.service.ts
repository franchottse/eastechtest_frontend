import { Injectable } from '@angular/core';
import {
	AbstractControl,
	FormControl,
	FormGroup,
	ValidationErrors,
	ValidatorFn,
	Validators,
} from '@angular/forms';

import { Base } from './base';

@Injectable()
export class ControlService {
	toFormGroup(fields: Base<string>[]) {
		const group: any = {};
		fields.forEach((field) => {
			let validator =
				field.key === 'id'
					? this.isPositiveInt()
					: this.isNotWhiteSpaceOnly();
			group[field.key] = field.required
				? new FormControl(field.value || '', [
						Validators.required,
						validator,
				  ])
				: new FormControl(field.value || '');
		});
		return new FormGroup(group);
	}

	isPositiveInt(): ValidatorFn {
		return (control: AbstractControl): ValidationErrors | null => {
			return !/^[1-9]\d*$/.test(control.value)
				? { isPositiveInt: false }
				: null;
		};
	}

	isNotWhiteSpaceOnly(): ValidatorFn {
		return (control: AbstractControl): ValidationErrors | null => {
			return control.value.trim() === ''
				? { isNotWhiteSpaceOnly: false }
				: null;
		};
	}
}
