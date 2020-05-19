import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: './pages/tabs/tabs.module#TabsPageModule'
    },
    {
        path: 'log-in-new',
        loadChildren: () => import('./pages/log-in-new/log-in-new.module').then(m => m.LogInNewPageModule)
    },
    {
        path: 'log-in-new',
        loadChildren: () => import('./pages/log-in-new/log-in-new.module').then(m => m.LogInNewPageModule)
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
