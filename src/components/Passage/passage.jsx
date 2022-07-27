import ENGLISH_200 from '../../assets/word-lists/english-200.json';

const Passage = ({ wordCount, chooseList }) => {
	//temp
	wordCount = 100;
	chooseList = ENGLISH_200.words;
	const wordList = [];
	let passage = '';

	for (let i = 1; i <= wordCount; i++) {
		const word = chooseList[Math.floor(Math.random() * 200)];
		wordList.push(word);
	}

	passage = wordList.join(' ');
	console.log(passage);
	console.log(typeof passage === 'string' || passage instanceof String);
	return passage;
};

export default Passage;
