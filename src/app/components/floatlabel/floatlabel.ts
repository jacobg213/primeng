import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation } from '@angular/core';
import { SharedModule } from '@jacobg213/primeng-17/api';
import { RouterModule } from '@angular/router';

/**
 * FloatLabel appears on top of the input field when focused.
 * @group Components
 */
@Component({
    selector: 'p-floatLabel',
    template: `
        <span class="p-float-label">
            <ng-content></ng-content>
        </span>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class FloatLabel {}

@NgModule({
    imports: [CommonModule, SharedModule, RouterModule],
    exports: [FloatLabel, SharedModule],
    declarations: [FloatLabel]
})
export class FloatLabelModule {}
