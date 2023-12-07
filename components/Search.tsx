import React from 'react'

function Search({placeholder}: {placeholder:string}) {
	return (
		<div>
			<input type='text'placeholder={placeholder} />
		</div>
	)
}

export default Search