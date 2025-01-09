import {ApplicationConfig, isDevMode, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideEffects} from "@ngrx/effects";
import {provideStore} from "@ngrx/store";
import {provideStoreDevtools} from "@ngrx/store-devtools";
import { UserEffects } from './user/store/user.effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(),
        provideStore(),
        provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
        provideEffects(UserEffects),
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes)]
};
