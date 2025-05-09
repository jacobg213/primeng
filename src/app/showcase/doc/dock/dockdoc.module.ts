import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DialogModule } from '@jacobg213/primeng-17/dialog';
import { DockModule } from '@jacobg213/primeng-17/dock';
import { GalleriaModule } from '@jacobg213/primeng-17/galleria';
import { MenubarModule } from '@jacobg213/primeng-17/menubar';
import { RadioButtonModule } from '@jacobg213/primeng-17/radiobutton';
import { TerminalModule } from '@jacobg213/primeng-17/terminal';
import { ToastModule } from '@jacobg213/primeng-17/toast';
import { TreeModule } from '@jacobg213/primeng-17/tree';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { AdvancedDoc } from './advanceddoc';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, DockModule, FormsModule, RadioButtonModule, MenubarModule, ToastModule, DialogModule, GalleriaModule, TerminalModule, TreeModule, AppDocModule],
    declarations: [AdvancedDoc, BasicDoc, ImportDoc, StyleDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class DockDocModule {}
