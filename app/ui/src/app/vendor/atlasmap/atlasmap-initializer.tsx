import { BrowserModule } from '@angular/platform-browser';
import { DataMapperModule } from '@atlasmap/atlasmap-data-mapper';
import { Component, NgModule, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'data-mapper-loader',
  template: `<data-mapper-example-host></data-mapper-example-host>`
})

@NgModule({
  imports: [
    DataMapperModule,
    BrowserModule
  ],
  bootstrap: [SynDataMapperComponent],
  declarations: [SynDataMapperComponent]
})
export class SynDataMapperComponent implements OnInit {
  ngOnInit() {
    console.log('atlasmap connected');
  }
}

export function bootstrap() {
  /* tslint:disable:no-console */
  platformBrowserDynamic().bootstrapModule(SynDataMapperComponent)
  .catch((err: any) => console.log(err));

}
