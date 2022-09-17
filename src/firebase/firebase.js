import { initializeApp } from 'firebase/app';

import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signOut,
} from 'firebase/auth';

import {
	getFirestore,
	getDoc,
	doc,
	setDoc,
	updateDoc,
	increment,
	arrayUnion,
} from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDvjIjP2jfxXgWmNTw4mQSy8NsPiDd3SoM',
	authDomain: 'typeroyalegame.firebaseapp.com',
	projectId: 'typeroyalegame',
	storageBucket: 'typeroyalegame.appspot.com',
	messagingSenderId: '923705255307',
	appId: '1:923705255307:web:e1f7b13c3c12ebedeb7b8e',
	measurementId: 'G-YJ315WCBBQ',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
///
const FIELDS = {
	started: 0,
	completed: 0,
	max_chars: 0,
	total_chars: 0,
	total_correct_chars: 0,
	total_time: 0,
	all_games: [],
};

const INITIAL_DOC = {
	time_game: FIELDS,
	words_game: FIELDS,
	quote_game: FIELDS,
	gibberish_game: FIELDS,
	last_ten: [],
};

///////////////////////// AUTH /////////////////////////////////////
const signInWithGoogle = async () => {
	try {
		const res = await signInWithPopup(auth, googleProvider);
		const user = res.user;
		const docSnap = await getDoc(doc(db, 'users', user.uid));

		// TODO: add firebase rule where users can only access their own document

		//if document doesnt exist (ie new user), create a document
		if (!docSnap.exists()) {
			await setDoc(doc(db, 'users', user.uid), {
				name: user.displayName,
				authProvider: 'google',
				email: user.email,
				practice: INITIAL_DOC,
			});
		}
	} catch (err) {
		console.log(err);
	}
};

const logout = () => {
	signOut(auth);
};

///////////////////////// STATS /////////////////////////////////////
const updateGamesStarted = async (mode, duration) => {
	try {
		if (mode !== 'quote' && duration < 15) return;
		const user = auth.currentUser;
		if (!user) return;
		const userRef = doc(db, 'users', user.uid);
		const started = `practice.${mode}_game.started`;
		await updateDoc(userRef, { [started]: increment(1) });
	} catch (e) {
		console.log('Transaction failed: ', e);
	}
};

const updateStats = async (
	mode,
	total_chars,
	correct_chars,
	time,
	duration
) => {
	try {
		if (mode !== 'quote' && duration < 15) return;
		const user = auth.currentUser;
		if (!user) return;

		const userRef = doc(db, 'users', user.uid);
		const userDoc = await getDoc(userRef);

		const data = userDoc.data()['practice'][`${mode}_game`];
		const newMaxChars = Math.max(data.max_chars, correct_chars);
		const newGame = { total_chars, correct_chars, time };
		let lastTen = userDoc.data()['practice'].last_ten;

		const newTen =
			lastTen.length < 10
				? [...lastTen, newGame]
				: [...lastTen.slice(1), newGame];

		let base = `practice.${mode}_game`;

		await updateDoc(userRef, {
			[`${base}.completed`]: increment(1),
			[`${base}.total_chars`]: increment(total_chars),
			[`${base}.total_correct_chars`]: increment(correct_chars),
			[`${base}.total_time`]: increment(time),
			[`${base}.max_chars`]: newMaxChars,
			[`${base}.all_games`]: arrayUnion(newGame),
			'practice.last_ten': newTen,
		});
	} catch (e) {
		console.log('Transaction failed: ', e);
	}
};

const getStats = async () => {
	const user = auth.currentUser;
	if (!user) return;

	const userDoc = await getDoc(doc(db, 'users', user.uid));
	if (userDoc.exists()) return userDoc.data().practice;

	return {};
};

/////////////// TODO: ASYNC GAME ///////////////
const createAsyncGame = async () => {
	const auth = getAuth();
	console.log(auth);
	// save passage, mode, {user_id: {name, keysPressed[], color}, ...}

};

const getAsyncGame = async () => {
	const auth = getAuth();

	// they have to be logged in to make it work
	// can't be more than X number of players
};

const asyncGameFinished = async () => {
	const auth = getAuth();
};
/////////////////////////////////////////

export {
	signInWithGoogle,
	logout,
	db,
	auth,
	updateStats,
	updateGamesStarted,
	getStats,
};
