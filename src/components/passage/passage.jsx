import ENGLISH_200 from '../../assets/word-lists/english-200.json';
import ENGLISH_1k from '../../assets/word-lists/english-1000.json';

const Passage = ({ wordCount, chooseList }) => {
	//temp
	wordCount = 10;
	chooseList = ENGLISH_200.words;

	const wordList = [];
	for (let i = 1; i <= wordCount; i++) {
		const word = chooseList[Math.floor(Math.random() * 200)];
		wordList.push(word);
	}

	return <span>{wordList.join(' ')}</span>;
};

export default Passage;
