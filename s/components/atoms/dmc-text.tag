dmc-text
  .dmc-text-inner
    | dmc text component
    input(type="text")
  style.
    .dmc-text-inner {
      background-color: red;
    }
  script.
    let store = this.riotx.get()

    store.on('login', (err, state, store) => {
      let res = store.getters.login(state);
      console.log('dmc-text `login` on store', res);
    })
