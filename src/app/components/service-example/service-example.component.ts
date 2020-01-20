import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../../services/my-service.service'

@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.scss']
})
export class ServiceExampleComponent implements OnInit {

  constructor(private myService: MyServiceService) { }

  ngOnInit() {
  }

  callGetter() {
    this.myService.setHello('Hello, bonjour!')
  }
}
