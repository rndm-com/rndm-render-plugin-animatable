import { use } from '@rndm/render';
import components from './components';
import middleware from './middleware';

const plugin = {
  key: 'animatable',
  components,
  middleware,
};

use(plugin);

export default plugin;
