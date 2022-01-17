import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './sites/home/home.component';
import { LoremComponent } from './sites/lorem/lorem.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', ...{ title: 'Home' } },
  { path: 'home', component: HomeComponent, ...{ title: 'Home' } },
  {
    path: 'lorem',
    component: LoremComponent,
    ...{ title: 'Lorem', color: 'red' },
  },

  // { path: 'book/:isbn', component: BookDetailsComponent },
  // { path: 'book', component: BookListComponent },
  // { path: 'books', component: BookListComponent },
  // { path: 'bookform', component: BookFormComponent },
  // { path: 'bausteine', loadChildren: () => import('./bausteine/bausteine.module').then(m => m.BausteineModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {
  public static mypaths = routes.filter((p) => p.path != '');

  public static navItems = [
    { path: 'home', title: 'Home' },
    { path: 'lorem', title: 'Lorem Ipsum' },
  ];
}
