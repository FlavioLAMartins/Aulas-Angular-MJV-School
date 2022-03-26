import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ConteudoPrincipalComponent } from './conteudo-principal/conteudo-principal.component';
import { SectionLoremComponent } from './section-lorem/section-lorem.component';
import { ConteudoSecundarioComponent } from './conteudo-secundario/conteudo-secundario.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ConteudoPrincipalComponent,
    SectionLoremComponent,
    ConteudoSecundarioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
