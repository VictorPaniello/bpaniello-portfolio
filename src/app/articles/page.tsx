import { articles } from '../../content/articles';

export default function Articles() {
    return (
    <div id="articles">
        <h1>Articles</h1>
        {articles.map(article => (
        <div key={article.name}>
            <h2>{article.name}</h2>
            <p>{article.description}</p>
            {article.links?.website && (
            <a href={article.links.website}>View Article →</a>
            )}
        </div>
        ))}
    </div>
    );
}