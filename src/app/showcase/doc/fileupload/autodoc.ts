import { Component } from '@angular/core';
import { MessageService } from '@jacobg213/primeng-17/api';
import { Code } from '@domain/code';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

@Component({
    selector: 'file-upload-auto-demo',
    template: `
        <app-docsectiontext>
            <p>When <i>auto</i> property is enabled, a file gets uploaded instantly after selection.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-toast />
            <p-fileUpload mode="basic" name="demo[]" chooseIcon="pi pi-upload" url="https://www.primefaces.org/cdn/api/upload.php" accept="image/*" maxFileSize="1000000" (onUpload)="onBasicUploadAuto($event)" [auto]="true" chooseLabel="Browse" />
        </div>
        <app-code [code]="code" selector="file-upload-auto-demo"></app-code>
    `,
    providers: [MessageService],
    standalone: false
})
export class AutoDoc {
    constructor(private messageService: MessageService) {}

    onBasicUploadAuto(event: UploadEvent) {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
    }

    code: Code = {
        basic: `<p-fileUpload
    mode="basic"
    name="demo[]"
    chooseIcon="pi pi-upload"
    url="https://www.primefaces.org/cdn/api/upload.php"
    accept="image/*" maxFileSize="1000000"
    (onUpload)="onBasicUploadAuto($event)"
    [auto]="true"
    chooseLabel="Browse" />`,
        html: `<div class="card flex justify-content-center">
    <p-toast />
    <p-fileUpload
        mode="basic"
        name="demo[]"
        chooseIcon="pi pi-upload"
        url="https://www.primefaces.org/cdn/api/upload.php"
        accept="image/*" maxFileSize="1000000"
        (onUpload)="onBasicUploadAuto($event)"
        [auto]="true"
        chooseLabel="Browse" />
</div>`,

        typescript: `import { Component } from '@angular/core';
import { MessageService } from '@jacobg213/primeng-17/api';
import { FileUploadModule } from '@jacobg213/primeng-17/fileupload';
import { ToastModule } from '@jacobg213/primeng-17/toast';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

@Component({
    selector: 'file-upload-auto-demo',
    templateUrl: './file-upload-auto-demo.html',
    standalone: true,
    imports: [FileUploadModule, ToastModule],
    providers: [MessageService]
})
export class FileUploadAutoDemo {
    constructor(private messageService: MessageService) { }

    onBasicUploadAuto(event: UploadEvent) {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
    }
}`
    };
}
