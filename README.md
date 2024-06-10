# Kombo Typescript SDK

This is an unofficial Typescript SDK for the [Kombo.dev API](https://kombo.dev)

## Installation

In order to install the package, please run the following command:

```bash
npm install @maakle/kombo-sdk

#or

yarn add @maakle/kombo-sdk

```

## Usage

```typescript
import { Api } from "@maakle/kombo-sdk";

// Create client
const komboApi = new Api<string>({
  securityWorker: (accessToken) =>
    accessToken ? { headers: { Authorization: `Bearer ${accessToken}` } } : {},
});
// Set API Key
komboApi.setSecurityData("API_ACCESS_TOKEN");

// Use client to e.g. fetch all absence types, don't forget to set the integration id in the headers
const result = await komboApi.hris.getHrisAbsenceTypes(
  { page_size: 100 },
  { headers: { "x-integration-id": "INTEGRATION_ID" } }
);
console.log(result.data.data.results);
```


## Development

### How to build a new version of the SDK

Step 0: Download the openapi schema (`openapi.json`) from Kombo. And put it into this folder here

Step 1: Build the Api.ts file with new open api schema
`npx swagger-typescript-api -p openapi.json -o`

Step 2: cd into sdk folder, update package.json and bump version e.g. `1.X.0`

Step 3: Run `yarn build` to build new Api.js file in dist folder

Step 4: Run `yarn publish` to publish to npm. You need to define version and also cancel once published