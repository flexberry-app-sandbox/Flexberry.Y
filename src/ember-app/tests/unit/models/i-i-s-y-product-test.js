import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-y-product', 'Unit | Model | i-i-s-y-product', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-y-client',
    'model:i-i-s-y-product',
    'model:i-i-s-y-sale',
    'model:i-i-s-y-saleitem',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
