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
      $("#content").html(lazyModule.Main.render('main title'));
    })
    .catch(error => 'An error occurred while loading Module');
});

router.add('description/(:id)', function (id) {
  console.log('description, ' + id);
});

router.addUriListener();

// router.navigateTo('/');

export { router };