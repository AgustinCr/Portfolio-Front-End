import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { SeccionPrincipalComponent } from './componentes/seccion-principal/seccion-principal.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ListaArticulosComponent } from './componentes/lista-articulos/lista-articulos.component';
import { TestimoniosComponent } from './componentes/testimonios/testimonios.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ComponenteLoginComponent } from './componentes/componente-login/componente-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    SeccionPrincipalComponent,
    SobreMiComponent,
    ExperienciaComponent,
    ProyectosComponent,
    ListaArticulosComponent,
    TestimoniosComponent,
    ContactoComponent,
    FooterComponent,
    ComponenteLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
