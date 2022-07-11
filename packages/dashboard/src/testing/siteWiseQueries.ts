const STRING_ASSET_ID = 'f2f74fa8-625a-435f-b89c-d27b2d84f45b';

export const DEMO_TURBINE_ASSET_1 = '9caa2899-b690-43f2-9f90-746123147873';
export const DEMO_TURBINE_ASSET_1_PROPERTY_1 = '54ad4302-8c2a-4dc5-8589-399f01ce60e1';
export const DEMO_TURBINE_ASSET_1_PROPERTY_2 = 'eee9a1fb-6e7e-4300-9dae-e36ff7560948';
export const DEMO_TURBINE_ASSET_1_PROPERTY_3 = '170f3618-aed1-4f6c-8495-3832ba5a7cc8';
export const DEMO_TURBINE_ASSET_1_PROPERTY_4 = 'ca043971-41b6-4d91-8033-c11d48092629';

export const ASSET_DETAILS_QUERY = {
  assetId: STRING_ASSET_ID,
};

const AGGREGATED_DATA_ASSET = STRING_ASSET_ID;
const AGGREGATED_DATA_PROPERTY = 'd0dc79be-0dc2-418c-ac23-26f33cdb4b8b';
const AGGREGATED_DATA_PROPERTY_2 = '69607dc2-5fbe-416d-aac2-0382018626e4';

export const AGGREGATED_DATA_QUERY = {
  assets: [
    {
      assetId: AGGREGATED_DATA_ASSET,
      properties: [
        { propertyId: AGGREGATED_DATA_PROPERTY, resolution: '0', refId: 'testing' },
        { propertyId: AGGREGATED_DATA_PROPERTY_2 },
      ],
    },
  ],
};

// From demo turbine asset, found at https://p-rlvy2rj8.app.iotsitewise.aws/
// These resources will eventually expire and need to be manually updated,
// because the demo turbine assets expire after 7 days.
