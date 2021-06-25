import { fromGlobalId } from 'graphql-relay';
import { Types, Document } from 'mongoose';

// returns an ObjectId given an param of unknown type
export const getObjectId = (target: string | Document | Types.ObjectId): Types.ObjectId | null => {
  if (target instanceof Types.ObjectId) {
    return new Types.ObjectId(target.toString());
  }

  if (typeof target === 'object' && target instanceof Document) {
    return target && target._id ? new Types.ObjectId(target._id) : null;
  }

  if (Types.ObjectId.isValid(target)) {
    return new Types.ObjectId(target.toString());
  }

  if (typeof target === 'string') {
    const result = fromGlobalId(target);

    if (result.type && result.id && Types.ObjectId.isValid(result.id)) {
      return new Types.ObjectId(result.id);
    }

    if (Types.ObjectId.isValid(target)) {
      return new Types.ObjectId(target);
    }

    return null;
  }

  return null;
};
