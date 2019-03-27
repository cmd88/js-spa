import Router from 'vanilla-router';

const $app = $('#app');

const router = new Router({
  mode: 'history',
  page404: (path) => {
    import( /* webpackChunkName: "Error" */ './pages/error/Error')
      .then(lazyModule => {
        $app.html(lazyModule.ErrorPage.render());
      })
      .catch(error => 'An error occurred while loading Module');
  }
});

router.add('/', function () {
  router.navigateTo('/main');
});


router.add('main', function () {
  import( /* webpackChunkName: "Main" */ './pages/main/Main')
    .then(lazyModule => {
      $app.html(lazyModule.MainPage.render('main page'));
    })
    .catch(error => 'An error occurred while loading Module');
});

router.add('profile', function () {
  import( /* webpackChunkName: "Profile" */ './pages/profile/Profile')
    .then(lazyModule => {
      $app.html(lazyModule.ProfilePage.render());
    })
    .catch(error => 'An error occurred while loading Module');
});

router.add('structure', function () {
  import( /* webpackChunkName: "Structure" */ './pages/structure/Structure')
    .then(lazyModule => {
      $app.html(lazyModule.StructurePage.render());
    })
    .catch(error => 'An error occurred while loading Module');
});

router.add('theory', function () {
  import( /* webpackChunkName: "Theory" */ './pages/theory/Theory')
    .then(lazyModule => {
      $app.html(lazyModule.TheoryPage.render());
    })
    .catch(error => 'An error occurred while loading Module');
});

router.addUriListener();

router.check();

export { router };