import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    // name: "world",
    myName: "Adewale Olaoye",
  },
});

export default app;
