import {
  defineNamespace,
  defineProjections,
  Model as SaleMixin
} from '../mixins/regenerated/models/i-i-s-y-sale';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(SaleMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
