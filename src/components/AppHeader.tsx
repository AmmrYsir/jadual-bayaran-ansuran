import type { Component } from 'solid-js';
import './AppHeader.css';

// icon
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-solid';

import { createSignal } from 'solid-js';

const AppHeader: Component = () => {
	const [isOpen, setIsOpen] = createSignal(false);
	const toggleDrawer = () => setIsOpen(!isOpen());
	
	return (
		<div class={`app-header ${isOpen() ? "open" : ""}`}>
			<div class="app-header-section">
				<h2>Header Content</h2>
				<p>This is the drawer content.</p>
			</div>
			<button class="toggle-button" onClick={toggleDrawer}>
				{isOpen() ? <ChevronUpIcon />: <ChevronDownIcon/>}
			</button>
		</div>
	);
};

export default AppHeader;
