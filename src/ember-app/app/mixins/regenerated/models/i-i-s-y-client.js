import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  surname: DS.attr('string')
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-y-client.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  surname: {
    descriptionKey: 'models.i-i-s-y-client.validations.surname.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ClientE', 'i-i-s-y-client', {
    name: attr('Имя', { index: 0 }),
    surname: attr('Фамилия', { index: 1 })
  });

  modelClass.defineProjection('ClientL', 'i-i-s-y-client', {
    name: attr('Имя', { index: 0 }),
    surname: attr('Фамилия', { index: 1 })
  });
};
