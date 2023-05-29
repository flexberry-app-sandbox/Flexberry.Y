import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as SaleMixin
} from '../mixins/regenerated/models/i-i-s-y-sale';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(SaleMixin, Validations, {
});

defineProjections(Model);

export default Model;
