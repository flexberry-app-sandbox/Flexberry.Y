import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  saleDate: DS.attr('date'),
  client: DS.belongsTo('i-i-s-y-client', { inverse: null, async: false }),
  saleitem: DS.hasMany('i-i-s-y-saleitem', { inverse: 'sale', async: false })
});

export let ValidationRules = {
  saleDate: {
    descriptionKey: 'models.i-i-s-y-sale.validations.saleDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  client: {
    descriptionKey: 'models.i-i-s-y-sale.validations.client.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  saleitem: {
    descriptionKey: 'models.i-i-s-y-sale.validations.saleitem.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('SaleE', 'i-i-s-y-sale', {
    saleDate: attr('Дата продажи', { index: 0 }),
    client: belongsTo('i-i-s-y-client', 'Клиент', {
      name: attr('Клиент', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' }),
    saleitem: hasMany('i-i-s-y-saleitem', 'Товарная позиция', {
      amount: attr('Количество', { index: 0 }),
      product: belongsTo('i-i-s-y-product', 'Товар', {
        name: attr('Товар', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('SaleL', 'i-i-s-y-sale', {
    saleDate: attr('Дата продажи', { index: 0 }),
    client: belongsTo('i-i-s-y-client', 'Клиент', {
      name: attr('Клиент', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
