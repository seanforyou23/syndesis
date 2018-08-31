import { NgModule, Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataMapperModule } from '@atlasmap/atlasmap-data-mapper';
// import { environment } from 'environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@Component({
  selector: 'test-component',
  template: `<data-mapper-example-host></data-mapper-example-host>`
})

export class TestComponent implements OnInit {

  ngOnInit() {
    console.log('component mounted');
  }

}

@NgModule({
  imports: [
    DataMapperModule,
    BrowserModule
  ],
  bootstrap: [TestComponent],
  declarations: [TestComponent]
})
export class AppModule {}

export function bootstrap() {
  /* tslint:disable:no-console */
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: any) => console.log(err));

}

