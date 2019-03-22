import 'bootstrap';
import { handleStore } from './store/store';

$(() => {
  let store = handleStore(() => {
    if(store.pageIsLoad) {
      import( /* webpackChunkName: "Router" */ './router')
        .then(lazyModule => {
          console.log('Router loaded');

          $('#main').on('click', () => {
            lazyModule.router.navigateTo('/');
          });

          $('#description').on('click', () => {
            lazyModule.router.navigateTo('/description/2');
          });
        })
        .catch(error => 'An error occurred while loading Module');
    }
  });
  console.log('doc rdy');

  import( /* webpackChunkName: "Header" */ './templates/header/Header')
    .then(lazyModule => {
      console.log('Header loaded');

      $('#header').html(lazyModule.Header.render());
      store.headerIsLoad = true;
    })
    .catch(error => 'An error occurred while loading Module');

  import( /* webpackChunkName: "Footer" */ './templates/footer/Footer')
    .then(lazyModule => {
      console.log('Footer loaded');

      $('#footer').html(lazyModule.Footer.render());
      store.footerIsLoad = true;
    })
    .catch(error => 'An error occurred while loading Module');

});

console.log('app js!');


