import * as mongoose from 'mongoose';
import * as auditLog from './auditlog';

export interface Definitions {
  auditLog: {
    name: string;
    schema: mongoose.Schema<
      auditLog.AuditLogDocument,
      mongoose.Model<auditLog.AuditLogDocument>
    >;
    createModel: typeof createModel;
  };
}

/**
 * Create model class
 */
export const createModel = <D extends mongoose.Document>(
  c: mongoose.Connection,
  name: string,
  schema: mongoose.Schema<D, mongoose.Model<D>>
): mongoose.Model<D> => {
  const Model = c.model<D>(name, schema);
  return Model;
};

export type Model = typeof createModel;

/**
 * Models by collection (interface)
 */
export interface Models {
  auditLog: {
    Model: auditLog.AuditModel;
  };
}
