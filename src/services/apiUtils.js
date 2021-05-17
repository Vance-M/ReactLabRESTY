export const apiCall = async (apiUrl, method, body) => {
    if (method === 'GET') {
        res = await fetch(apiUrl);
    }
    else {
        res = await fetch(apiUrl,
            {
            method: method,
			body: JSON.stringify(body),
			headers: {'Content-Type': 'application/json'}
            }
        );
    }
    return res.json();
}