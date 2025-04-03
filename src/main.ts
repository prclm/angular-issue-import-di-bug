import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FrameworkService } from '@example/framework';
import { ComponentsComponent } from '@example/components';

@Component({
  selector: 'app-root',
  providers: [FrameworkService],
  imports: [ComponentsComponent],
  template: `
    <lib-components />
    App works
  `,
})
export class App {
}

bootstrapApplication(App);
