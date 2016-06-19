var config = {
  'database': 'mongodb://127.0.0.1:27017/UdhaarManager',                                                  // database connection link
  'superSecretCustomer': 'appIdeasSecret',                                                        // key for generating for customer api token
  'superSecretAdmin': 'adminSecret',                                                              // key for generating admin api token
  'superSecretServiceman':'servicemanSecret',
  'GoogleApiKey': 'AIzaSyDrXPGpHU8bdvIX2FSM2eIedsHk7aNvLw4',
  'transactionKey': 'transactionKey',
  'vendorKey': 'vendorKey',
  'defaultUserPassword': 'XYZSAMPLEPASSWORD',
  'baseUrl':'http://localhost:1337/',
  'internalAPIPassword':'internalpassword'

};

module.exports = config;
