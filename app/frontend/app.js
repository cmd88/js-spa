import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { handleStore } from './store/store';
import './app.scss';

let startTimeLoad = Date.now();

$(() => {
  let store = handleStore(() => {
    if(store.pageIsLoad) {
      if(Date.now() - startTimeLoad > 1000) { // show screen saver min 1 sec
        $('#screensaver').remove();
        $('#load-time').text(`${Date.now() - startTimeLoad} ms`);

        // init router
        import( /* webpackChunkName: "Router" */ './router')
          .catch(error => 'An error occurred while loading Module');
      } else {
        setTimeout(() => {
          store.pageIsLoad = true;
        }, 1001 - (Date.now() - startTimeLoad));
      }
    }
  });

  // render Header
  import( /* webpackChunkName: "Header" */ './components/header/Header')
    .then(lazyModule => {
      $('#header').html(lazyModule.Header.init());
      store.headerIsLoad = true;
    })
    .catch(error => 'An error occurred while loading Module');

  // render Footer
  import( /* webpackChunkName: "Footer" */ './components/footer/Footer')
    .then(lazyModule => {
      $('#footer').html(lazyModule.Footer.render());
      store.footerIsLoad = true;
    })
    .catch(error => 'An error occurred while loading Module');

});


