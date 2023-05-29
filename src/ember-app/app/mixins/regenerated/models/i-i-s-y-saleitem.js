import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  amount: DS.attr('number'),
  product: DS.belongsTo('i-i-s-y-product', { inverse: null, async: false }),
  sale: DS.belongsTo('i-i-s-y-sale', { inverse: 'saleitem', async: false })
});

export let ValidationRules = {
  amount: {
    descriptionKey: 'models.i-i-s-y-saleitem.validations.amount.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  product: {
    descriptionKey: 'models.i-i-s-y-saleitem.validations.product.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  sale: {
    descriptionKey: 'models.i-i-s-y-saleitem.validations.sale.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('SaleitemE', 'i-i-s-y-saleitem', {
    amount: attr('Количество', { index: 0 }),
    product: belongsTo('i-i-s-y-product', 'Товар', {
      name: attr('Товар', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' })
  });
};
