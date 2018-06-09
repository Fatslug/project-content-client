import { Directive, HostBinding, EventEmitter, Output, OnInit, HostListener } from '@angular/core';
import { Subject } from 'rxjs';
import { switchMap, takeUntil, repeat, take } from 'rxjs/operators';

@Directive({
	selector: '[appDraggableRx]'
})
export class DraggableRxDirective implements OnInit {

	@HostBinding('class.draggable') draggable = true;
	@HostBinding('class.dragging') dragging = false;

	@Output() dragStart = new EventEmitter<PointerEvent>();
	@Output() dragMove = new EventEmitter<PointerEvent>();
	@Output() dragEnd = new EventEmitter<PointerEvent>();

	private pointerDown = new Subject<PointerEvent>();
	private pointerMove = new Subject<PointerEvent>();
	private pointerUp = new Subject<PointerEvent>();

	@HostListener('pointerdown', ['$event'])
	onPointerDown(event: PointerEvent): void {
		this.pointerDown.next(event);
	}
	@HostListener('document:pointermove', ['$event'])
	onPointerMove(event: PointerEvent): void {
		this.pointerMove.next(event);
	}
	@HostListener('document:pointerup', ['$event'])
	onPointerUp(event: PointerEvent): void {
		this.pointerUp.next(event);
	}

	ngOnInit() {
		// Drag Start (Pointer Down)
		this.pointerDown.asObservable()
			.subscribe(event => {
				this.dragging = true;
				this.dragStart.emit(event);
			});

		// Drag Move (Pointer Down)
		const dragMove$ = this.pointerDown.pipe(
			switchMap(() => this.pointerMove.pipe(
				takeUntil(this.pointerUp)
			))
		).subscribe((event) => this.dragMove.emit(event));

		// Drag End (Pointer Up)
		const dragEnd$ = this.pointerDown.pipe(
			switchMap(() => this.pointerUp.pipe(take(1)))
		).subscribe((event) => {
			this.dragging = false;
			this.dragEnd.emit(event);
		});
	}

}
