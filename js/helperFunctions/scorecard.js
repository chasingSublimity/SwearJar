function scorecard (text) {
	let scorecard = {};

	this.scan(text, function (word, index, categories) {
		for (let i = 0; i < categories.length; i+=1) {
			let cat = categories[i];
			if (cat in scorecard) {
				scorecard[cat] += 1;
			} else {
				scorecard[cat] = 1;
			}
		}
	});

	return scorecard;
}

export default scorecard;