import { Component } from '@angular/core';

import { Service } from './form.service';
import { Base } from './base';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-root',
	template: `
		<div>
			<h2>Eastech Assessment</h2>
			<h3>Add a user</h3>
			<app-dynamic-form [fields]="fields$ | async"></app-dynamic-form>
			<h3>Search a user</h3>
			<app-dynamic-search-form
				[searchField]="search$ | async"
			></app-dynamic-search-form>
		</div>
		<div></div>
	`,
	providers: [Service],
})
export class AppComponent {
	fields$: Observable<Base<any>[]>;
	search$: Observable<Base<any>[]>;

	constructor(service: Service) {
		this.fields$ = service.getFields();
		this.search$ = service.getSearch();
	}
}
