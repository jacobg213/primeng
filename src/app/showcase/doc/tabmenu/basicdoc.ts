import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@jacobg213/primeng-17/api';
import { Code } from '@domain/code';

@Component({
    selector: 'basic-doc',
    template: `
        <app-docsectiontext>
            <p>TabMenu requires a collection of menuitems as its model.</p>
        </app-docsectiontext>
        <div class="card">
            <p-tabMenu [model]="items" />
        </div>
        <app-code [code]="code" selector="tab-menu-basic-demo"></app-code>
    `,
    standalone: false
})
export class BasicDoc implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Dashboard', icon: 'pi pi-home' },
            { label: 'Transactions', icon: 'pi pi-chart-line' },
            { label: 'Products', icon: 'pi pi-list' },
            { label: 'Messages', icon: 'pi pi-inbox' }
        ];
    }

    code: Code = {
        basic: `<p-tabMenu [model]="items" />`,

        html: `<div class="card">
    <p-tabMenu [model]="items" />
</div>`,

        typescript: `import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@jacobg213/primeng-17/api';
import { TabMenuModule } from '@jacobg213/primeng-17/tabmenu';

@Component({
    selector: 'tab-menu-basic-demo',
    templateUrl: './tab-menu-basic-demo.html',
    standalone: true,
    imports: [TabMenuModule]
})
export class TabMenuBasicDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Dashboard', icon: 'pi pi-home' },
            { label: 'Transactions', icon: 'pi pi-chart-line' },
            { label: 'Products', icon: 'pi pi-list' },
            { label: 'Messages', icon: 'pi pi-inbox' }
        ]
    }
}`
    };
}
