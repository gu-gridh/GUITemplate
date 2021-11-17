import * as components from "./components";

const CdhGui = {
  install(Vue, options = {}) {
    for (const name in components) {
      const component = components[name];
      Vue.component(component.name, component);
    }
  },
};

export default CdhGui;

// Directly load plugin in a non-pre-built environment (<script src="...">)
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(CdhGui);
}
