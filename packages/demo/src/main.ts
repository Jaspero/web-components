import './app.postcss';
import '../../../dist/lib/style.css';
import App from './App.svelte';

const app = new App({
  target: document.getElementById('app')
});

export default app;
