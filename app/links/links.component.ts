import { Component } from '@angular/core';
import {FORM_DIRECTIVES} from "@angular/forms";

@Component({
    selector: 'app',
    templateUrl: 'app/links/links.component.html',
    directives: [FORM_DIRECTIVES],
})
export class LinksComponent {

    private _urls:Array<string> = [];

    private static get URL_TEXT(): string { return 'Enter URL';}

    public url: string = LinksComponent.URL_TEXT;

    public addUrl(url: string) : void {
        this._urls.push(url);

        this.url = LinksComponent.URL_TEXT;
    }
}
