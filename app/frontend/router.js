import Router from 'vanilla-router';

const router = new Router({
  mode: 'history',
  page404: function (path) {
    console.log('"/' + path + '" Page not found');
  }
});

router.add('', function () {
  console.log('Home page');
  import( /* webpackChunkName: "Main" */ './pages/main/Main')
    .then(lazyModule => {
      $("#content").html(lazyModule.MainPage.render('main title'));
    })
    .catch(error => 'An error occurred while loading Module');
});

router.add('profile', function () {
  console.log('redirect to profile');

  import( /* webpackChunkName: "Main" */ './pages/main/Main')
    .then(lazyModule => {
      $("#content").html(lazyModule.MainPage.render('profile page'));
    })
    .catch(error => 'An error occurred while loading Module');
});

router.add('main', function () {
  console.log('redirect to main');

  import( /* webpackChunkName: "Main" */ './pages/main/Main')
    .then(lazyModule => {
      $("#content").html(lazyModule.MainPage.render('main page'));
    })
    .catch(error => 'An error occurred while loading Module');
});

router.add('structure', function () {
  console.log('redirect to structure');

  import( /* webpackChunkName: "Main" */ './pages/main/Main')
    .then(lazyModule => {
      $("#content").html(lazyModule.MainPage.render('structure page'));
    })
    .catch(error => 'An error occurred while loading Module');
});

router.add('theory', function () {
  console.log('redirect to theory');

  import( /* webpackChunkName: "Main" */ './pages/main/Main')
    .then(lazyModule => {
      $("#content").html(lazyModule.MainPage.render('theory page'));
    })
    .catch(error => 'An error occurred while loading Module');
});

router.addUriListener();

// router.navigateTo('/');

export { router };