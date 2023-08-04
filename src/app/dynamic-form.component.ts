import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Base } from './base';
import { ControlService } from './control.service';

import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-dynamic-form',
	templateUrl: './dynamic-form.component.html',
	providers: [ControlService],
})
export class DynamicFormComponent implements OnInit {
	@Input() fields: Base<string>[] | null = [];
	form!: FormGroup;
	payLoad = '';

	constructor(private f: ControlService, private http: HttpClient) {}

	ngOnInit() {
		this.form = this.f.toFormGroup(this.fields as Base<string>[]);
	}

	onSubmit() {
		this.http
			.post<any>('http://localhost:8080/users', this.form.getRawValue())
			.subscribe((resp) => {
				if (!resp)
					this.payLoad = JSON.stringify(this.form.getRawValue());
			});
	}
}
