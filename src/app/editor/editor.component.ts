import { MatSidenav } from '@angular/material/sidenav';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-editor',
	templateUrl: './editor.component.html',
	styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

	@ViewChild('sidebar') sidebar: MatSidenav;
	public sidenavOpen = true;

	constructor() { }

	ngOnInit() {
	}

	public toggleSidebar() {
		this.sidebar.toggle();
	}

	public setDraggedComponent($event) {
		// console.log($event);
	}

}
