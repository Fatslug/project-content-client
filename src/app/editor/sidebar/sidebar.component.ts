import { MatSidenav } from '@angular/material/sidenav';
import { Component, OnInit, Input, ViewChild, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
	selector: 'app-editor-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	onDragStart(): void {
		console.log('Got drag start...');
	}

	onDragMove(event: PointerEvent): void {
		console.log('Got drag move...', event.clientX, event.clientY);
	}

	onDragEnd(): void {
		console.log('Got drag end...');
	}

}
