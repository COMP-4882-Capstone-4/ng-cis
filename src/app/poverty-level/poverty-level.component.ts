import { Component} from '@angular/core';

export interface PeriodicElement {
  personInFamily: number;
  povertyGuideline: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {povertyGuideline: 12880, personInFamily: 1},
  {povertyGuideline: 17420, personInFamily: 2},
  {povertyGuideline: 21960, personInFamily: 3},
  {povertyGuideline: 26500, personInFamily: 4},
  {povertyGuideline: 31040, personInFamily: 5},
  {povertyGuideline: 35580, personInFamily: 6},
  {povertyGuideline: 40120, personInFamily: 7},
  {povertyGuideline: 44660, personInFamily: 8},
];

@Component({
  selector: 'app-poverty-level',
  templateUrl: './poverty-level.component.html',
  styleUrls: ['./poverty-level.component.scss']
})
export class PovertyLevelComponent  {
  displayedColumns: string[] = ['povertyGuideline', 'personInFamily'];
  dataSource = ELEMENT_DATA;

}