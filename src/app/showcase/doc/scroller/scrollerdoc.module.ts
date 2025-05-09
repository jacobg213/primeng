import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollerModule } from '@jacobg213/primeng-17/scroller';
import { SkeletonModule } from '@jacobg213/primeng-17/skeleton';
import { SpinnerModule } from '@jacobg213/primeng-17/spinner';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { BasicDoc } from './basicdoc';
import { DelayDoc } from './delaydoc';
import { HorizontalDoc } from './horizontaldoc';
import { GridDoc } from './griddoc';
import { ImportDoc } from './importdoc';
import { LazyLoadDoc } from './lazyloaddoc';
import { LoaderDoc } from './loaderdoc';
import { ScrollOptionsDoc } from './scrolloptionsdoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';
import { ButtonModule } from '@jacobg213/primeng-17/button';
import { ProgrammaticDoc } from './programmaticdoc';
import { AccessibilityDoc } from './accessibilitydoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, ScrollerModule, SkeletonModule, SpinnerModule, ButtonModule],
    declarations: [BasicDoc, DelayDoc, ImportDoc, HorizontalDoc, GridDoc, LazyLoadDoc, LoaderDoc, ScrollOptionsDoc, StyleDoc, TemplateDoc, ProgrammaticDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class ScrollerDocModule {}
