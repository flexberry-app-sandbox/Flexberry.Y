import { Serializer as ProductSerializer } from
  '../mixins/regenerated/serializers/i-i-s-y-product';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ProductSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
