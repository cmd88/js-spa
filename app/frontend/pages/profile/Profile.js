import './profile.scss';

class Profile {
  render = () => {
    return `
    <div class="d-block" style="max-width: 1000px">
        <div class="row">
            <div class="card d-block" style="width: 100%">
                <div class="row no-gutters">
                                    
                    <div class="col-md-4">
                        <img src="..." class="card-img" alt="...">
                    </div>
                
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Personal Info</h5>
                                <p class="card-text"><b>Name:</b> Leonid Busel</p>
                                <p class="card-text"><b>Location:</b> Belarus, Gomel</p>
                                <p class="card-text"><b>Phone:</b> +375(29)159-52-01</p>
                                <p class="card-text"><b>E-mail:</b> <a href="mailTo:busel.leonid@tut.by">busel.leonid@tut.by</a></p>
                                <p class="card-text"><b>Skype:</b> <a href="skype:leo.ev1">leo.ev1</a></p>
                                <p class="card-text"><b>Date of Birth:</b> 02.06.1988</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        <div class="row"><div class="col">another content</div></div>
    </div>`
  }
}

const ProfilePage = new Profile();

export { ProfilePage };

