import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';

import './CurrencyInput.css';

function formatCurrency(input: string): string {
	let cleaned = input.replace(/[^\d.]/g, "");
	const parts = cleaned.split(".");
	if (parts.length > 2) cleaned = parts[0] + "." + parts.slice(1).join("");
	const [intPart, decPart] = cleaned.split(".");
	const intWithCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return decPart !== undefined
		? `${intWithCommas}.${decPart.slice(0, 2)}`
		: intWithCommas;
}

export default function CurrencyInput() {
    const [value, setValue] = createSignal("");
    
	function handleInput(e: Event) {
		const input = (e.currentTarget as HTMLInputElement).value;
		setValue(formatCurrency(input));
	}

    return (
		<div class="currency-input-wrapper">
			<label for="!" class="currency-label">Jumlah Mula Ansuran</label>
			<div class="currency-input-row">
				<span class="currency-input-prefix">$</span>
				<input type="text" id="!" class="currency-input"/>
			</div>
		</div>
	);
}