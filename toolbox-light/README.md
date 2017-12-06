# AppSolutions Toolbox External App Integration

This project acts as a showcase how an external Angular project **must** be integrated into the 
**AdSolutions Toolbox**. It also demonstrates the layout constraints. 

It is stripped down to the bare minimum: 
* no authentication, settings dialogs, etc. 
* the i18n mechanism is available
* the sample external application has an entry in the left navigation menu

## Project structure

The dependencies used by the **AdSolutions Toolbox** are stored in package.json. Please make 
sure that your external application used a compatible Angular version.

Under *src/main/webapp/app/external-module/integration/external-integration.component.html* you 
find the entry point the external application **must provide** as a component 
(in this case it is *<app-external-integration></app-external-integration>*). 

## Usage

1. Copy your external app's module into the directory *external-modules* and reference it in the 
*package.json* file (e.g. *"external-app": "./external-modules/external-app-1.0.0.tgz",*). 
To build your module follow the **Build instructions** in the *external-angular-app* README file.
2. Run *yarn install*
3. Run *yarn start*
4. Your system's default browser will open
5. Select *'External'* from the left menu

