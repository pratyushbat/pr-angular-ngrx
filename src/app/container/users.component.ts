import { Component } from "@angular/core";

@Component({
  selector: 'youtube-users',
  template: `
   welcome user
  `,
  styles: [``]
})

export class UsersComponent  {
 
}


// reducer -> it contain a state (global state)
// it will take an action -> it will return a new state

// action -> it will contain a payload and a type

// Dependency Injection Principle
// you should not depend on something directly
// component -> youtube repo -> apiService -> http Service -> http client
