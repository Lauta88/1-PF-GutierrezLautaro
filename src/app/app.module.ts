import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { MaterialModule } from './material/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ObjetoAtextoPipe } from './pipes/objeto-atexto.pipe';
import { TitulosDirective } from './directives/titulos.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormularioComponent,
    TablaComponent,
    ObjetoAtextoPipe,
    TitulosDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],

  exports: [
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
