import { Component, OnInit } from '@angular/core';
import {TestService} from "./test.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(protected  testService:TestService) { }

  ngOnInit(): void {
    this.testService.getStudent();
  }

}
