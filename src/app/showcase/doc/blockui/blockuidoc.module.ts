import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlockUIModule } from '@jacobg213/primeng-17/blockui';
import { ButtonModule } from '@jacobg213/primeng-17/button';
import { PanelModule } from '@jacobg213/primeng-17/panel';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { DocumentDoc } from './documentdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, PanelModule, ButtonModule, BlockUIModule],
    declarations: [ImportDoc, BasicDoc, DocumentDoc, StyleDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class BlockUIDocModule {}
