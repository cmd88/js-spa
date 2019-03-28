const appState = {
  headerIsLoad: false,
  footerIsLoad: false,
  pageIsLoad: false,
  profile: {},
};

const handleStore = (onChangeCallback) => {
  return new Proxy(appState, {
    set(target, prop, value) {
      target[prop] = value;

      if(prop === 'headerIsLoad' || prop === 'footerIsLoad')
        target.pageIsLoad = target.headerIsLoad && target.footerIsLoad;

      onChangeCallback && onChangeCallback();
      return true;
    }
  })
};

export { handleStore };