

//LOCAL STORAGE TO PERSIST
export function setLocalStorage(key: string, value: string | null | undefined): void {
	try {
		if (value) window.localStorage.setItem(key, JSON.stringify(value));
	} catch (e) {
		// catch possible errors:
	}
}

export function getLocalStorage(key: string, initialValue: string | null): string | null {
	try {
		const value = window.localStorage.getItem(key);
		return value ? JSON.parse(value) : initialValue;
	} catch (e) {
		// if error, return initial value
		return null;
	}
}
