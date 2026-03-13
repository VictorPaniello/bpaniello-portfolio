import { List2 } from '@/components/list2';
import { articles } from '../../content/articles';
import { FileText } from 'lucide-react';

export default function ArticlesPage() {
    const items = articles.map((article) => ({
        title: article.name,
        category: article.type,
        description: article.description,
        link: article.links.website,
        authors: article.authors,
    }));

    return (
        <div className="relative min-h-screen">
            <main id="home" className="max-w-4xl mx-auto px-2">
                <section className="flex items-center w-full">
                    <List2 items={items} heading="Articles" />
                </section>
            </main>
        </div>
    );
}