import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';
import './Button.css';

import { CirclePlayIcon } from 'lucide-solid';

export default function Button() {
	const [date, setDate] = createSignal("");

	return (
		<button class="button">
			<CirclePlayIcon></CirclePlayIcon>
			<p>Jana Jadual Ansuran</p>
		</button>
	);
}