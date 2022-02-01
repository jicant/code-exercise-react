import React, { useEffect, useState } from 'react';
import { FormControls } from './components/FormControls';
import { CardGrid } from './components/CardGrid';


export function Exercise2() {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState(null);
	const [genres, setGenres] = useState([]);
	const [years, setYears] = useState([]);
	
	const [selectedMediaType, setSelectedMediaType] = useState(null);
	const [searchedTitle, setSearchedTitle] = useState(null);

	const handleChange = (event) => {
		setSelectedMediaType(event.target.value);
	}

	const handleReset = () => {
		setSelectedMediaType(null);
		setSearchedTitle(null);
	}

	const handleSearch = (event) => {
		setSearchedTitle(event.target.value);
	}

	useEffect(() => {
		fetch('https://raw.githubusercontent.com/HubSpotWebTeam/CodeExercise/main/src/js/data/data.json')
		.then((response) => {
			if (!response.ok) {
				throw response;
			}

			return response.json()
		})
		.then((data) => {
			setData(data.media || [])

			let yearsList = data.media.map((item) => item.year).sort((a, b) => a - b);
			let genresList = data.media.map((items) => { 
				return items.genre.map((genre) => genre.toUpperCase())
			}).flat().sort();

			// Set to filter unique values.
			setGenres([...new Set(genresList)])
			setYears([...new Set(yearsList)])
		})
		.catch(error => console.error(`Error: ${error.status} ${error.errorText || ''}`))
		.finally(() => {
			setLoading(false)
		})
	}, []);
	
	return (
		<div>
			{isLoading && <p>Loading data...</p>}
			{!isLoading && data && 
				<FormControls 
					genres={genres} 
					years={years} 
					handleSearch={handleSearch}
					handleChange={handleChange} 
					handleReset={handleReset} 
				/>
			}
			{!isLoading && data && 
				<CardGrid 
					data={data} 
					media={selectedMediaType} 
					searchedTitle={searchedTitle} 
				/>
			}
		</div>
	);
}