import {
  defineNamespace,
  defineProjections,
  Model as SaleitemMixin
} from '../mixins/regenerated/models/i-i-s-y-saleitem';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(SaleitemMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
