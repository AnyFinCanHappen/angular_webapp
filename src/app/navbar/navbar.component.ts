import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import {WeatherSerivceService} from "../service/weather-serivce.service";
import {Router} from "@angular/router"
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  form:FormGroup = this.formBuilder.group({
    city: ['', [Validators.required]]
  }) 
   constructor(private formBuilder:FormBuilder, private weatherService: WeatherSerivceService, private router : Router) { }

  ngOnInit(): void {
  }
  onSubmit():void{
    if(this.form.value.city.replace(" ", "") !== "")
      this.router.navigateByUrl(`detail/${this.form.value.city}`);
  }

}
