import { use } from '@rndm/render';
import components from './components';

const plugin = {
  key: 'animatable',
  components,
};

use(plugin);

export default plugin;
