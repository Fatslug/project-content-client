import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraggableDirective } from './draggable.directive';
import { DraggableRxDirective } from './draggable-rx.directive';
import { MovableDirective } from './movable.directive';
import { DraggablePlaceholderDirective } from './draggable-placeholder.directive';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
	imports: [
		CommonModule,
		OverlayModule
	],
	declarations: [DraggableDirective, DraggableRxDirective, MovableDirective, DraggablePlaceholderDirective],
	exports: [DraggableDirective, DraggableRxDirective, MovableDirective, DraggablePlaceholderDirective]
})
export class DraggableModule { }
