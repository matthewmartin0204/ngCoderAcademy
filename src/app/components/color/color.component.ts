import { Component } from "@angular/core";

@Component({
  selector: "color-app",
  templateUrl: "./color.component.html",
  styleUrls: ["./color.component.scss"]
})
export class ColorComponent {
  light: boolean = false;
  constructor() {}

  toggleLightOn() {
    this.light = !this.light;
  }
}
