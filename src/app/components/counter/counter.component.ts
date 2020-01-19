import { Component, OnInit, OnChanges, OnDestroy } from "@angular/core";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.scss"]
})
export class CounterComponent implements OnInit, OnChanges, OnDestroy {
  count: number = 0;

  constructor() {}

  ngOnInit() {
    // Do something on Init
  }

  ngOnChanges() {
    // Do something onm on change
  }

  ngOnDestroy() {
    // Do clean up on destroy
  }

  incrementCount() {
    this.count = this.count + 1;
  }
}
