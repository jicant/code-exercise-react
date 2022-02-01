export function Select(props) {
	const name = props.name;
	const data = props.data;

	/**
	 * TODO: Incomplete -
	 * - create multiselect dropdown with custom styling
	 * - enable filtering by multiple dropdown options
	 */

	return (
		<div className="select">
			<label htmlFor={name} className="select__label sr-only capitalize">
				{name}
			</label>
			<select name={name} id={name} className="select__input" defaultValue={'default'} >
				<option value="default" disabled>{name.toUpperCase()}</option>
				{data.map((year, key) => { 
					return <option key={key} value={year}>{year}</option>
				})}
			</select>
		</div>
	)
}
