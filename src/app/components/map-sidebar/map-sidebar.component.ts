import {Component, Input} from '@angular/core';
import {TitleCasePipe} from "@angular/common";
import {DistrictFeature, TractFeature, ZipcodeFeature} from "../../backend/types/geo/features/layer";
import {Subject} from "rxjs";
import {PointFeature} from "../../backend/types/geo/features/point";
import {MapSidebarMode} from "./map-sidebar-mode.enum";
import {MapSidebarData} from "./map-sidebar-data.type";
import {filter} from "rxjs/operators";
import {BreakdownStat} from "../../backend/types/stat/breakdown-stat.type";
import {PointFeatureType} from "../../backend/types/geo/features/point/point-feature-type.enum";
import {SchoolSummaryResponse} from "../../backend/responses/landmark/school-summary.response";
import {MatButtonToggleChange} from "@angular/material/button-toggle";

@Component({
  selector: 'app-map-sidebar',
  templateUrl: './map-sidebar.component.html',
  styleUrls: ['./map-sidebar.component.scss'],
})
export class MapSidebarComponent {


  @Input()
  didError = false;

  @Input()
  sidebarDataMode: MapSidebarMode = MapSidebarMode.SINGLE_ZIPCODE_BREAKDOWN;

  @Input()
  set data(newValue: MapSidebarData | null | undefined) {
      if (!!newValue) {
        this.currentData$.next(newValue);
        this.isLoading = false;
      } else {
        this.isLoading = true;
      }
  }

  showSchoolGradeChart = true;
  showSchoolGenderChart = false;
  isLoading = true;
  currentData$: Subject<MapSidebarData> = new Subject<MapSidebarData>();

  private titleCasePipe: TitleCasePipe = new TitleCasePipe();

  constructor() {
    this.currentData$.pipe(
      filter(data => !!data)
    ).subscribe(data => {
      if (!!data && !!data.mode) {
        this.sidebarDataMode = data?.mode;
      }
    })
  }

  getTitle(data: MapSidebarData): string {
    switch (this.sidebarDataMode) {
      case MapSidebarMode.FEATURE_POINT_SUMMARY:
        return data.pointFeatureData!.displayName;
      case MapSidebarMode.SINGLE_ZIPCODE_BREAKDOWN:
      case MapSidebarMode.SINGLE_TRACT_BREAKDOWN:
        return data.layerFeatureData!.id;
      default:
        return data.title || 'No title';
    }
  }

  getDistrict(data: MapSidebarData): DistrictFeature | undefined {
    switch (this.sidebarDataMode) {
      case MapSidebarMode.SINGLE_TRACT_BREAKDOWN:
        return (data.layerFeatureData! as TractFeature).district;
      case MapSidebarMode.SINGLE_ZIPCODE_BREAKDOWN:
        return (data.layerFeatureData! as ZipcodeFeature).district;
      default:
        return undefined;
    }
  }

  getSubtitle(data: MapSidebarData) {
    switch (this.sidebarDataMode) {
      case MapSidebarMode.SINGLE_ZIPCODE_BREAKDOWN:
        return 'ZIP Code';
      case MapSidebarMode.SINGLE_TRACT_BREAKDOWN:
        return 'Census Tract';
      case MapSidebarMode.MULTI_TRACT_BREAKDOWN:
        return 'Census Tracts';
      case MapSidebarMode.MULTI_ZIPCODE_BREAKDOWN:
        return 'ZIP Codes';
      case MapSidebarMode.FEATURE_POINT_SUMMARY:
        const pointFeatureType = data.pointFeatureData!.type.toString();
        return this.titleCasePipe.transform(pointFeatureType.replace('_', ' '));
    }

    return '';
  }

  getPointFeatureData(data: MapSidebarData): PointFeature {
    return (data.pointFeatureData as PointFeature);
  }

  getSchoolSummaryData(data: MapSidebarData): SchoolSummaryResponse {
    return (data.schoolSummaryData as SchoolSummaryResponse);
  }

  get isMulti(): boolean {
    return this.sidebarDataMode.toString().includes('multi');
  }

  get isFeaturePoint(): boolean {
    return this.sidebarDataMode === MapSidebarMode.FEATURE_POINT_SUMMARY;
  }

  isSchool(data: MapSidebarData) {
    return data.pointFeatureData!.type === PointFeatureType.SCHOOL;
  }

  showGenderChart(data: MapSidebarData) {
    if (!!data.genderChartData) {
      return data.stat.populationUnder18 > 0
    }

    return false;
  }

  showSchoolChart(data: MapSidebarData) {
    return !!data.schoolSummaryData;
  }

  showPovertyChart(data: MapSidebarData) {
    return (
      data.stat.populationInPovertyUnder6 > 0 ||
      data.stat.populationInPoverty6To11 > 0 ||
      data.stat.populationInPoverty12To17 > 0
    )
  }

  getStat(data: MapSidebarData): BreakdownStat {
    return data.stat
  }

  updateSchoolChartMode(event?: MatButtonToggleChange, value?: string) {
    let actualValue = value;

    if (!!event) {
      actualValue = event.value;
    }

    if (actualValue === 'grade') {
      this.showSchoolGradeChart = true;
      this.showSchoolGenderChart = false;
    } else {
      this.showSchoolGradeChart = false;
      this.showSchoolGenderChart = true;
    }
  }

}
