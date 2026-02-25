import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core"
import { provideRouter, withInMemoryScrolling } from "@angular/router"
import { provideHttpClient, withInterceptors } from "@angular/common/http"
import { provideAnimations } from "@angular/platform-browser/animations"

import { provideTranslateService } from "@ngx-translate/core"
import { provideTranslateHttpLoader } from "@ngx-translate/http-loader"

import { routes } from "./app.routes"
import { authInterceptor } from "./core/interceptors/auth.interceptor"

export const appConfig: ApplicationConfig = {
  providers: [
    /**
     * 🚀 Optimize change detection
     */
    provideZoneChangeDetection({
      eventCoalescing: true,
      runCoalescing: true
    }),

    /**
     * 🌐 Router
     */
    provideRouter(
      routes,
      // withInMemoryScrolling({
      //   scrollPositionRestoration: "enabled",
      //   anchorScrolling: "enabled"
      // })
    ),

    /**
     * 📡 HTTP Client
     */
    provideHttpClient(withInterceptors([authInterceptor])),

    provideTranslateService({
      defaultLanguage: "vi",
      useDefaultLang: true,
      loader: provideTranslateHttpLoader({
        prefix: "./assets/i18n/",
        suffix: ".json",
        enforceLoading: false,
        useHttpBackend: false
      })
    }),

    /**
     * 🎬 Animations (PrimeNG bắt buộc)
     */
    provideAnimations()
  ]
}
