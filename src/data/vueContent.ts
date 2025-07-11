import { Section, PageContent } from '../types/index';

export const vueSections: Section[] = [
  { id: 'overview', title: 'Overview', icon: '📖' },
  { id: 'basics', title: 'Basics', icon: 'V' },
  { id: 'components', title: 'Components', icon: 'C' },
  { id: 'templates', title: 'Templates', icon: 'T' },
  { id: 'reactivity', title: 'Reactivity', icon: 'R' },
  { id: 'lifecycle', title: 'Lifecycle', icon: 'L' },
  { id: 'events', title: 'Events', icon: 'E' },
  { id: 'routing', title: 'Routing', icon: 'R' },
  { id: 'state', title: 'State Management', icon: 'S' }
];

export const vueContent: PageContent = {
  basics: [
    {
      title: 'Getting Started',
      examples: [
        { title: 'Vue instance', code: 'const app = Vue.createApp({\n  data() {\n    return {\n      message: "Hello Vue!"\n    }\n  }\n})' },
        { title: 'Mounting', code: 'app.mount("#app")' }
      ]
    }
  ],
  components: [
    {
      title: 'Creating components',
      examples: [
        { title: 'Basic component', code: 'app.component("my-component", {\n  template: "<div>My Component</div>"\n})' },
        { title: 'Component with props', code: 'app.component("greeting", {\n  props: ["name"],\n  template: "<h1>Hello {{ name }}!</h1>"\n})' }
      ]
    }
  ],
  templates: [
    {
      title: 'Template syntax',
      examples: [
        { title: 'Text interpolation', code: '<div>{{ message }}</div>' },
        { title: 'Directives', code: '<div v-if="isVisible">Show this</div>\n<div v-for="item in items">{{ item }}</div>' }
      ]
    }
  ],
  reactivity: [
    {
      title: 'Reactive data',
      examples: [
        { title: 'Data properties', code: 'data() {\n  return {\n    count: 0,\n    message: "Hello"\n  }\n}' },
        { title: 'Computed properties', code: 'computed: {\n  doubleCount() {\n    return this.count * 2\n  }\n}' }
      ]
    }
  ],
  lifecycle: [
    {
      title: 'Lifecycle hooks',
      examples: [
        { title: 'Mounted hook', code: 'mounted() {\n  console.log("Component mounted")\n}' },
        { title: 'Updated hook', code: 'updated() {\n  console.log("Component updated")\n}' }
      ]
    }
  ],
  events: [
    {
      title: 'Event handling',
      examples: [
        { title: 'Click event', code: '<button @click="increment">Click me</button>' },
        { title: 'Event methods', code: 'methods: {\n  increment() {\n    this.count++\n  }\n}' }
      ]
    }
  ],
  routing: [
    {
      title: 'Vue Router',
      examples: [
        { title: 'Route definition', code: 'const routes = [\n  { path: "/", component: Home },\n  { path: "/about", component: About }\n]' },
        { title: 'Router link', code: '<router-link to="/">Home</router-link>' }
      ]
    }
  ],
  state: [
    {
      title: 'State management',
      examples: [
        { title: 'Vuex store', code: 'const store = createStore({\n  state: {\n    count: 0\n  },\n  mutations: {\n    increment(state) {\n      state.count++\n    }\n  }\n})' },
        { title: 'Using store', code: 'this.$store.commit("increment")\nthis.$store.state.count' }
      ]
    }
  ]
}; 