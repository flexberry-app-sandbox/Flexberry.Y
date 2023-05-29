import { Serializer as SaleSerializer } from
  '../mixins/regenerated/serializers/i-i-s-y-sale';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(SaleSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
