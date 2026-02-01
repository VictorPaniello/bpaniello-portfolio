export async function fetchPublicationsByAuthor(author: string) {
	const baseUrl = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/';
	
	try {
		// Search for publications by author
		const searchUrl = `${baseUrl}esearch.fcgi?db=pubmed&term=${encodeURIComponent(author)}[Author]&retmode=json&retmax=100`;
		const searchResponse = await fetch(searchUrl);
		const searchData = await searchResponse.json();
		
		const ids = searchData.esearchresult?.idlist || [];
		
		if (ids.length === 0) {
			return [];
		}
		
		// Fetch details for each publication
		const summaryUrl = `${baseUrl}esummary.fcgi?db=pubmed&id=${ids.join(',')}&retmode=json`;
		const summaryResponse = await fetch(summaryUrl);
		const summaryData = await summaryResponse.json();
		
		const publications = ids.map((id: string) => {
			const pub = summaryData.result[id];
			return {
				id,
				title: pub.title,
				authors: pub.authors?.map((a: any) => a.name).join(', ') || '',
				journal: pub.source,
				year: pub.pubdate?.split(' ')[0] || '',
				doi: pub.elocationid || '',
			};
		});
		
		return publications;
	} catch (error) {
		console.error('Error fetching publications:', error);
		return [];
	}
}