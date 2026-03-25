# InitApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
  

	///
Cấu trúc project chuẩn Enterprise
src/app
│
├── core/
│   ├── interceptors/
│   ├── guards/
│   ├── services/
│   ├── models/
│   └── core.config.ts
│
├── shared/
│   ├── components/
│   ├── directives/
│   ├── pipes/
│   ├── ui/
│   └── utils/
│
├── features/
│   ├── auth/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   └── auth.routes.ts
│   │
│   ├── users/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   ├── models/
│   │   └── users.routes.ts
│   │
│   └── dashboard/
│
├── layout/
│   ├── main-layout.component.ts
│   ├── auth-layout.component.ts
│
├── app.config.ts
├── app.routes.ts
└── app.component.ts