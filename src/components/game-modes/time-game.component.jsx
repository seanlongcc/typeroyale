import { useState, useEffect } from 'react';
import Button from '../button/button.component';
import ClockDown from '../clock-down/clock-down.component';
import TextBox from '../text-box/text-box.component';

// temporary
let passage = 'the quick brown fox jumps';

const TimeGame = () => {
	const [mode, setMode] = useState('60');
	const [ready, setReady] = useState(false);
  const [typed, setTyped] = useState('');
  const [customTime, setCustomTime] = useState('');

  const handleOnBlur = () => {
    if (parseInt(customTime) <= 604800) {
      setMode(customTime);
    } else {
      setMode('60')
    }
  }

  // ensures text box is focused after mode change
  useEffect(() => {
    if(document.getElementById("text-box") && mode !== "custom") {
      document.getElementById("text-box").focus()
    }
  }, [mode]);


	return (
		<div>
			<span className={ready ? "hidden" : "flex flex-col items-center text-5xl"}>
				{mode}
			</span>
			<span className='flex flex-col items-center text-5xl'>
				{mode !== "custom" && ready && <ClockDown gameTime={mode} />}
			</span>

			<span className="text-3xl">
				{
          mode !== "custom"
          ? <TextBox passage={passage} typed={typed} setTyped={setTyped} setReady={setReady} mode={mode}/>
          : passage
        }
			</span>
			{/* conditional rendering: inline If with logical && operator: run Clock if ready is true */}
			<span className='grid grid-cols-6'>
				<Button label={'15'} mode={mode} setMode={setMode} />
				<Button label={'30'} mode={mode} setMode={setMode} />
				<Button label={'60'} mode={mode} setMode={setMode} />
				<Button label={'120'} mode={mode} setMode={setMode} />
        {
          mode === "custom"
          ? <input 
              className="width w-14 outline-none"
              type="text" 
              value={customTime} 
              onChange={e => setCustomTime(e.target.value)} 
              onBlur={handleOnBlur}>  
            </input>
          : <Button label={'custom'} mode={mode} setMode={setMode} />
        }
			</span>
		</div>
	);
};

export default TimeGame;
