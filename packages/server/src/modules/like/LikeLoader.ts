import { createLoader } from '@world/graphql';

import { registerLoader } from '../loader/loaderRegister';

import LikeModel from './LikeModel';
import { likeFilterMapping } from './LikeFilterInputType';

const {
  Wrapper: Like,
  getLoader,
  clearCache,
  load,
  loadAll,
} = createLoader({
  model: LikeModel,
  loaderName: 'LikeLoader',
  filterMapping: likeFilterMapping,
});

export { getLoader, clearCache, load, loadAll };

export default Like;

registerLoader('LikeLoader', getLoader);
