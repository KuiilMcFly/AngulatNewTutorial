import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  dogRace = [
    {
    razza: 'Labrador',
    tipo: 'Riporto',
    descrizione: `E' un cane di costituzione robusta, raccolto e molto attivo. Ha un cranio largo, torace ampio e profondo, costole larghe e ben cerchiate. Il posteriore e il rene sono larghi e robusti, ha un ottimo temperamento ed è un cane molto agile. L'olfatto è eccellente, la bocca morbida e molto amante dell'acqua.`,
  }
  ];
}
