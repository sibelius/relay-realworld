import { GraphQLID, GraphQLInputObjectType } from 'graphql';

import { FILTER_CONDITION_TYPE } from '@entria/graphql-mongo-helpers';

import { getObjectId } from '@world/graphql';

export const likeFilterMapping = {
  user: {
    type: FILTER_CONDITION_TYPE.MATCH_1_TO_1,
    format: (val: string) => val && getObjectId(val),
  },
  post: {
    type: FILTER_CONDITION_TYPE.MATCH_1_TO_1,
    format: (val: string) => val && getObjectId(val),
  },
  comment: {
    type: FILTER_CONDITION_TYPE.MATCH_1_TO_1,
    format: (val: string) => val && getObjectId(val),
  },
};

const LikeFilterInputType = new GraphQLInputObjectType({
  name: 'LikeFilter',
  description: 'Used to filter likes',
  fields: () => ({
    user: {
      type: GraphQLID,
    },
    post: {
      type: GraphQLID,
    },
    comment: {
      type: GraphQLID,
    },
  }),
});

export default LikeFilterInputType;
