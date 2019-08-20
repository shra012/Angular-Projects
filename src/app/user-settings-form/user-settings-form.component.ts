import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm } from '@angular/forms';
import { DataService } from '../data/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings : UserSettings = {
    name : "Mark",
    emailOffers : false,
    interfaceType : "medium",
    subscriptionType : "Annual",
    notes : "Some notes are typed here..."
  }

 postError : boolean = false;

  userSettings : UserSettings = {...this.originalUserSettings};
  message: string;
  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    if(form.valid){
      this.dataService.postForm(this.userSettings).subscribe(response => this.HttpSuccess(response),error => this.HttpError(error))
    }
  }
  HttpError(responseError: HttpErrorResponse): void {
    console.log("Exception Occured in the server",responseError);
    this.postError = true;
    this.message = responseError.error.message;
  }

  HttpSuccess(response: any[]): void {
    console.log("ajax is successful with response body",response);
    this.userSettings = response[0];
    this.message = response[1].message;
  }

}