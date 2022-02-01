import { Select } from "./Select";

export function FormControls(props) {
	const genres = props.genres || {};
	const years = props.years || {};
	let timer = 0;

	/**
	 * TODO: Incomplete -
	 * - "true" fuzzy search by media title - quick prototype added for example
	 * - filter by multi checkboxes in years + genres
	 **/

	const triggerSearch = ((event) => {
		event.preventDefault();
		if (timer) clearTimeout(timer);
		
		timer = setTimeout(() => {
			props.handleSearch(event);
		}, 500);
	});

	return (
		<form className="controls">
			<div className="controls__filters">
				<div className="controls__filters--selects">
					<Select name="genres" data={genres} defaultValue='default' />
					<Select name="years" data={years} defaultValue='default' />
				</div>
				<div className="controls__filters--toggles">
					<div className="radio">
						<input type="radio" name="type" id="movies" value="movie" className="radio__input" onChange={(event) => props.handleChange(event)} /> 
						<label htmlFor="movies">
							Movies
						</label>
					</div>
					<div className="radio">
						<input type="radio" name="type" id="books" value="book" className="radio__input" onChange={(event) => props.handleChange(event)} /> 
						<label htmlFor="books">
							Books
						</label>
					</div>
				</div>
			</div>
			<div className="controls__search">
				<div className="controls__search--box">
					<label htmlFor="search" className="sr-only">Search</label>
					<div className="controls__search--icon">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					</div>
					<input type="text" name="search" id="search" className="controls__search--input" onKeyUp={(event) => triggerSearch(event)} />
					<button type="submit" className="sr-only" onClick={(event) => triggerSearch(event)}>Search</button>
				</div>
				<button type="reset" className="controls__search--clear" onClick={() => props.handleReset()}>CLEAR FILTERS</button>
			</div>
		</form>
	)
}