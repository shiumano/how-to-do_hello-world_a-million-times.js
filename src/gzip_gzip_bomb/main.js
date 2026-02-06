const hello_gz_gz = `
H4sIAAAAAAACA+3cPQpBAQAA4IfSKz+DsqAo2cnuAk5ge4PBBUwKi8kFWFgcQNlls1okFhcwvFmJ
nELq+w7yVedh8JVMPY6tXFDLBttqMa73883DvtGNJ9HmVeqdR6vx8BK2AQAAAAAAAAAAAAAAAAAA
gF/Z3ceVwvcICJ/vWzk9WCwBAAAAAAAAAAAA+DPXKNGZZU7T9Tn4APdK+vhBagAA
`

const binary = Uint8Array.from(atob(hello_gz_gz), c => c.charCodeAt(0));

const byteStream = new ReadableStream({
  start(controller) {
    controller.enqueue(binary);
    controller.close();
  }
});

const decompressedStream = byteStream
  .pipeThrough(new DecompressionStream('gzip'))
  .pipeThrough(new DecompressionStream('gzip'));  // 二度漬けgzip

const resultText = await new Response(decompressedStream).text();

console.log(resultText);
