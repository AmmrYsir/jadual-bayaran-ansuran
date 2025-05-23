import type { Component } from 'solid-js';
import './AppHeader.css';

// icon
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-solid';

// component
import DateTimeInput from './DateTimeInput';
import CurrencyInput from './CurrencyInput';
import Button from './Button';

import { createSignal } from 'solid-js';

const AppHeader: Component = () => {
	const [isOpen, setIsOpen] = createSignal(false);
	const toggleDrawer = () => setIsOpen(!isOpen());
	
	return (
		<div class={`app-header ${isOpen() ? "open" : ""}`}>
			<div class="app-header-section">
				<h2>Maklumat Jadual Ansuran</h2>
				<DateTimeInput />
				<CurrencyInput />
				<Button />
			</div>
			<button class="toggle-button" onClick={toggleDrawer}>
				{isOpen() ? <ChevronUpIcon />: <ChevronDownIcon/>}
			</button>
		</div>
	);
};

export default AppHeader;
