import { Component } from '@angular/core';

@Component({
    selector: 'style-doc',
    template: `
        <app-docsectiontext>
            <p>Following is the list of structural style classes, for theming classes visit <a href="#" [routerLink]="['/theming']">theming</a> page.</p>
        </app-docsectiontext>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Element</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>p-treeselect</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-treeselect-label-container</td>
                        <td>Container of the label to display selected items.</td>
                    </tr>
                    <tr>
                        <td>p-treeselect-label</td>
                        <td>Label to display selected items.</td>
                    </tr>
                    <tr>
                        <td>p-treeselect-trigger</td>
                        <td>Dropdown button.</td>
                    </tr>
                    <tr>
                        <td>p-treeselect-panel</td>
                        <td>Overlay panel for items.</td>
                    </tr>
                    <tr>
                        <td>p-treeselect-items-wrapper</td>
                        <td>List container of items.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    standalone: false
})
export class StyleDoc {}
