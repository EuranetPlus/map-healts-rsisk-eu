import { writable } from 'svelte/store';
export const mapConfig = writable({
  "title": "How much is air pollution costing our health?",
  "subtitle": "The average health costs per capita in the EU due to air pollution aggregates to 1276€ per year.",
  "colourSchemeClasses": 7,
  "data": "country,id,value,extraInfo\nAustria,AT,1403\nBelgium,BE,1214\nBulgaria,BG,1262\nCroatia,HR,1710\nCyprus,CY,929\nCzech Republic,CZ,1393\nDenmark,DK,1129\nEstonia,EE,584\nFinland,FI,599\nFrance,FR,774\nGermany,DE,1382\nGreece,EL,1434\nHungary,HU,1192\nIreland,IE,796\nItaly,IT,1377\nLatvia,LV,1401\nLithuania,LT,1234\nLuxembourg,LU,1748\nMalta,MT,1246\nNetherlands,NL,1143\nPoland,PL,1373\nPortugal,PT,817\nRomania,RO,1508\nSlovakia,SK,1488\nSlovenia,SI,1502\nSpain,ES,832\nSweden,SE,760",
  "parsedData": [
    {
      "country": "Austria",
      "id": "AT",
      "value": 1403,
      "extraInfo": false
    },
    {
      "country": "Belgium",
      "id": "BE",
      "value": 1214,
      "extraInfo": false
    },
    {
      "country": "Bulgaria",
      "id": "BG",
      "value": 1262,
      "extraInfo": false
    },
    {
      "country": "Croatia",
      "id": "HR",
      "value": 1710,
      "extraInfo": false
    },
    {
      "country": "Cyprus",
      "id": "CY",
      "value": 929,
      "extraInfo": false
    },
    {
      "country": "Czech Republic",
      "id": "CZ",
      "value": 1393,
      "extraInfo": false
    },
    {
      "country": "Denmark",
      "id": "DK",
      "value": 1129,
      "extraInfo": false
    },
    {
      "country": "Estonia",
      "id": "EE",
      "value": 584,
      "extraInfo": false
    },
    {
      "country": "Finland",
      "id": "FI",
      "value": 599,
      "extraInfo": false
    },
    {
      "country": "France",
      "id": "FR",
      "value": 774,
      "extraInfo": false
    },
    {
      "country": "Germany",
      "id": "DE",
      "value": 1382,
      "extraInfo": false
    },
    {
      "country": "Greece",
      "id": "EL",
      "value": 1434,
      "extraInfo": false
    },
    {
      "country": "Hungary",
      "id": "HU",
      "value": 1192,
      "extraInfo": false
    },
    {
      "country": "Ireland",
      "id": "IE",
      "value": 796,
      "extraInfo": false
    },
    {
      "country": "Italy",
      "id": "IT",
      "value": 1377,
      "extraInfo": false
    },
    {
      "country": "Latvia",
      "id": "LV",
      "value": 1401,
      "extraInfo": false
    },
    {
      "country": "Lithuania",
      "id": "LT",
      "value": 1234,
      "extraInfo": false
    },
    {
      "country": "Luxembourg",
      "id": "LU",
      "value": 1748,
      "extraInfo": false
    },
    {
      "country": "Malta",
      "id": "MT",
      "value": 1246,
      "extraInfo": false
    },
    {
      "country": "Netherlands",
      "id": "NL",
      "value": 1143,
      "extraInfo": false
    },
    {
      "country": "Poland",
      "id": "PL",
      "value": 1373,
      "extraInfo": false
    },
    {
      "country": "Portugal",
      "id": "PT",
      "value": 817,
      "extraInfo": false
    },
    {
      "country": "Romania",
      "id": "RO",
      "value": 1508,
      "extraInfo": false
    },
    {
      "country": "Slovakia",
      "id": "SK",
      "value": 1488,
      "extraInfo": false
    },
    {
      "country": "Slovenia",
      "id": "SI",
      "value": 1502,
      "extraInfo": false
    },
    {
      "country": "Spain",
      "id": "ES",
      "value": 832,
      "extraInfo": false
    },
    {
      "country": "Sweden",
      "id": "SE",
      "value": 760,
      "extraInfo": false
    }
  ],
  "datasetType": "values",
  "datasetUnit": "fullNumbers",
  "percentRounded": false,
  "colourSchemeType": "sequential",
  "colourScheme": "red",
  "colourSchemeReverse": false,
  "headlineAvailable": true,
  "subheadlineAvailable": true,
  "tooltipAvailable": true,
  "scaleBarAvailable": true,
  "overrideScaleValues": true,
  "legendAvailable": true,
  "textSourceAvailable": true,
  "textSourceDescription": "Source",
  "textSource": "European Public Health Alliance (2018)",
  "textNoteAvailable": true,
  "textNoteDescription": "Note",
  "textNote": "The study has been conducted in 2018 for 432 selected cities in Europe. The visible country-specific figures were calculated as average on basis of the figures which are given for the examined cities in the respective country.",
  "textDataAccessAvailable": true,
  "linkDataAccessDescription": "Access the data",
  "linkDataAccess": "https://epha.org/how-much-is-air-pollution-costing-our-health/",
  "legend1": "No data available",
  "legend1Color": "#E0E0E0",
  "colorBarFirstValue": "500",
  "colorBarLastValue": "1794",
  "customUnitLabelAvailable": true,
  "customUnitLabel": "€ per capita",
  "tooltipExtraInfoLabel": "Click here",
  "translate": {
    "title": "How much is air pollution costing our health?",
    "subtitle": "The average health costs per capita in the EU due to air pollution aggregates to 1276€ per year.",
    "textNoteDescription": "Note",
    "textNote": "The study has been conducted in 2018 for 432 selected cities in Europe. The visible country-specific figures were calculated as average on basis of the figures which are given for the examined cities in the respective country.",
    "textSourceDescription": "Source",
    "textSource": "European Public Health Alliance (2018)",
    "linkDataAccessDescription": "Access the data",
    "legend1": "No data available",
    "tooltipExtraInfoLabel": "Click here"
  },
  "clusters": [],
  "colorScale": null
});