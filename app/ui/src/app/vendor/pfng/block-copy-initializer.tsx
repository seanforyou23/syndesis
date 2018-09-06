import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BlockCopyModule } from 'patternfly-ng/copy/block-copy';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'pfng-block-copy-loader',
  template: `
    <pfng-block-copy
      label="example label"
      value="example value"
      (onCopy)="handleCopy($event)">
    </pfng-block-copy>`
})

@NgModule({
  imports: [
    BlockCopyModule,
    BrowserModule
  ],
  bootstrap: [SynBlockCopyComponent],
  declarations: [SynBlockCopyComponent]
})

export class SynBlockCopyComponent implements OnInit {
  ngOnInit() {
    console.log('block copy connected');
  }

  handleCopy($event: Event): void {
    console.log('event handler for onCopy: ', $event);
  }
}

export function bootstrap() {
  /* tslint:disable:no-console */
  platformBrowserDynamic().bootstrapModule(SynBlockCopyComponent)
  .catch((err: any) => console.log(err));
}
