class Main {
  render = (title) => {
    console.log('render Main page');

    return `<div>
            Main page: ${title}
            </div>`
  }
}

const MainPage = new Main();

export { MainPage };

