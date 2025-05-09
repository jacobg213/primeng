import { Component } from '@angular/core';

@Component({
    selector: 'accessibility-doc',
    template: ` <div>
        <app-docsectiontext>
            <h3>Screen Reader</h3>
            <p>
                MegaMenu component uses the <i>menubar</i> role along with <i>aria-orientation</i> and the value to describe the component can either be provided with <i>aria-labelledby</i> or <i>aria-label</i> props. Each list item has a
                <i>presentation</i> role whereas anchor elements have a <i>menuitem</i> role with <i>aria-label</i> referring to the label of the item and <i>aria-disabled</i> defined if the item is disabled. A submenu within a MegaMenu uses the
                <i>menu</i> role with an <i>aria-labelledby</i> defined as the id of the submenu root menuitem label. In addition, root menuitems that open a submenu have <i>aria-haspopup</i>, <i>aria-expanded</i> and <i>aria-controls</i> to define
                the relation between the item and the submenu.
            </p>
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
                            <td><i>tab</i></td>
                            <td>Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence.</td>
                        </tr>
                        <tr>
                            <td><i>shift</i> + <i>tab</i></td>
                            <td>Add focus to the last item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence.</td>
                        </tr>
                        <tr>
                            <td><i>enter</i></td>
                            <td>If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays.</td>
                        </tr>
                        <tr>
                            <td><i>space</i></td>
                            <td>If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays.</td>
                        </tr>
                        <tr>
                            <td><i>escape</i></td>
                            <td>If focus is inside a popup submenu, closes the submenu and moves focus to the root item of the closed submenu.</td>
                        </tr>
                        <tr>
                            <td><i>down arrow</i></td>
                            <td>If focus is on a root element, open a submenu and moves focus to the first element in the submenu otherwise moves focus to the next menuitem within the submenu.</td>
                        </tr>
                        <tr>
                            <td><i>up arrow</i></td>
                            <td>If focus is on a root element, opens a submenu and moves focus to the last element in the submenu otherwise moves focus to the previous menuitem within the submenu.</td>
                        </tr>
                        <tr>
                            <td><i>right arrow</i></td>
                            <td>If focus is on a root element, moves focus to the next menuitem. If the focus in inside a submenu, moves focus to the first menuitem of the next menu group.</td>
                        </tr>
                        <tr>
                            <td><i>left arrow</i></td>
                            <td>If focus is on a root element, moves focus to the previous menuitem. If the focus in inside a submenu, moves focus to the first menuitem of the previous menu group.</td>
                        </tr>
                        <tr>
                            <td><i>home</i></td>
                            <td>Moves focus to the first menuitem within the submenu.</td>
                        </tr>
                        <tr>
                            <td><i>end</i></td>
                            <td>Moves focus to the last menuitem within the submenu.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </app-docsectiontext>
    </div>`,
    standalone: false
})
export class AccessibilityDoc {}
