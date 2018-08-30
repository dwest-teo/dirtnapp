import register from './register';
import unregister from './unregister';

export default (process.env.NODE_ENV === 'production' ? register : unregister);
