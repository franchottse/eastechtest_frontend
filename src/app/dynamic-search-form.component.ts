import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Base } from './base';
import { ControlService } from './control.service';

import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-dynamic-search-form',
	templateUrl: './dynamic-search-form.component.html',
	providers: [ControlService],
})
export class DynamicSearchFormComponent implements OnInit {
	@Input() searchField: Base<string>[] | null = [];
	searchForm!: FormGroup;
	payload = { firstname: '', lastname: '' };
	errorFound = '';

	constructor(private sf: ControlService, private http: HttpClient) {}

	ngOnInit() {
		this.searchForm = this.sf.toFormGroup(
			this.searchField as Base<string>[]
		);
	}

	onSubmit() {
		let id = this.searchForm.getRawValue().id;

		this.http.get<any>('http://localhost:8080/users/' + id).subscribe(
			(resp) => {
				this.payload = resp;
				this.errorFound = '';
			},
			(error) => {
				this.payload = { firstname: '', lastname: '' };
				this.errorFound = JSON.stringify(error);
			}
		);
	}
}
