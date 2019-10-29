export function resetFocus() {
	const element = document.querySelector("input:not([disabled])[type='radio']");
	if (element) {
		element.focus();
		element.blur();
	}
}