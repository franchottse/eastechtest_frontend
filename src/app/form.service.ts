import { Injectable } from '@angular/core';
import { Base } from './base';
import { Textbox } from './textbox';
import { of } from 'rxjs';

@Injectable()
export class Service {
	getFields() {
		const fields: Base<string>[] = [
			new Textbox({
				key: 'firstname',
				label: 'First name',
				value: 'Frankie',
				required: true,
				order: 1,
			}),
			new Textbox({
				key: 'lastname',
				label: 'Last name',
				value: 'Tse',
				required: true,
				order: 2,
			}),
		];

		return of(fields.sort((a, b) => a.order - b.order));
	}

	getSearch() {
		const searchField: Base<string>[] = [
			new Textbox({
				key: 'id',
				label: 'User ID',
				value: '1',
				required: true,
				order: 1,
			}),
		];

		return of(searchField);
	}
}
