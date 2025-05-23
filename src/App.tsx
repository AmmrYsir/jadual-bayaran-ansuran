import type { Component } from 'solid-js';
import './App.css';

import AppHeader from './components/AppHeader';
import AppBody from './components/AppBody';

const App: Component = () => {
  return (
    <div class="app">
		<AppHeader />
		<AppBody />
    </div>
  );
};

export default App;
