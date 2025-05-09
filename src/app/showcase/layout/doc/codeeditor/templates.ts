import pkg from 'package.json';
import { Code, ExtFile, RouteFile } from 'src/app/showcase/domain/code';
import { services } from './services';

export interface Props {
    code?: Code;
    title?: string;
    description?: string;
    service?: string[];
    extFiles?: ExtFile[];
    routeFiles?: RouteFile[];
    selector?: string;
}

const app_dependencies = pkg ? pkg.devDependencies : {};

const PrimeNG = {
    version: '17.18.13',
    description:
        'PrimeNG is an open source UI library for Angular featuring a rich set of 80+ components, a theme designer, various theme alternatives such as Material, Bootstrap, Tailwind, premium templates and professional support. In addition, it integrates with PrimeBlock, which has 370+ ready to use UI blocks to build spectacular applications in no time.'
};

const demoDependencies = [
    '@angular-devkit/build-angular',
    '@angular/animations',
    '@angular/cdk',
    '@angular/cli',
    '@angular/common',
    '@angular/compiler',
    '@angular/compiler-cli',
    '@angular/core',
    '@angular/forms',
    '@angular/material',
    '@angular/material-moment-adapter',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/platform-server',
    '@angular/router',
    '@nguniversal/builders',
    '@nguniversal/common',
    '@nguniversal/express-engine',
    'quill',
    'primeflex',
    'chart.js',
    'primeicons',
    'rxjs',
    'tslib',
    'zone.js'
];

const getAppDependencies = () => {
    const dependencies = {};
    for (const key in app_dependencies) {
        if (demoDependencies.includes(key)) {
            dependencies[key] = app_dependencies[key];
        }
    }

    return dependencies;
};

const getDependencies = () => {
    const appDependencies = getAppDependencies();

    const dependencies = {
        primeng: PrimeNG.version,
        ...appDependencies
    };

    return dependencies;
};

const getServiceImports = (service: string[]) => {
    return service.map((s) => `import { ${s} } from 'src/service/${s.toLowerCase()}';`).join('');
};

const getComponentName = (selector: string) => {
    return selector
        .split('-')
        .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
        .join('');
};

const getExternalFiles = (files: ExtFile[]) => {
    const extFiles = {};
    if (files && files.length > 0) {
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            extFiles[file.path] = { content: file.content };
        }
    }

    return extFiles;
};

const getRouteImports = (files: RouteFile[], selector?: string) => {
    let routeFiles = '';
    files.forEach((file) => {
        routeFiles += `import { ${file.name} } from 'src/app/demo/${file.name.toLowerCase()}';\n`;
    });

    return selector ? routeFiles + `import { ${getComponentName(selector)} } from 'src/app/demo/${selector}';` : routeFiles;
};

const staticStyles = {
    global: `html {
    font-size: 14px;
}

body {
    font-family: var(--font-family);
    font-weight: normal;
    background: var(--surface-ground);
    color: var(--text-color);
    padding: 1rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.card {
    background: var(--surface-card);
    padding: 2rem;
    border-radius: 10px;
    margin-bottom: 1rem;
}
    `,
    flags: `span.flag{width:44px;height:30px;display:inline-block;}img.flag{width:30px}.flag{background:url(https://primefaces.org/cdn/primeng/images/flag/flags_responsive.png) no-repeat;background-size:100%;vertical-align: middle;}.flag-ad{background-position:0 .413223%}.flag-ae{background-position:0 .826446%}.flag-af{background-position:0 1.239669%}.flag-ag{background-position:0 1.652893%}.flag-ai{background-position:0 2.066116%}.flag-al{background-position:0 2.479339%}.flag-am{background-position:0 2.892562%}.flag-an{background-position:0 3.305785%}.flag-ao{background-position:0 3.719008%}.flag-aq{background-position:0 4.132231%}.flag-ar{background-position:0 4.545455%}.flag-as{background-position:0 4.958678%}.flag-at{background-position:0 5.371901%}.flag-au{background-position:0 5.785124%}.flag-aw{background-position:0 6.198347%}.flag-az{background-position:0 6.61157%}.flag-ba{background-position:0 7.024793%}.flag-bb{background-position:0 7.438017%}.flag-bd{background-position:0 7.85124%}.flag-be{background-position:0 8.264463%}.flag-bf{background-position:0 8.677686%}.flag-bg{background-position:0 9.090909%}.flag-bh{background-position:0 9.504132%}.flag-bi{background-position:0 9.917355%}.flag-bj{background-position:0 10.330579%}.flag-bm{background-position:0 10.743802%}.flag-bn{background-position:0 11.157025%}.flag-bo{background-position:0 11.570248%}.flag-br{background-position:0 11.983471%}.flag-bs{background-position:0 12.396694%}.flag-bt{background-position:0 12.809917%}.flag-bv{background-position:0 13.22314%}.flag-bw{background-position:0 13.636364%}.flag-by{background-position:0 14.049587%}.flag-bz{background-position:0 14.46281%}.flag-ca{background-position:0 14.876033%}.flag-cc{background-position:0 15.289256%}.flag-cd{background-position:0 15.702479%}.flag-cf{background-position:0 16.115702%}.flag-cg{background-position:0 16.528926%}.flag-ch{background-position:0 16.942149%}.flag-ci{background-position:0 17.355372%}.flag-ck{background-position:0 17.768595%}.flag-cl{background-position:0 18.181818%}.flag-cm{background-position:0 18.595041%}.flag-cn{background-position:0 19.008264%}.flag-co{background-position:0 19.421488%}.flag-cr{background-position:0 19.834711%}.flag-cu{background-position:0 20.247934%}.flag-cv{background-position:0 20.661157%}.flag-cx{background-position:0 21.07438%}.flag-cy{background-position:0 21.487603%}.flag-cz{background-position:0 21.900826%}.flag-de{background-position:0 22.31405%}.flag-dj{background-position:0 22.727273%}.flag-dk{background-position:0 23.140496%}.flag-dm{background-position:0 23.553719%}.flag-do{background-position:0 23.966942%}.flag-dz{background-position:0 24.380165%}.flag-ec{background-position:0 24.793388%}.flag-ee{background-position:0 25.206612%}.flag-eg{background-position:0 25.619835%}.flag-eh{background-position:0 26.033058%}.flag-er{background-position:0 26.446281%}.flag-es{background-position:0 26.859504%}.flag-et{background-position:0 27.272727%}.flag-fi{background-position:0 27.68595%}.flag-fj{background-position:0 28.099174%}.flag-fk{background-position:0 28.512397%}.flag-fm{background-position:0 28.92562%}.flag-fo{background-position:0 29.338843%}.flag-fr{background-position:0 29.752066%}.flag-ga{background-position:0 30.165289%}.flag-gd{background-position:0 30.578512%}.flag-ge{background-position:0 30.991736%}.flag-gf{background-position:0 31.404959%}.flag-gh{background-position:0 31.818182%}.flag-gi{background-position:0 32.231405%}.flag-gl{background-position:0 32.644628%}.flag-gm{background-position:0 33.057851%}.flag-gn{background-position:0 33.471074%}.flag-gp{background-position:0 33.884298%}.flag-gq{background-position:0 34.297521%}.flag-gr{background-position:0 34.710744%}.flag-gs{background-position:0 35.123967%}.flag-gt{background-position:0 35.53719%}.flag-gu{background-position:0 35.950413%}.flag-gw{background-position:0 36.363636%}.flag-gy{background-position:0 36.77686%}.flag-hk{background-position:0 37.190083%}.flag-hm{background-position:0 37.603306%}.flag-hn{background-position:0 38.016529%}.flag-hr{background-position:0 38.429752%}.flag-ht{background-position:0 38.842975%}.flag-hu{background-position:0 39.256198%}.flag-id{background-position:0 39.669421%}.flag-ie{background-position:0 40.082645%}.flag-il{background-position:0 40.495868%}.flag-in{background-position:0 40.909091%}.flag-io{background-position:0 41.322314%}.flag-iq{background-position:0 41.735537%}.flag-ir{background-position:0 42.14876%}.flag-is{background-position:0 42.561983%}.flag-it{background-position:0 42.975207%}.flag-jm{background-position:0 43.38843%}.flag-jo{background-position:0 43.801653%}.flag-jp{background-position:0 44.214876%}.flag-ke{background-position:0 44.628099%}.flag-kg{background-position:0 45.041322%}.flag-kh{background-position:0 45.454545%}.flag-ki{background-position:0 45.867769%}.flag-km{background-position:0 46.280992%}.flag-kn{background-position:0 46.694215%}.flag-kp{background-position:0 47.107438%}.flag-kr{background-position:0 47.520661%}.flag-kw{background-position:0 47.933884%}.flag-ky{background-position:0 48.347107%}.flag-kz{background-position:0 48.760331%}.flag-la{background-position:0 49.173554%}.flag-lb{background-position:0 49.586777%}.flag-lc{background-position:0 50%}.flag-li{background-position:0 50.413223%}.flag-lk{background-position:0 50.826446%}.flag-lr{background-position:0 51.239669%}.flag-ls{background-position:0 51.652893%}.flag-lt{background-position:0 52.066116%}.flag-lu{background-position:0 52.479339%}.flag-lv{background-position:0 52.892562%}.flag-ly{background-position:0 53.305785%}.flag-ma{background-position:0 53.719008%}.flag-mc{background-position:0 54.132231%}.flag-md{background-position:0 54.545455%}.flag-me{background-position:0 54.958678%}.flag-mg{background-position:0 55.371901%}.flag-mh{background-position:0 55.785124%}.flag-mk{background-position:0 56.198347%}.flag-ml{background-position:0 56.61157%}.flag-mm{background-position:0 57.024793%}.flag-mn{background-position:0 57.438017%}.flag-mo{background-position:0 57.85124%}.flag-mp{background-position:0 58.264463%}.flag-mq{background-position:0 58.677686%}.flag-mr{background-position:0 59.090909%}.flag-ms{background-position:0 59.504132%}.flag-mt{background-position:0 59.917355%}.flag-mu{background-position:0 60.330579%}.flag-mv{background-position:0 60.743802%}.flag-mw{background-position:0 61.157025%}.flag-mx{background-position:0 61.570248%}.flag-my{background-position:0 61.983471%}.flag-mz{background-position:0 62.396694%}.flag-na{background-position:0 62.809917%}.flag-nc{background-position:0 63.22314%}.flag-ne{background-position:0 63.636364%}.flag-nf{background-position:0 64.049587%}.flag-ng{background-position:0 64.46281%}.flag-ni{background-position:0 64.876033%}.flag-nl{background-position:0 65.289256%}.flag-no{background-position:0 65.702479%}.flag-np{background-position:0 66.115702%}.flag-nr{background-position:0 66.528926%}.flag-nu{background-position:0 66.942149%}.flag-nz{background-position:0 67.355372%}.flag-om{background-position:0 67.768595%}.flag-pa{background-position:0 68.181818%}.flag-pe{background-position:0 68.595041%}.flag-pf{background-position:0 69.008264%}.flag-pg{background-position:0 69.421488%}.flag-ph{background-position:0 69.834711%}.flag-pk{background-position:0 70.247934%}.flag-pl{background-position:0 70.661157%}.flag-pm{background-position:0 71.07438%}.flag-pn{background-position:0 71.487603%}.flag-pr{background-position:0 71.900826%}.flag-pt{background-position:0 72.31405%}.flag-pw{background-position:0 72.727273%}.flag-py{background-position:0 73.140496%}.flag-qa{background-position:0 73.553719%}.flag-re{background-position:0 73.966942%}.flag-ro{background-position:0 74.380165%}.flag-rs{background-position:0 74.793388%}.flag-ru{background-position:0 75.206612%}.flag-rw{background-position:0 75.619835%}.flag-sa{background-position:0 76.033058%}.flag-sb{background-position:0 76.446281%}.flag-sc{background-position:0 76.859504%}.flag-sd{background-position:0 77.272727%}.flag-se{background-position:0 77.68595%}.flag-sg{background-position:0 78.099174%}.flag-sh{background-position:0 78.512397%}.flag-si{background-position:0 78.92562%}.flag-sj{background-position:0 79.338843%}.flag-sk{background-position:0 79.752066%}.flag-sl{background-position:0 80.165289%}.flag-sm{background-position:0 80.578512%}.flag-sn{background-position:0 80.991736%}.flag-so{background-position:0 81.404959%}.flag-sr{background-position:0 81.818182%}.flag-ss{background-position:0 82.231405%}.flag-st{background-position:0 82.644628%}.flag-sv{background-position:0 83.057851%}.flag-sy{background-position:0 83.471074%}.flag-sz{background-position:0 83.884298%}.flag-tc{background-position:0 84.297521%}.flag-td{background-position:0 84.710744%}.flag-tf{background-position:0 85.123967%}.flag-tg{background-position:0 85.53719%}.flag-th{background-position:0 85.950413%}.flag-tj{background-position:0 86.363636%}.flag-tk{background-position:0 86.77686%}.flag-tl{background-position:0 87.190083%}.flag-tm{background-position:0 87.603306%}.flag-tn{background-position:0 88.016529%}.flag-to{background-position:0 88.429752%}.flag-tp{background-position:0 88.842975%}.flag-tr{background-position:0 89.256198%}.flag-tt{background-position:0 89.669421%}.flag-tv{background-position:0 90.082645%}.flag-tw{background-position:0 90.495868%}.flag-ty{background-position:0 90.909091%}.flag-tz{background-position:0 91.322314%}.flag-ua{background-position:0 91.735537%}.flag-ug{background-position:0 92.14876%}.flag-gb,.flag-uk{background-position:0 92.561983%}.flag-um{background-position:0 92.975207%}.flag-us{background-position:0 93.38843%}.flag-uy{background-position:0 93.801653%}.flag-uz{background-position:0 94.214876%}.flag-va{background-position:0 94.628099%}.flag-vc{background-position:0 95.041322%}.flag-ve{background-position:0 95.454545%}.flag-vg{background-position:0 95.867769%}.flag-vi{background-position:0 96.280992%}.flag-vn{background-position:0 96.694215%}.flag-vu{background-position:0 97.107438%}.flag-wf{background-position:0 97.520661%}.flag-ws{background-position:0 97.933884%}.flag-ye{background-position:0 98.347107%}.flag-za{background-position:0 98.760331%}.flag-zm{background-position:0 99.173554%}.flag-zr{background-position:0 99.586777%}.flag-zw{background-position:0 100%}`
};

const karma_conf_js = `
// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};`;

const test_ts = `
// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);`;

const editorconfig = `
# Editor configuration, see http://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
max_line_length = off
trim_trailing_whitespace = false
`;

const angular_json = `{
    "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
    "version": 1,
    "cli": {
      "analytics": false
    },
    "newProjectRoot": "projects",
    "projects": {
      "example-app": {
        "projectType": "application",
        "schematics": {
          "@schematics/angular:component": {
            "style": "scss"
          },
          "@schematics/angular:application": {
            "strict": true
          }
        },
        "root": "",
        "sourceRoot": "src",
        "prefix": "app",
        "architect": {
          "build": {
            "builder": "@angular-devkit/build-angular:browser",
            "options": {
              "outputPath": "dist/example-app",
              "index": "src/index.html",
              "main": "src/main.ts",
              "polyfills": ["zone.js"],
              "tsConfig": "tsconfig.app.json",
              "inlineStyleLanguage": "scss",
              "assets": ["src/assets"],
              "styles": [
                "src/styles.scss",
                "node_modules/primeicons/primeicons.css",
                "node_modules/primeng/resources/themes/lara-light-blue/theme.css",
                "node_modules/primeng/resources/primeng.min.css"
              ],
              "stylePreprocessorOptions": {
                "includePaths": ["node_modules/"]
              },
              "scripts": []
            },
            "configurations": {
              "production": {
                "budgets": [
                  {
                    "type": "initial",
                    "maximumWarning": "500kb",
                    "maximumError": "1mb"
                  },
                  {
                    "type": "anyComponentStyle",
                    "maximumWarning": "2kb",
                    "maximumError": "4kb"
                  }
                ],
                "outputHashing": "all"
              },
              "development": {
                "buildOptimizer": false,
                "optimization": false,
                "vendorChunk": true,
                "extractLicenses": false,
                "sourceMap": true,
                "namedChunks": true
              }
            },
            "defaultConfiguration": "production"
          },
          "serve": {
            "builder": "@angular-devkit/build-angular:dev-server",
            "configurations": {
              "production": {
                "buildTarget": "example-app:build:production"
              },
              "development": {
                "buildTarget": "example-app:build:development"
              }
            },
            "defaultConfiguration": "development"
          },
          "extract-i18n": {
            "builder": "@angular-devkit/build-angular:extract-i18n",
            "options": {
              "browserTarget": "example-app:build"
            }
          },
          "test": {
            "builder": "@angular-devkit/build-angular:karma",
            "options": {
              "main": "src/test.ts",
              "polyfills": ["zone.js"],
              "tsConfig": "tsconfig.spec.json",
              "karmaConfig": "karma.conf.js",
              "inlineStyleLanguage": "scss",
              "assets": ["src/assets"],
              "stylePreprocessorOptions": {
                "includePaths": ["node_modules/"]
              },
              "styles": [
                "src/styles.scss",
                "node_modules/primeicons/primeicons.css",
                "node_modules/primeng/resources/themes/lara-light-blue/theme.css",
                "node_modules/primeng/resources/primeng.min.css"
              ],
              "scripts": [],
              "allowedCommonJsDependencies": [
                "chart.js",
                "xlsx",
                "jspdf-autotable",
                "file-saver",
                "jspdf",
                "quill"
              ]
            }
          }
        }
      }
    }
  }`;

const tsconfig_app_json = `{
    "extends": "./tsconfig.json",
    "compilerOptions": {
      "outDir": "./out-tsc/app",
      "types": []
    },
    "files": [
      "src/main.ts"
    ],
    "include": [
      "src/**/*.d.ts"
    ]
}`;

const tsconfig_json = `{
    "compileOnSave": false,
    "compilerOptions": {
      "baseUrl": "./",
      "outDir": "./dist/out-tsc",
      "sourceMap": true,
      "declaration": false,
      "module": "es2022",
      "moduleResolution": "node",
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "target": "es2022",
      "typeRoots": [
        "node_modules/@types"
      ],
      "lib": [
        "es2022",
        "dom"
      ],
      "paths": {
        "@domain/*": ["src/domain/*"],
        "@service/*": ["src/service/*"]
      }
    }
}`;

const tsconfig_spec_json = `{
    "extends": "../tsconfig.json",
    "compilerOptions": {
      "outDir": "../out-tsc/spec",
      "types": [
        "jasmine",
        "node"
      ]
    },
    "files": [
      "test.ts"
    ],
    "include": [
      "**/*.spec.ts",
      "**/*.d.ts"
    ]
}`;

const getAngularApp = (props: Props = {}) => {
    const { code, extFiles, routeFiles, selector } = props;
    const dependencies = getDependencies();
    const componentName = getComponentName(selector);
    const externalFiles = getExternalFiles(extFiles);
    const _routeFiles = getExternalFiles(routeFiles);
    const routeImports = getRouteImports(routeFiles, selector);
    const serviceImports = code.service ? getServiceImports(code.service) : '';
    const routerModule = code.routerModule ? code.routerModule : `RouterModule.forRoot([{ path: '', component: ${componentName} }])`;
    const declarations = routeFiles && routeFiles.length ? (componentName ? routeFiles.map((r) => r.name).join(', ') + ',' + componentName : routeFiles.map((r) => r.name).join(', ')) : `${componentName}`;
    const providers = code.service && code.service.length ? code.service.map((s) => s).join(', ') : '';

    const imports_ts = `// Import PrimeNG modules
    import { AccordionModule } from '@jacobg213/primeng-17/accordion';
    import { AutoCompleteModule } from '@jacobg213/primeng-17/autocomplete';
    import { AvatarModule } from '@jacobg213/primeng-17/avatar';
    import { AvatarGroupModule } from '@jacobg213/primeng-17/avatargroup';
    import { BadgeModule } from '@jacobg213/primeng-17/badge';
    import { BreadcrumbModule } from '@jacobg213/primeng-17/breadcrumb';
    import { ButtonModule } from '@jacobg213/primeng-17/button';
    import { ButtonGroupModule } from '@jacobg213/primeng-17/buttongroup';
    import { CalendarModule } from '@jacobg213/primeng-17/calendar';
    import { CarouselModule } from '@jacobg213/primeng-17/carousel';
    import { CascadeSelectModule } from '@jacobg213/primeng-17/cascadeselect';
    import { ChartModule } from '@jacobg213/primeng-17/chart';
    import { CheckboxModule } from '@jacobg213/primeng-17/checkbox';
    import { ChipModule } from '@jacobg213/primeng-17/chip';
    import { ChipsModule } from '@jacobg213/primeng-17/chips';
    import { ConfirmDialogModule } from '@jacobg213/primeng-17/confirmdialog';
    import { ConfirmPopupModule } from '@jacobg213/primeng-17/confirmpopup';
    import { ColorPickerModule } from '@jacobg213/primeng-17/colorpicker';
    import { ContextMenuModule } from '@jacobg213/primeng-17/contextmenu';
    import { DataViewModule } from '@jacobg213/primeng-17/dataview';
    import { VirtualScrollerModule } from '@jacobg213/primeng-17/virtualscroller';
    import { DialogModule } from '@jacobg213/primeng-17/dialog';
    import { DividerModule } from '@jacobg213/primeng-17/divider';
    import { DockModule } from '@jacobg213/primeng-17/dock';
    import { DragDropModule } from '@jacobg213/primeng-17/dragdrop';
    import { DropdownModule } from '@jacobg213/primeng-17/dropdown';
    import { DynamicDialogModule } from '@jacobg213/primeng-17/dynamicdialog';
    import { DeferModule } from '@jacobg213/primeng-17/defer';
    import { EditorModule } from '@jacobg213/primeng-17/editor';
    import { FieldsetModule } from '@jacobg213/primeng-17/fieldset';
    import { FileUploadModule } from '@jacobg213/primeng-17/fileupload';
    import { FocusTrapModule } from '@jacobg213/primeng-17/focustrap';
    import { GalleriaModule } from '@jacobg213/primeng-17/galleria';
    import { InplaceModule } from '@jacobg213/primeng-17/inplace';
    import { InputMaskModule } from '@jacobg213/primeng-17/inputmask';
    import { InputSwitchModule } from '@jacobg213/primeng-17/inputswitch';
    import { InputTextModule } from '@jacobg213/primeng-17/inputtext';
    import { InputNumberModule } from '@jacobg213/primeng-17/inputnumber';
    import { InputTextareaModule } from '@jacobg213/primeng-17/inputtextarea';
    import { InputGroupAddonModule } from '@jacobg213/primeng-17/inputgroupaddon';
    import { InputGroupModule } from '@jacobg213/primeng-17/inputgroup';
    import { InputOtpModule } from '@jacobg213/primeng-17/inputotp';
    import { ImageModule } from '@jacobg213/primeng-17/image';
    import { KnobModule } from '@jacobg213/primeng-17/knob';
    import { ListboxModule } from '@jacobg213/primeng-17/listbox';
    import { MegaMenuModule } from '@jacobg213/primeng-17/megamenu';
    import { MenuModule } from '@jacobg213/primeng-17/menu';
    import { MenubarModule } from '@jacobg213/primeng-17/menubar';
    import { MessageModule } from '@jacobg213/primeng-17/message';
    import { MessagesModule } from '@jacobg213/primeng-17/messages';
    import { MultiSelectModule } from '@jacobg213/primeng-17/multiselect';
    import { MeterGroupModule } from '@jacobg213/primeng-17/metergroup';
    import { OrderListModule } from '@jacobg213/primeng-17/orderlist';
    import { OrganizationChartModule } from '@jacobg213/primeng-17/organizationchart';
    import { OverlayPanelModule } from '@jacobg213/primeng-17/overlaypanel';
    import { PaginatorModule } from '@jacobg213/primeng-17/paginator';
    import { PanelModule } from '@jacobg213/primeng-17/panel';
    import { PanelMenuModule } from '@jacobg213/primeng-17/panelmenu';
    import { PasswordModule } from '@jacobg213/primeng-17/password';
    import { PickListModule } from '@jacobg213/primeng-17/picklist';
    import { ProgressBarModule } from '@jacobg213/primeng-17/progressbar';
    import { RadioButtonModule } from '@jacobg213/primeng-17/radiobutton';
    import { RatingModule } from '@jacobg213/primeng-17/rating';
    import { ScrollerModule } from '@jacobg213/primeng-17/scroller';
    import { ScrollPanelModule } from '@jacobg213/primeng-17/scrollpanel';
    import { ScrollTopModule } from '@jacobg213/primeng-17/scrolltop';
    import { SelectButtonModule } from '@jacobg213/primeng-17/selectbutton';
    import { SidebarModule } from '@jacobg213/primeng-17/sidebar';
    import { SkeletonModule } from '@jacobg213/primeng-17/skeleton';
    import { SlideMenuModule } from '@jacobg213/primeng-17/slidemenu';
    import { SliderModule } from '@jacobg213/primeng-17/slider';
    import { SpeedDialModule } from '@jacobg213/primeng-17/speeddial';
    import { SpinnerModule } from '@jacobg213/primeng-17/spinner';
    import { SplitButtonModule } from '@jacobg213/primeng-17/splitbutton';
    import { SplitterModule } from '@jacobg213/primeng-17/splitter';
    import { StepperModule } from '@jacobg213/primeng-17/stepper';
    import { StepsModule } from '@jacobg213/primeng-17/steps';
    import { TabMenuModule } from '@jacobg213/primeng-17/tabmenu';
    import { TableModule } from '@jacobg213/primeng-17/table';
    import { TabViewModule } from '@jacobg213/primeng-17/tabview';
    import { TagModule } from '@jacobg213/primeng-17/tag';
    import { TerminalModule } from '@jacobg213/primeng-17/terminal';
    import { TieredMenuModule } from '@jacobg213/primeng-17/tieredmenu';
    import { TimelineModule } from '@jacobg213/primeng-17/timeline';
    import { ToastModule } from '@jacobg213/primeng-17/toast';
    import { ToggleButtonModule } from '@jacobg213/primeng-17/togglebutton';
    import { ToolbarModule } from '@jacobg213/primeng-17/toolbar';
    import { TooltipModule } from '@jacobg213/primeng-17/tooltip';
    import { TriStateCheckboxModule } from '@jacobg213/primeng-17/tristatecheckbox';
    import { TreeModule } from '@jacobg213/primeng-17/tree';
    import { TreeSelectModule } from '@jacobg213/primeng-17/treeselect';
    import { TreeTableModule } from '@jacobg213/primeng-17/treetable';
    import { AnimateModule } from '@jacobg213/primeng-17/animate';
    import { AnimateOnScrollModule } from '@jacobg213/primeng-17/animateonscroll';
    import { CardModule } from '@jacobg213/primeng-17/card';
    import { BlockUIModule } from '@jacobg213/primeng-17/blockui';
    import { ProgressSpinnerModule } from '@jacobg213/primeng-17/progressspinner';
    import { RippleModule } from '@jacobg213/primeng-17/ripple';
    import { FloatLabelModule } from '@jacobg213/primeng-17/floatlabel';
    import { IconFieldModule } from '@jacobg213/primeng-17/iconfield';
    import { InputIconModule } from '@jacobg213/primeng-17/inputicon';
    import { StyleClassModule } from '@jacobg213/primeng-17/styleclass';
    import { AutoFocusModule } from '@jacobg213/primeng-17/autofocus';
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';
    import { HttpClientModule } from '@angular/common/http';
    import { NgModule } from '@angular/core';
    ${serviceImports}

    @NgModule({
      imports: [
        AvatarModule,
        AvatarGroupModule,
        AnimateOnScrollModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AccordionModule,
        AutoCompleteModule,
        BadgeModule,
        BreadcrumbModule,
        BlockUIModule,
        ButtonModule,
        ButtonGroupModule,
        CalendarModule,
        CarouselModule,
        CascadeSelectModule,
        ChartModule,
        CheckboxModule,
        ChipsModule,
        ChipModule,
        ColorPickerModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        ContextMenuModule,
        VirtualScrollerModule,
        DataViewModule,
        DialogModule,
        DividerModule,
        DockModule,
        DragDropModule,
        DropdownModule,
        DynamicDialogModule,
        DeferModule,
        EditorModule,
        FieldsetModule,
        FileUploadModule,
        FocusTrapModule,
        GalleriaModule,
        InplaceModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        InputNumberModule,
        InputGroupModule,
        InputGroupAddonModule,
        InputOtpModule,
        ImageModule,
        KnobModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        MeterGroupModule,
        OrganizationChartModule,
        OrderListModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressSpinnerModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        SelectButtonModule,
        SidebarModule,
        ScrollerModule,
        ScrollPanelModule,
        ScrollTopModule,
        SkeletonModule,
        SlideMenuModule,
        SliderModule,
        SpeedDialModule,
        SpinnerModule,
        SplitterModule,
        StepperModule,
        SplitButtonModule,
        StepsModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TagModule,
        TerminalModule,
        TieredMenuModule,
        TimelineModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TriStateCheckboxModule,
        TreeModule,
        TreeSelectModule,
        TreeTableModule,
        AnimateModule,
        CardModule,
        RippleModule,
        StyleClassModule,
        IconFieldModule,
        InputIconModule,
        AutoFocusModule
      ],
      exports: [
        AvatarModule,
        AvatarGroupModule,
        AnimateOnScrollModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AccordionModule,
        AutoCompleteModule,
        BadgeModule,
        BreadcrumbModule,
        BlockUIModule,
        ButtonModule,
        ButtonGroupModule,
        CalendarModule,
        CarouselModule,
        CascadeSelectModule,
        ChartModule,
        CheckboxModule,
        ChipsModule,
        ChipModule,
        ColorPickerModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        ContextMenuModule,
        VirtualScrollerModule,
        DataViewModule,
        DialogModule,
        DividerModule,
        DeferModule,
        DockModule,
        DragDropModule,
        DropdownModule,
        DynamicDialogModule,
        EditorModule,
        FieldsetModule,
        FileUploadModule,
        FocusTrapModule,
        GalleriaModule,
        InplaceModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        InputNumberModule,
        InputGroupModule,
        InputGroupAddonModule,
        InputOtpModule,
        ImageModule,
        KnobModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        MeterGroupModule,
        OrganizationChartModule,
        OrderListModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressSpinnerModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        SelectButtonModule,
        SidebarModule,
        ScrollerModule,
        ScrollPanelModule,
        ScrollTopModule,
        SkeletonModule,
        SlideMenuModule,
        SliderModule,
        SpeedDialModule,
        SpinnerModule,
        SplitterModule,
        StepperModule,
        SplitButtonModule,
        StepsModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TagModule,
        TerminalModule,
        TieredMenuModule,
        TimelineModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TriStateCheckboxModule,
        TreeModule,
        TreeSelectModule,
        TreeTableModule,
        AnimateModule,
        CardModule,
        RippleModule,
        StyleClassModule,
        FloatLabelModule,
        IconFieldModule,
        InputIconModule,
        AutoFocusModule
      ],
      providers: [ ${providers} ]
    })
    export class ImportsModule {}
    `;

    const index_html = `
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>PrimeNG ${componentName}</title>
        <base href="/">

        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://unpkg.com/primeflex/primeflex.css" rel="stylesheet" />
        <link href="https://unpkg.com/primeicons/primeicons.css" rel="stylesheet" />
        <link href="https://unpkg.com/quill@1.3.7/dist/quill.snow.css" rel="stylesheet" />
        <link rel="icon" type="image/x-icon" href="https://primefaces.org/cdn/primeng/images/favicon.png">
    </head>
    <body>
        <${selector}></${selector}>
    </body>
</html>`;

    const main_ts = `import { bootstrapApplication } from '@angular/platform-browser';
import { ${componentName} } from './app/${selector}';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Routes, provideRouter } from '@angular/router';

const routes: Routes = [];

bootstrapApplication(${componentName}, {
providers: [provideAnimationsAsync(), provideRouter(routes)],
}).catch((err) => console.error(err));`;

    const defaultFiles = {
        'src/main.ts': { content: main_ts },
        'src/test.ts': { content: test_ts },
        'tsconfig.json': { content: tsconfig_json },
        'tsconfig.app.json': { content: tsconfig_app_json },
        'tsconfig.spec.json': { content: tsconfig_spec_json },
        '.editorconfig': { content: editorconfig },
        'angular.json': { content: angular_json },
        'src/app/imports.ts': { content: imports_ts },
        'src/index.html': { content: index_html },
        'src/karma.conf.js': { content: karma_conf_js },
        'src/styles.scss': { content: staticStyles.global },
        'src/flags.css': { content: staticStyles.flags }
    };

    const files = {
        'package.json': {
            content: {
                name: `primeng-${selector}`,
                description: `PrimeNG ${componentName}`,
                license: 'MIT',
                keywords: [],
                scripts: {
                    ng: 'ng',
                    start: 'ng serve',
                    build: 'ng build',
                    test: 'ng test'
                },
                dependencies: {
                    ...dependencies
                }
            }
        },

        [`src/app/${selector}.ts`]: { content: code.typescript.trim() },
        [`src/app/${selector}.html`]: { content: code.html.trim() },
        ...defaultFiles,
        ...externalFiles,
        ..._routeFiles
    };

    if (code.service) {
        code.service.forEach((name) => {
            files[`src/service/${name.toLowerCase()}.ts`] = {
                content: services[name]
            };
        });
    }

    return { files, title: `PrimeNG ${componentName}` };
};

export { getAngularApp };
