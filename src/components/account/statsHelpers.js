const sum = (prev, curr) => (prev + curr);

const wpm = (correct, time) => {
  const res = ((correct / time / 5) * 60).toFixed(2);
  return isNaN(res) ? 0 : res;
}

const cps = (correct, time) => {
  const res = (correct / time).toFixed(2);
  return isNaN(res) ? 0 : res;
}

const acc = (correct, total) => {
  const res = ((correct / total)*100).toFixed(2);
  return isNaN(res) ? 0 : res;
}

const getBests = (modeStats) => {
  let [maxWpm, maxCps, maxAcc] = [0, 0, 0];
  let res = {wpm: {val: 0, mode: 0}, cps: {val: 0, mode: 0}, acc: {val: 0, mode: 0}}

  for(const m in modeStats) {
    if(modeStats[m].avg_all.wpm > maxWpm) {
      res.wpm = {val: modeStats[m].avg_all.wpm, mode: m};
      maxWpm = res.wpm.val;
    }
    if(modeStats[m].avg_all.cps > maxCps) {
      res.cps = {val: modeStats[m].avg_all.cps, mode: m};
      maxCps = res.cps.val;
    }
    if(modeStats[m].avg_all.acc > maxAcc) {
      maxAcc = res.acc.val;
      res.acc = {val: modeStats[m].avg_all.acc, mode: m};
    }
  }
  console.log("HOLLA ", res)
  return res;
}


const mode_map = {
  "words_game": "words game", 
  "time_game": "time game",
  "quote_game": "quote game",
  "gibberish_game": "gibberish game",
};

export {
  sum,
  wpm,
  cps,
  acc,
  getBests,
  mode_map
};