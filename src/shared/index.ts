export function isEqualToPreviousValue<T>(newValue: T, oldValue: T): boolean {
	return (newValue === oldValue) ? true : false;
}
