

//LOCAL STORAGE TO PERSIST
export function setLocalStorage(key: string, value: string | null | undefined ): void {
	try {
		 if(value) window.localStorage.setItem(key, JSON.stringify(value));
	} catch (e) {
		// catch possible errors:
		// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
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
