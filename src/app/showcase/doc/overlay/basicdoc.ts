import { Component, Input } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'basic-doc',
    template: ` <app-docsectiontext>
            <p>Overlay is a container to display content in an overlay window. All the options mentioned above can be used as props for this component.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-button (onClick)="toggle()" label="Show Overlay"></p-button>
            <p-overlay [(visible)]="overlayVisible" [responsive]="{ breakpoint: '640px', direction: 'bottom', contentStyleClass: 'h-20rem' }" contentStyleClass="p-4 surface-overlay shadow-2 border-round"> Content </p-overlay>
        </div>
        <app-code [code]="code" selector="overlay-basic-demo"></app-code>`,
    standalone: false
})
export class OverlayBasicDemo {
    overlayVisible: boolean = false;

    toggle() {
        this.overlayVisible = !this.overlayVisible;
    }

    code: Code = {
        basic: `<p-button (onClick)="toggle()" label="Show Overlay"></p-button>
<p-overlay [(visible)]="overlayVisible" [responsive]="{ breakpoint: '640px', direction: 'bottom', contentStyleClass: 'h-20rem' }" contentStyleClass="p-4 surface-overlay shadow-2 border-round">
    Content
</p-overlay>`,
        html: `
<div class="card flex justify-content-center">
    <p-button (onClick)="toggle()" label="Show Overlay"></p-button>
    <p-overlay [(visible)]="overlayVisible" [responsive]="{ breakpoint: '640px', direction: 'bottom', contentStyleClass: 'h-20rem' }" contentStyleClass="p-4 surface-overlay shadow-2 border-round">
        Content
    </p-overlay>
</div>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    selector: 'overlay-basic-demo',
    templateUrl: './overlay-basic-demo.html' 
})
export class OverlayBasicDemo {
    overlayVisible: boolean = false;

    toggle() {
        this.overlayVisible = !this.overlayVisible;
    }
}`
    };
}
