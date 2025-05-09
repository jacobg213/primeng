import { Component } from '@angular/core';

@Component({
    selector: 'accessibility-doc',
    template: ` <div>
        <app-docsectiontext>
            <h3>Screen Reader</h3>
            <p>
                ConfirmPopup component uses <i>alertdialog</i> role and since any attribute is passed to the root element you may define attributes like <i>aria-label</i> or <i>aria-labelledby</i> to describe the popup contents. In addition
                <i>aria-modal</i> is added since focus is kept within the popup.
            </p>
            <p>
                It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding <i>tabIndex</i> would be necessary. ConfirmPopup adds <i>aria-expanded</i> state attribute and <i>aria-controls</i> to the
                trigger so that the relation between the trigger and the popup is defined.
            </p>
            <h3>Overlay Keyboard Support</h3>
            <p>When the popup gets opened, the first focusable element receives the focus and this can be customized by adding <i>autofocus</i> to an element within the popup.</p>
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
                            <td><i>tab</i></td>
                            <td>Moves focus to the next the focusable element within the popup.</td>
                        </tr>
                        <tr>
                            <td><i>shift</i> + <i>tab</i></td>
                            <td>Moves focus to the previous the focusable element within the popup.</td>
                        </tr>
                        <tr>
                            <td><i>escape</i></td>
                            <td>Closes the popup and moves focus to the trigger.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h3>Buttons Keyboard Support</h3>
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
                            <td><i>enter</i></td>
                            <td>Triggers the action, closes the popup and moves focus to the trigger.</td>
                        </tr>
                        <tr>
                            <td><i>space</i></td>
                            <td>Triggers the action, closes the popup and moves focus to the trigger.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </app-docsectiontext>
    </div>`,
    standalone: false
})
export class AccessibilityDoc {}
