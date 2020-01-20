import { Component, OnInit } from "@angular/core";
import { duck, goose } from "./duckgoose";
import { MyServiceService } from '../../services/my-service.service'

@Component({
  selector: "app-duckgoose",
  templateUrl: "./duckgoose.component.html",
  styleUrls: ["./duckgoose.component.scss"]
})
export class DuckgooseComponent implements OnInit {
  ducks = duck
  constructor(private myService: MyServiceService ) {}
  words: any 
  ngOnInit() {
    this.myService.getHello().subscribe(val => this.words = val)
  }

  getGoose() {
    this.ducks = goose
  }
  
  

}
