import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContextMenuModule } from 'ngx-contextmenu';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { WidgetModule } from './widget/widget.module';
import { AuthModule } from './auth/auth.module';
import { AppLoaderComponent } from '@shared/components/app-loader.component';
import { NotificationComponent } from '@shared/components/notification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouteReuseStrategy } from '@angular/router';
import { CacheRouteReuseStrategy } from './cache-route-reuse.strategy';
import * as _ from 'lodash';
import { LoginComponentComponent } from './login-component/login-component.component';
import { VsSchedulerComponent } from './widget/vs-scheduler/vs-scheduler.component';






registerLocaleData(localeFr, 'fr');
registerLocaleData(localeDe, 'de');

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    AppLoaderComponent,
    NotificationComponent,
    LoginComponentComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AngularFontAwesomeModule,
    NgbModule,
    BrowserAnimationsModule,
    ContextMenuModule.forRoot(),
    HttpClientModule,
    CoreModule,
    WidgetModule,
    AuthModule,
    AppRoutingModule,


    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [
    NgbModule,
    TranslateModule,
    ContextMenuModule,
    CoreModule
  ],
  /*providers: [{
    provide: RouteReuseStrategy,
    useClass: CacheRouteReuseStrategy
  }],*/
  bootstrap: [AppComponent]
})
export class AppModule { }
