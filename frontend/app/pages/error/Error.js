class Error {
  render = () => {
    console.log('render Error page');

    return `<div>
            Error page
            </div>`
  }
}

const ErrorPage = new Error();

export { ErrorPage };

