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
                        <td>p-scrollpanel</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-scrollpanel-wrapper</td>
                        <td>Wrapper of content section.</td>
                    </tr>
                    <tr>
                        <td>p-scrollpanel-content</td>
                        <td>Content section.</td>
                    </tr>
                    <tr>
                        <td>p-scrollpanel-bar</td>
                        <td>Scrollbar handle.</td>
                    </tr>
                    <tr>
                        <td>p-scrollpanel-bar-x</td>
                        <td>Scrollbar handle of a horizontal bar.</td>
                    </tr>
                    <tr>
                        <td>p-scrollpanel-bar-y</td>
                        <td>Scrollbar handle of a vertical bar</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    standalone: false
})
export class StyleDoc {}
