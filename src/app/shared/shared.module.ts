import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './components/footer/footer.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, FormsModule],
  exports: [FooterComponent, CommonModule, FormsModule],
})
export class SharedModule {
}
