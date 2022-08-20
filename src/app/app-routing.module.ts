import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlocksViewComponent } from './blocks-view/blocks-view.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
	path: "",
	component: BlocksViewComponent
},{
	path: "home",
	component: HomeComponent
},{
	path: "home/:heroId",
	component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
