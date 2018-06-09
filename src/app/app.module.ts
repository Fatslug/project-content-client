// We need two route groups
// PUBLIC: One will display pages/component/content (with extremely limited in-context editing)
// ADMIN: One will be administration for pages/components/content
const ROUTES: Routes = [
	{ path: '', redirectTo: 'a', pathMatch: 'full' },
	{
		path: 'a', // ADMIN
		component: EditorComponent
	}
];

import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { SidebarComponent } from './editor/sidebar/sidebar.component';
import { EditorComponent } from './editor/editor.component';
import { PageComponent } from './editor/page/page.component';
import { DraggableModule } from './draggable/draggable.module';

@NgModule({
	declarations: [
		AppComponent,
		SidebarComponent,
		EditorComponent,
		PageComponent
	],
	imports: [
		MatSidenavModule,
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(
			ROUTES
			// { enableTracing: true } // <-- debugging purposes only
		),
		FlexLayoutModule,
		DraggableModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
