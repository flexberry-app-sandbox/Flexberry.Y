import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  price: DS.attr('decimal')
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-y-product.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  price: {
    descriptionKey: 'models.i-i-s-y-product.validations.price.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ProductE', 'i-i-s-y-product', {
    name: attr('Название', { index: 0 }),
    price: attr('Цена', { index: 1 })
  });

  modelClass.defineProjection('ProductL', 'i-i-s-y-product', {
    name: attr('Название', { index: 0 }),
    price: attr('Цена', { index: 1 })
  });
};
