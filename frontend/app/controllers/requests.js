import { profile } from '../requests/axios';
import { handleStore } from '../store/store';

const profileHandler = () => {
  profile().then(response => {
    const { data } = response;
    let store = handleStore();
    store.profile = data;
    console.log(store);
  });
};

export { profileHandler };