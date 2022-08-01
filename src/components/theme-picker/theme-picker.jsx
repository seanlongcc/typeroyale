const ThemePicker = () => {
	return (
		<div>
			<button className='absolute bottom-0 p-10'>
				<select className='select select-xs w-full max-w-xs' data-choose-theme>
					<option value='acid'>acid</option>
					<option value='aqua'>aqua</option>
					<option value='autumn'>autumn</option>
					<option value='bumblebee'>bumblebee</option>
					<option value='black'>black</option>
					<option value='business'>business</option>
					<option value='coffee'>coffee</option>
					<option value='corporate'>corporate</option>
					<option value='cupcake'>cupcake</option>
					<option value='cyberpunk'>cyberpunk</option>
					<option value='cymk'>cymk</option>
					<option value='dark'>dark</option>
					<option value='dracula'>dracula</option>
					<option value='emerald'>emerald</option>
					<option value='fantasy'>fantasy</option>
					<option value='forest'>forest</option>
					<option value='garden'>garden</option>
					<option value='dracula'>dracula</option>
					<option value='halloween'>halloween</option>
					<option value='lemonade'>lemonade</option>
					<option value='light'>light</option>
					<option value='lofi'>lofi</option>
					<option value='luxury'>luxury</option>
					<option value='night'>night</option>
					<option value='pastel'>pastel</option>
					<option value='retro'>retro</option>
					<option value='synthwave'>synthwave</option>
					<option value='valentine'>valentine</option>
					<option value='winter'>winter</option>
					<option value='wireframe'>wireframe</option>
				</select>
			</button>
		</div>
	);
};
export default ThemePicker;
