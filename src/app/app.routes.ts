import {HomeComponent} from "./pages/home/home.component";
import { LoginComponent } from "./components/login/login.component";

export const appRoutes=[
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
    /* ,
    {
        path: 'others',
        loadChildren:'./pages/others/others.module#OthersModule',
    }, */
];