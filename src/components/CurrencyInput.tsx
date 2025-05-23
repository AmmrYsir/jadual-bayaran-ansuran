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
		<div class="input-wrapper">
			<label for="currencyInput" class="input-label">Pilih Tarikh Mula</label>
			<div class="currency-input-container">
				<span class="currency-prefix">RM</span>
				<input id="currencyInput" type="text" class="currency-input" value={value()} onInput={handleInput} placeholder="0.00"/>
			</div>
		</div>
	);
}