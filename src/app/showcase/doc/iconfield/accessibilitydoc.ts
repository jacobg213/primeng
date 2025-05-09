import { Component } from '@angular/core';

@Component({
    selector: 'accessibility-doc',
    template: ` <app-docsectiontext>
        <h3>Screen Reader</h3>
        <p>IconField and InputIcon does not require any roles and attributes.</p>

        <h3>Keyboard Support</h3>
        <p>Components does not include any interactive elements.</p>
    </app-docsectiontext>`,
    standalone: false
})
export class AccessibilityDoc {}
