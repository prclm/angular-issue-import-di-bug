import { Component, inject } from '@angular/core';
import { FrameworkService } from '@example/framework';

@Component({
  selector: 'lib-components',
  imports: [],
  template: `
    <p>
      components works!
    </p>
  `,
  styles: ``
})
export class ComponentsComponent {
 service = inject(FrameworkService, {host: true})
}
