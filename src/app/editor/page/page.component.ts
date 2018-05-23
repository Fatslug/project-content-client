import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-editor-page',
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

	@Output()
	sidebar = new EventEmitter();

	sidebarOpen = true;

	constructor() { }

	ngOnInit() {
	}

	public toggleSidebar() {
		this.sidebarOpen = !this.sidebarOpen;
		this.sidebar.emit();
	}

	public setContent($event): void {
		console.log($event);
	}

}
