import ENGLISH_1k from '../../assets/word-lists/english-1000.json';

export const generateRandomPassage = (wordCount) => {
	const LINE_LEN = 60; // play around with value depending on desired text box size
	const chooseList = ENGLISH_1k.words;
	const words = Array(wordCount).fill(0).map((_, i) => (chooseList[Math.floor(Math.random() * chooseList.length)]));
	let charCount = 0;
	let passage = "";

	words.forEach(word => {
		charCount += word.length + 1;
		if(charCount >= LINE_LEN) {
			passage += word + "\n";
			charCount = 0;
		} else {
			passage += word + " ";
		}
	});
	return passage.trim();
};