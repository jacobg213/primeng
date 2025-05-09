import { Component } from '@angular/core';
import { StyleDoc } from '@doc/toolbar/styledoc';
import { ImportDoc } from '@doc/toolbar/importdoc';
import { BasicDoc } from '@doc/toolbar/basicdoc';
import { TemplateDoc } from '@doc/toolbar/templatedoc';
import { AccessibilityDoc } from '@doc/toolbar/accessibilitydoc';

@Component({
    templateUrl: './toolbardemo.html',
    standalone: false
})
export class ToolbarDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];
}
