/// <reference lib="DOM" />

(async () => {
	const wasm = "AGFzbQEAAAABCAJgAABgAX8AAg0BB2ltcG9ydHMBYQAAAwIBAQcIAQRtYWluAAEKFwEVAANAEAAgAEEBayEAIABBAEcNAAsLABUEbmFtZQEEAQABYQIIAgAAAQEAAXA=";
	((await WebAssembly.instantiate(Buffer.from(wasm, 'base64'), {
		imports: {
			a: () => process.stdout.write("Hello, World!\n")
		}
	})).instance.exports as any).main(1000000);
})()