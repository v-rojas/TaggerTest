import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EndpointProvider } from 'src/app/services/endpoint/endpoint';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(
    private api: EndpointProvider,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async checkArticleCodes(codes: string[]) {
    const apiCodes = await this.api.getArticleCodes().toPromise();
    this.checkArrayCodes(apiCodes, codes);
    this.router.navigateByUrl('/show-codes');
  }

  checkArrayCodes(apiCodes: string[], codes: string[]) {
    const arrayExist: string[] = this.arrayExist(apiCodes, codes);
    const arrayNoExist: string[] = this.arrayNoExist(codes, arrayExist);       
    const dataResult = { exist: arrayExist, noExist: arrayNoExist };
    sessionStorage.setItem('array', JSON.stringify(dataResult));    
  }

  arrayExist(apiCodes: string[], codes: string[]) {
    const arrayExist: string[] = [];
    apiCodes.forEach((value, i) => {
      codes.forEach(iteratorCodes => {
        if (value === iteratorCodes) {
          arrayExist.push(iteratorCodes);
        }
      });
    });
    return arrayExist;
  }

  arrayNoExist(codes: string[], arrayExist: string[]) {
    const arrayNoExist: string[] = [];
    let counter = 0;
    codes.forEach((value, i) => {
      arrayExist.forEach(iteratorExist => {
        if (value === iteratorExist) {
          counter++;
        }
      });
      if (counter === 0) {
        arrayNoExist.push(value);        
      }
      counter = 0;
    });
    return arrayNoExist;
  }
}
