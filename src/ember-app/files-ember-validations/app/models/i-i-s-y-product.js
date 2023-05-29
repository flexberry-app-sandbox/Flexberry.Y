import {
  defineNamespace,
  defineProjections,
  Model as ProductMixin
} from '../mixins/regenerated/models/i-i-s-y-product';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ProductMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
