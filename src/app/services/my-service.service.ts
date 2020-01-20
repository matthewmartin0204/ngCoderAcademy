import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'

@Injectable()
export class MyServiceService {

  private hello$: Subject<string> = new Subject
  constructor() { }

  setHello(words: string){
    this.hello$.next(words)
  }

  getHello():Subject<string> {
    return this.hello$
  }

}
