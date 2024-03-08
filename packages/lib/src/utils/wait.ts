export async function wait(duration = 10) {
	return new Promise(resolve => setTimeout(resolve, duration));
}