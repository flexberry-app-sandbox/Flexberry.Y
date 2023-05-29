import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as SaleitemMixin
} from '../mixins/regenerated/models/i-i-s-y-saleitem';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(SaleitemMixin, Validations, {
});

defineProjections(Model);

export default Model;
