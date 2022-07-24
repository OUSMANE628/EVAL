import { Component, OnInit } from '@angular/core';
import { UrlApi } from 'src/services/url-api';
import { departements } from 'src/models/departement/departements'; 
import { HttpClientService } from 'src/services/http-client.service';
import {HttpErrorResponse} from "@angular/common/http";


  

@Component({
  selector: 'app-departemement',
  templateUrl: './departemement.component.html',
  styleUrls: ['./departemement.component.scss']
})
export class DepartemementComponent implements OnInit {

  arrayDepartements: departements[] = [];

  constructor(private _httpService: HttpClientService ) { }

  ngOnInit(): void {
    this.getDepartement();
  }

  getDepartement(url: string = UrlApi.rawUrlDep): void {
    this._httpService.getRequest<departements[]>(url)
      .subscribe((jsonResponse) => {
        this.arrayDepartements = jsonResponse;
      }
    );
  }
}
