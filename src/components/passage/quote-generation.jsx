import QUOTES from '../../assets/word-lists/quotes.json';

export const generateQuote = (chooseLength) => {
	const LINE_LEN = 50; // play around with value depending on desired text box size
	const chooseList = QUOTES.quotes;
	const random = Math.random();
	let source = '';

	let quote, quoteList, quoteFilter;

	switch (chooseLength) {
		case 'short':
			quoteFilter = chooseList.filter((curQuote) => {
				return curQuote.length <= 200;
			});
			quote = quoteFilter[Math.floor(random * quoteFilter.length)].text;
			source = quoteFilter[Math.floor(random * quoteFilter.length)].source;
			quoteList = quote.split(' ');
			break;

		case 'med':
			quoteFilter = chooseList.filter((curQuote) => {
				return curQuote.length >= 200 && curQuote.length <= 400;
			});
			quote = quoteFilter[Math.floor(random * quoteFilter.length)].text;
			source = quoteFilter[Math.floor(random * quoteFilter.length)].source;
			quoteList = quote.split(' ');
			break;

		case 'long':
			quoteFilter = chooseList.filter((curQuote) => {
				return curQuote.length >= 400 && curQuote.length <= 600;
			});
			quote = quoteFilter[Math.floor(random * quoteFilter.length)].text;
			source = quoteFilter[Math.floor(random * quoteFilter.length)].source;
			quoteList = quote.split(' ');
			break;

		case 'omega':
			quoteFilter = chooseList.filter((curQuote) => {
				return curQuote.length >= 600;
			});
			quote = quoteFilter[Math.floor(random * quoteFilter.length)].text;
			source = quoteFilter[Math.floor(random * quoteFilter.length)].source;
			quoteList = quote.split(' ');
			break;

		default:
			quote = chooseList[Math.floor(random * chooseList.length)].text;
			source = chooseList[Math.floor(random * chooseList.length)].source;
			quoteList = quote.split(' ');
	}

	let charCount = 0;
	let dispPassage = '';
	let passage = '';

	quoteList.forEach((word) => {
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

	return {
		display: dispPassage.trim(),
		raw: passage.trim(),
		length: quoteList.length,
		source: source,
	};
};
