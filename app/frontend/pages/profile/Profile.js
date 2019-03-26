class Profile {
  render = () => {
    console.log('render Profile page');

    return `<div>
            Profile page
            </div>`
  }
}

const ProfilePage = new Profile();

export { ProfilePage };

