const validChars =
	'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,/\'"!?@#$%^&*()_+-=<>\\|`~[]{};:';

const generateString = (wordCount) => {
	let wordArray = [];

	for (let i = 0; i < wordCount; i++) {
		let str = '';
		let gibLength = Math.floor(Math.random() * 10) + 1;
		for (let j = 0; j < gibLength; j++) {
			str += validChars.charAt(Math.floor(Math.random() * validChars.length));
		}
		wordArray.push(str);
	}
	return wordArray;
};

export const generateGibberish = (wordCount) => {
	const gibPassage = generateString(wordCount);
	const LINE_LEN = 50; // play around with value depending on desired text box size

	let charCount = 0;
	let dispPassage = '';
	let passage = '';

	gibPassage.forEach((word) => {
		charCount += word.length + 1;
		if (charCount >= LINE_LEN) {
			dispPassage += word + '\n';
			passage += word + ' ';
			charCount = 0;
		} else {
			dispPassage += word + ' ';
			passage += word + ' ';
		}
	});

	return { display: dispPassage.trim(), raw: passage.trim() };
};
