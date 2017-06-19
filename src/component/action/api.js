import axios from 'axios';

const API_KEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
const ROOT_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}`;

export const FETCH_NEWS = 'FETCH_NEWS'

export function fetchNews (term) {
	console.log("Hit")
	const url = `${ROOT_URL}&q=${term}`;
	const request = axios.get(url);

	console.log(request);

	return {
		type: FETCH_NEWS,
		payload: request
	}
}