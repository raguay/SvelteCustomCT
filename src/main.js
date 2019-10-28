import WebSite from './WebSite.svelte';

const app = new WebSite({
  target: document.body,
  props: {
    info: {
      siteName: 'Custom Computer Tools',
      byLine: 'Making the right tools for the right job.',
      address: 'http://localhost:5000',
      GitHub: ''
    }
  }
});

export default app;
