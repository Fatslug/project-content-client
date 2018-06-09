import { Directive, TemplateRef, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { DraggableDirective } from './draggable.directive';
import { Overlay, OverlayRef, GlobalPositionStrategy } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Directive({
	selector: '[appDraggablePlaceholder]',
	exportAs: 'appDraggablePlaceholder'
})
export class DraggablePlaceholderDirective implements OnInit, OnDestroy {
	private startPosition: { x: number; y: number; };
	private positionStrategy = new GlobalPositionStrategy();
	private overlayRef: OverlayRef;

	constructor(
		private draggable: DraggableDirective,
		private templateRef: TemplateRef<any>,
		private viewContainerRef: ViewContainerRef,
		private overlay: Overlay
	) { }

	ngOnInit(): void {
		this.draggable.dragStart.subscribe((event) => this.onDragStart(event));
		this.draggable.dragMove.subscribe((event) => this.onDragMove(event));
		this.draggable.dragEnd.subscribe(() => this.onDragEnd());

		// Create our overlay
		this.overlayRef = this.overlay.create({
			positionStrategy: this.positionStrategy,
			width: this.draggable.element.nativeElement.innerWidth
		});
	}

	ngOnDestroy(): void {
		// Remove the overlay
		this.overlayRef.dispose();
	}

	private onDragStart(event: PointerEvent): void {
		const clientRect = this.draggable.element.nativeElement.getBoundingClientRect();
		this.startPosition = {
			x: event.clientX - clientRect.left,
			y: event.clientY - clientRect.top
		};
	}

	private onDragMove(event: PointerEvent): void {
		if (!this.overlayRef.hasAttached()) {
			this.overlayRef.attach(new TemplatePortal(this.templateRef, this.viewContainerRef));
		}
		// Render placeholder in overlay
		this.positionStrategy.left((event.clientX - this.startPosition.x) + 'px');
		this.positionStrategy.top((event.clientY - this.startPosition.y) + 'px');
		this.positionStrategy.apply();
	}

	private onDragEnd(): void {
		this.overlayRef.detach();
	}
}
