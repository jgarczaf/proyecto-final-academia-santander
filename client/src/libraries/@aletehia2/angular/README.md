# Aletheia Angular Component Library

Wrapper de Angular para los componentes del Design System Aletheia.

## Instalación

```bash
npm install @aletheia2/angular @aletheia/core
```

## Uso

### 1. Importar el módulo en tu aplicación

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AletheiaComponentLibraryModule } from '@aletheia2/angular';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AletheiaComponentLibraryModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### 2. Importar los estilos

En tu `angular.json`, agrega los estilos:

```json
{
  "styles": [
    "node_modules/@aletheia/core/dist/aletheia2/aletheia2.css"
  ]
}
```

O en tu `styles.scss`:

```scss
@import '@aletheia/core/dist/aletheia2/aletheia2.css';
```

### 3. Usar los componentes

```html
<ath-button>Click me</ath-button>
<ath-input-text label="Nombre" placeholder="Ingresa tu nombre"></ath-input-text>
```

## Componentes disponibles

Todos los componentes de Aletheia están disponibles con el prefijo `ath-`.

## Soporte de formularios

Los componentes de formulario son compatibles con `FormsModule` y `ReactiveFormsModule`:

```typescript
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    AletheiaComponentLibraryModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppModule { }
```

```html
<!-- ngModel -->
<ath-input-text [(ngModel)]="value"></ath-input-text>

<!-- Reactive Forms -->
<form [formGroup]="form">
  <ath-input-text formControlName="username"></ath-input-text>
</form>
```
