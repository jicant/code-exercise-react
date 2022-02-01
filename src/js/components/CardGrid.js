import { useEffect, useState } from 'react';
import { Card } from './Card';

export function CardGrid(props) {
	const [gridItems, setGridItems] = useState(null) 
	const data = props.data || null;
	const media = props.media || null;
	const searchedTitle = props.searchedTitle || null;

	useEffect(() => {
		const filteredCards = data.map((item, key) => {
			if (!media || item.type === media) {
				let search = new RegExp(searchedTitle, "gi");
				if (!searchedTitle || item.title.match(search)) {
					return <Card key={key} data={item} />
				}
			}
		});

		setGridItems(filteredCards);
	}, [props.media, props.searchedTitle]);

	return (
		<div className="card__grid">
			{!gridItems && <p>No results found.</p>}
			{gridItems}
		</div>
	);
}
