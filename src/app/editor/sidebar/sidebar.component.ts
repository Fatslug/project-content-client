import { MatSidenav } from '@angular/material/sidenav';
import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
	selector: 'app-editor-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

	@Output()
	onDrag = new EventEmitter();

	private dragSubject = new BehaviorSubject<string>('');
	public drag$ = this.dragSubject.asObservable();

	constructor() { }

	ngOnInit() {
	}

	public onComponentDrag(): void {
		this.dragSubject.next('test');
		this.onDrag.emit('test');
	}

	public onComponentDrop($event): void {
		console.log('DROPPED!');
		console.log($event);
		this.dragSubject.next('');
	}

}
