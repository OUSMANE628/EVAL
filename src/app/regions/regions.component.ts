
import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/services/http-client.service';
import { UrlApi } from 'src/services/url-api';
import { region } from 'src/models/REGION/region';
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {
  
  arrayRegions: region[] = [];


  constructor(private _httpService: HttpClientService) { }

  ngOnInit(): void {
    this.getRegions();

  }
  getRegions(url: string = UrlApi.rawUrlReg): void {
    this._httpService.getRequest<region[]>(url)
      .subscribe((jsonResponse) => {
        this.arrayRegions = jsonResponse;
      }
      );
  }
}
