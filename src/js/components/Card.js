export function Card(props) {
	const data = props.data;
	const genres = data.genre.join(", ");

	return (
		<div className="card">
			<img 
				className="card__image" 
				src={data.poster} 
				alt={`Poster of ${data.title}`} 
				onError={(event) => {
					event.target.style.visibility = 'hidden';
					event.target.style.height = '100%'
				}}
			/>
			<div className="card__info">
				<p className="card__info--title">
					{data.title}{` (${data.year})` || ''}
				</p>
				<p className="card__info--genres">
					Genres: <span className="capitalize">{genres || ''}</span>
				</p>
			</div>
		</div>
	);
}
