import { profileHandler } from '../controllers/requests';

const ServiceWorker = {
  init() {
    console.log('init ServiceWorker');
    if ('serviceWorker' in navigator) {
      this._registerWorker();
      this._listenMessage();
    }
  },

  _registerWorker() {
    navigator.serviceWorker.register('./../sw.js')
      .then(() => navigator.serviceWorker.ready.then((worker) => {
        worker.sync.register('syncdata');

      }))
      .catch((err) => console.log(err));
  },

  _listenMessage() {
    navigator.serviceWorker.addEventListener('message', function(event){
      const { type, action } = JSON.parse(event.data);

      switch(type) {
        case 'profile':
          if(action === 'updated') {
           console.log('request "/profile" was updated in cache');
           // TODO: if need update data, set header ETag in request and handle it
          }
          break;
        default:
          break;
      }
    });
  }
};

export { ServiceWorker };
