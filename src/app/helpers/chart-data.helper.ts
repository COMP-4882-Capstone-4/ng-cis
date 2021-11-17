import {BreakdownStatResponse} from "../backend/responses/stat";
import {ChartData} from "chart.js";
import {BreakdownStat} from "../backend/types/stat/breakdown-stat.type";
import colorLib, {Color} from "@kurkle/color";

export class ChartDataHelper {

  static CHART_COLORS = {
    red: 'rgb(255, 99, 132)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
  };


  static isPatternOrGradient = (value: any) => value instanceof CanvasGradient || value instanceof CanvasPattern;

  static color(value: any): Color {
    return this.isPatternOrGradient(value) ? value : colorLib(value);
  }

  static getHoverColor(value: any) {
    return this.isPatternOrGradient(value)
      ? value
      : colorLib(value).saturate(0.5).darken(0.1).hexString();
  }

  static getOverallChartData(response: BreakdownStatResponse): ChartData|null {
    const stat = this.getStat(response);
    if (!!stat) {
      return {
        labels: ['Over 18', 'Under 18'],
        datasets: [
          {
            label: 'Population Breakdown',
            data: [
              stat.totalPopulation - stat.populationUnder18,
              stat.populationUnder18,
            ]
          }
        ]
      }
    }

    return null;
  }

  static getGenderChartData(response: BreakdownStatResponse): ChartData|null {
    const stat = this.getStat(response);

    if (!!stat) {
      return {
        labels: ['Female', 'Male'],
        datasets: [
          {
            label: 'Population Breakdown',
            data: [
              stat.populationUnder18Female,
              stat.populationUnder18Male
            ]
          }
        ]
      }
    }

    return null;
  }

  static getPovertyChartData(response: BreakdownStatResponse): ChartData|null {
    const stat = this.getStat(response);

    if (!!stat) {
      return {
        labels: [
          'Under age 6',
          'Ages 6 - 11',
          'Ages 12 - 17',
        ],
        datasets: [
          {
            data: [
              stat.populationInPovertyUnder6,
              stat.populationInPoverty6To11,
              stat.populationInPoverty12To17
            ]
          }
        ]
      }
    }

    return null;
  }

  private static getStat(response: BreakdownStatResponse): BreakdownStat|null {
    if (response.stats.length > 0) {
      return response.stats[0];
    }

    return null;
  }
}
