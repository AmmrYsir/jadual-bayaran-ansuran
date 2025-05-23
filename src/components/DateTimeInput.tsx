import type { Component } from 'solid-js';
import './DateTimeInput.css';

import { createSignal } from 'solid-js';

export default function DateTimeInput() {
	const [date, setDate] = createSignal("");

	return (
		<div class="date-input-wrapper">
			<label for="datepicker" class="date-label">Pilih Tarikh Mula</label>
			<input type="date" id="datepicker" class="date-input"
				value={date()}
				onInput={(e) => setDate(e.currentTarget.value)}
			/>
		</div>
	);
}