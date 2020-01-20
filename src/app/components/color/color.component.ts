import { Component } from "@angular/core";

@Component({
  selector: "color-app",
  templateUrl: "./color.component.html",
  styleUrls: ["./color.component.scss"]
})
export class ColorComponent {
  colour: boolean = false;
  constructor() {}

  toggleLightOn() {
    this.colour = !this.colour;
  }
}
