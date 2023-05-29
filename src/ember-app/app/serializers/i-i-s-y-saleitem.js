import { Serializer as SaleitemSerializer } from
  '../mixins/regenerated/serializers/i-i-s-y-saleitem';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(SaleitemSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
