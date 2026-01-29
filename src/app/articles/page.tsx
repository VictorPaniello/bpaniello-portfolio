import { articles } from '../../content/articles';

export default function Articles() {
    return (
    <div>
        <h1 className="text-5xl font-bold mb-4">Articles</h1>
        {articles.map(article => (
        <div key={article.name}>
            <h2 className="text-3xl font-bold mb-4">{article.name}</h2>
            <p>{article.description}</p>
            {article.links?.website && (
            <a href={article.links.website}>View Article →</a>
            )}
        </div>
        ))}
    </div>
    );
}