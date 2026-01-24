// Display a single publication nicely
export function PublicationCard({ publication }) {
    return (
    <div className="border rounded-lg p-4">
        <h3>{publication.title}</h3>
        <p>{publication.authors.join(', ')}</p>
        <p>{publication.journal} ({publication.year})</p>
        {publication.doiLink && <a href={publication.doiLink}>DOI</a>}
    </div>
    );
}