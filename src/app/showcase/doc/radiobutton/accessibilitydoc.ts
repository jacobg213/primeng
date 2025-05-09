import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'accessibility-doc',
    template: ` <div>
        <app-docsectiontext>
            <h3>Screen Reader</h3>
            <p>
                RadioButton component uses a hidden native radio button element internally that is only visible to screen readers. Value to describe the component can either be provided via <i>label</i> tag combined with <i>inputId</i> prop or using
                <i>ariaLabelledBy</i>, <i>ariaLabel</i> props.
            </p>
        </app-docsectiontext>

        <app-code [code]="code" [hideToggleCode]="true" [hideCodeSandbox]="true" [hideStackBlitz]="true"></app-code>

        <h3>Keyboard Support</h3>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Function</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <i>tab</i>
                        </td>
                        <td>Moves focus to the checked radio button, if there is none within the group then first radio button receives the focus.</td>
                    </tr>
                    <tr>
                        <td>
                            <span class="inline-flex flex-column">
                                <i class="mb-1">left arrow</i>
                                <i>up arrow</i>
                            </span>
                        </td>
                        <td>Moves focus to the previous radio button, if there is none then last radio button receives the focus.</td>
                    </tr>
                    <tr>
                        <td>
                            <span class="inline-flex flex-column">
                                <i class="mb-1">right arrow</i>
                                <i>down arrow</i>
                            </span>
                        </td>
                        <td>Moves focus to the next radio button, if there is none then first radio button receives the focus.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>space</i>
                        </td>
                        <td>If the focused radio button is unchecked, changes the state to checked.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>`,
    standalone: false
})
export class AccessibilityDoc {
    code: Code = {
        basic: `<label for="rb1">One</label>
<p-radioButton inputId="rb1" />

<span id="rb2">Two</span>
<p-radioButton ariaLabelledBy="rb2" />

<p-radioButton ariaLabel="Three" />`
    };
}
