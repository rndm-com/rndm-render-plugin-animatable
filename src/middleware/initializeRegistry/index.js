import method from './_utils/method';
import resolve from './_utils/resolve';

const connect = {
  type: 'initializeRegistry',
  value: {
    method,
    resolve,
  },
};

export default connect;
