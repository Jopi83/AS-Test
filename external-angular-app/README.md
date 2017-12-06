# External Angular App Example

This sample project exports a module that can be integrated into the *AdSolution Toolbox*

## Prerequisites

###Frontend

1. Everything that your module exports **must** be defined in the **index.ts** file.
2. Any service that retrieves data from a backend **must** expose the common base URL 
(in this example *SERVER_URL*). This is necessary for later production deployment.
3. The selector of your module component **must** match with the one in the integration 
point in the *AdSolutions Toolbox*.
4. Your application **should** use the same dependencies and versions as the Toolbox 
to have a consistent user experience.

###Backend

The backend of your application must provide a health endpoint that delivers content with
**Content-Type**  of **application/json** with the structure:

```javascript
{
    "status": "UP"
}
```

## Build instructions

Run *yarn package*. This will generate a *.tgz file in the *dist* directory of the project.
