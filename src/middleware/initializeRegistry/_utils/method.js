import * as Animatable from 'react-native-animatable';
import { identity } from 'lodash';

export default (...args) => {
  Animatable.initializeRegistryWithDefinitions(...args);
  return identity;
};
