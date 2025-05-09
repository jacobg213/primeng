import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { ImportDoc } from './importdoc';
import { DataTableDoc } from './datatabledoc';
import { DragDropModule } from '@jacobg213/primeng-17/dragdrop';
import { TagModule } from '@jacobg213/primeng-17/tag';
import { TableModule } from '@jacobg213/primeng-17/table';
import { BasicDoc } from './basicdoc';
import { DropIndicatorDoc } from './dropindicatordoc';
import { PanelModule } from '@jacobg213/primeng-17/panel';
import { DragHandleDoc } from './draghandledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, DragDropModule, TableModule, TagModule, FormsModule, PanelModule],
    declarations: [BasicDoc, DataTableDoc, ImportDoc, DropIndicatorDoc, DragHandleDoc],
    exports: [AppDocModule]
})
export class DragDropDocModule {}
