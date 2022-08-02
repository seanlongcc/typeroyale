import ENGLISH_1k from '../../assets/word-lists/english-1000.json';

export const generateRandomPassage = (wordCount) => {
	const LINE_LEN = 50; // play around with value depending on desired text box size
	const chooseList = ENGLISH_1k.words;
	const words = Array(wordCount)
		.fill(0)
		.map((_, i) => chooseList[Math.floor(Math.random() * chooseList.length)]);
	let charCount = 0;
	let dispPassage = '';
	let passage = '';

	words.forEach((word) => {
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
