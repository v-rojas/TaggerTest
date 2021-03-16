import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-codes',
  templateUrl: './add-codes.component.html',
  styleUrls: ['./add-codes.component.sass']
})
export class AddCodesComponent implements OnInit {

  @Output() codes = new EventEmitter<string[]>();
  tooltipText: string = 'Buscador por código de articulos';
  counter: number = 1;
  pattern: string = '([0-9]{3})([.]?)([0-9]{3})([.]?)([0-9]{2})([,]?)'
  addCodesForm = new FormGroup(
    { addField: new FormControl('', [Validators.pattern(`^${this.pattern}$`)]) });

  constructor(
  ) { }

  ngOnInit(): void {
  }

  get search() {
    return this.addCodesForm.get('addField')?.value;
  }

  checkArticleCodes() {

  }

  // Función que obtiene el número de caracter ingresado por teclado
  isTyping(evt: any) {
    evt = (evt) ? evt : window.event;
    const charCode = (evt.which) ? evt.which : evt.keyCode;
    const lastChar = this.search.charAt(this.search.length - 1);
    // Condición que valida si se presiona la tecla BackSpace
    if (charCode === 8) {
      // Condición que valida si el último caracter es ,
      // Si es así, entonces cambia la expresión regular a validar
      if (lastChar === ',') {
        this.counter--;
        this.changeRegexPattern();
      }
      return true;
    }
    // Condición que valida si se presiona la tecla correspondiente a dígitos (0-9) . ,
    if ((charCode > 47 && charCode < 58) || charCode === 190 || charCode === 188) {
      // Condición que valida si se presiona la tecla ,
      // Si es así, entonces cambia la expresión regular a validar
      if (charCode === 188) {
        this.counter++;
        this.changeRegexPattern();
      }
      return true;
    }
    return false;
  }

  changeRegexPattern() {
    this.addCodesForm.get('addField')?.setValidators([Validators.pattern(`^${this.pattern.repeat(this.counter)}$`)]);
  }

  addSearch() {
    if (this.addCodesForm.invalid) {
      return;
    } else {
      // Elimina los puntos del string
      const noDots = this.search.replace(/\./g, "");
      // Elimina las comas del string y lo divide en arrays
      const result = noDots.split(',');
      // Devuelve la búsqueda al elemento padre (app.component.ts)
      this.codes.emit(result);
    }
  }
}
