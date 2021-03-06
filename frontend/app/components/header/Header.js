import './style.scss';

const Header = {
    init() {
      this.initHandleClick();
      return this.render();
    },
    initHandleClick() {
      $('header').on('click', e => {
        e.preventDefault();

        const { target: { dataset: { path = undefined } } } = e;

        if (path) {
          import( /* webpackChunkName: "Router" */ './../../router')
            .then(lazyModule => {
              lazyModule.router.navigateTo(path);
            })
            .catch(error => 'An error occurred while loading Module');
        }
      })
    },
    render() {
      return `
            <nav class="navbar navbar-expand-lg navbar-light bg-light" style="height: 100%; width: 100%;">
                <a class="navbar-brand" data-path="main" href="#">Demo Project</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
  
                <div class="collapse navbar-collapse bg-light" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" data-path="main" href="#">Main</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-path="profile" href="#">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-path="structure" href="#">Structure</a>
                        </li>                        
                        <li class="nav-item">
                            <a class="nav-link" data-path="theory" href="#">Theory</a>
                        </li>
                    </ul>
                </div>
                
                <div class="d-none d-lg-block d-xl-block text-info">
                    load time: <span id="load-time"></span>
                </div>
            </nav>
        `;
    },
  }
;

export { Header };