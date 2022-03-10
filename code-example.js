const arrUnicSort = (arr) => {
	const thisHowMany = arr.reduce((acum, cur) => {
		acum[cur] = (acum[cur] || 0) + 1;
		return acum;
	}, {});
	const keys = Object.keys(thisHowMany);

	return keys.sort((a, b) => {
		return thisHowMany[b] - thisHowMany[a];
	});
};
