import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-zipcode',
  templateUrl: './zipcode.component.html',
  styleUrls: ['./zipcode.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ZipcodeComponent {

  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Number', 'Name', 'Topic', 'URL'];
  expandedElement: PeriodicElement | null | undefined;
 
}

export interface PeriodicElement {
  Number: number;
  Name: string;
  Topic: string;
  URL: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Number: 1,
    Name: 'Memphis Data Hub',
    Topic: 'Zip code',
    URL: 'https://data.memphistn.gov/Neighborhoods/Zip-Codes-City-of-Memphis/6arv-kma7',
    description: `The dataset describes the Zip Codes that are located within the City of Memphis Jurisdiction boundary.`,
        
  },
  {
    Number: 2,
    Name: 'Memphis Data Hub',
    Topic: 'Parks',
    URL: 'https://data.memphistn.gov/Neighborhoods/City-of-Memphis-Parks-Spatial-Data/aeu5-vwkq',
    description: `Dataset contains both point and polygon information. Park data came from ParkServe (https://www.tpl.org/parkserve/downloads) and asset data is provided by City of Memphis Parks and Neighborhood Division.`,
  },
  {
    Number: 3,
    Name: 'Memphis Data Hub',
    Topic: 'Community Centers',
    URL: 'https://data.memphistn.gov/Neighborhoods/Community-Centers-Shapefile/hh7a-g7mu',
    description: `The dataset represents the locations of community centers managed by the City of Memphis Parks and Recreation Department.`,
  },
  {
    Number: 4,
    Name: 'Memphis Data Hub',
    Topic: 'Libraries',
    URL: 'https://data.memphistn.gov/Neighborhoods/Memphis-Public-Libraries-Shapefile/4kk2-hed2',
    description: `The dataset describes the locations of the Memphis Public Libraries within the City of Memphis.`,
  },
  {
    Number: 5,
    Name: 'Census',
    Topic: 'Tracts',
    URL: '	https://api.census.gov/data/2018/acs/acs5/subject',
    description: `The American Community Survey (ACS) is an ongoing survey that provides data every year -- giving communities the current information they need to plan investments and services. The ACS covers a broad range of topics about social, economic, demographic, and housing characteristics of the U.S. population. The subject tables include the following geographies: nation, all states (including DC and Puerto Rico), all metropolitan areas, all congressional districts, all counties, all places and all tracts. Subject tables provide an overview of the estimates available in a particular topic. The data are presented as both counts and percentages. There are over 66,000 variables in this dataset.`,
  },
  {
    Number: 6,
    Name: 'Census',
    Topic: 'Male Population under 18 years old',
    URL: 'https://api.census.gov/data/2018/acs/acs5/subject/variables/S0101_C03_022E.json',
    description: `Estimate!!Male!!Total population!!SELECTED AGE CATEGORIES!!Under 18 years`,
  },
  {
    Number: 7,
    Name: 'Census',
    Topic: 'Female Population under 18 years old',
    URL: ' https://api.census.gov/data/2018/acs/acs5/subject/variables/S0101_C05_022E.json',
    description: `Estimate!!Female!!Total population!!SELECTED AGE CATEGORIES!!Under 18 years.`,
  },
  {
    Number: 8,
    Name: 'Census',
    Topic: 'All Population in poverty under 18',
    URL: 'https://api.census.gov/data/2018/acs/acs5/subject/variables/S0501_C02_108E.json',
    description: `Estimate!!Native!!POVERTY STATUS IN THE PAST 12 MONTHS!!POVERTY RATES FOR FAMILIES FOR WHOM POVERTY STATUS IS DETERMINED!!All families!!With related children of the householder under 18 years.`,
  },
  {
    Number: 9,
    Name: 'Memphis Data Hub',
    Topic: 'Schools',
    URL: 'https://data.memphistn.gov/dataset/Shelby-County-Schools-Board-of-Education-District-/y2pm-7miw',
    description: `Shapefile of Shelby County Schools Board of Education district boundaries. Received from SCS May 2020.`,
  },
];







