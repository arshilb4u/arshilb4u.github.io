const webcamElement=document.getElementById('webcam');
let net;

async function app() {
	document.getElementById('s1').innerHTML='loading model....'

	net=await mobilenet.load();

	document.getElementById('s2').innerHTML='model loaded ....'

	const webcam=await tf.data.webcam(webcamElement);

	while(true)
	{
		const img=await webcam.capture();
		const result=await net.classify(img);

		document.getElementById('console').innerHTML=`
		prediction : ${result[0].className}\n
		probability;${result[0].probability}
		`;

		img.dispose();

		await tf.nextFrame();

	}
}

app();