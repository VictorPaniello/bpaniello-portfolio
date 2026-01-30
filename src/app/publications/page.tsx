import React from 'react';
import publicationsData from '../../content/publications.json'
import { Publication } from '../../../lib/schema';

export default function PublicationsPage() {

    const publications = publicationsData as Publication[];

    const groupedPublications = publications.reduce((acc, pub) => {
        if(!acc[pub.year]) {
            acc[pub.year] = [];
        }
        acc[pub.year].push(pub);
        return acc;
    }, {} as Record<number, Publication[]>);

    const sortedYears = Object.keys(groupedPublications).map(Number).sort((a, b) => b - a);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 from-gray-900 to-gray-800 py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-white mb-4">
                    Publications
                </h1>
                <p className="text-lg text-gray-600 text-gray-300 mb-12">
                    Research papers, conference proceedings, and academic contributions.
                </p>

                {sortedYears.map((year) => (
                    <div key={year} className="mb-12">
                        <h2 className="text-2xl font-semibold text-gray-800 text-gray-200 mb-6 border-b-2 border-blue-500 pb-2">
                            {year}
                        </h2>
                        <div className="space-y-6">
                            {groupedPublications[year].map((pub) => (
                                <div
                                    key={pub.id}
                                    className="bg-white bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-xl font-semibold text-gray-900 text-white flex-1">
                                            {pub.title}
                                        </h3>
                                        <span className="ml-4 px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 bg-blue-900 text-blue-200">
                                            {pub.publicationType}
                                        </span>
                                    </div>
                                    <p className="text-gray-700 text-gray-300 mb-2">
                                        {pub.authors.join(', ')}
                                    </p>
                                    {pub.abstract && (
                                        <p className="text-gray-600 text-gray-400 text-sm mb-4">
                                            {pub.abstract}
                                        </p>
                                    )}
                                    <div className="flex gap-4">
                                        {pub.links.doi && (
                                            <a
                                                href={`https://doi.org/${pub.links.doi}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800 text-blue-400 hover:text-blue-300 text-sm font-medium"
                                            >
                                                DOI →
                                            </a>
                                        )}
                                        {pub.links.website && (
                                            <a
                                                href={pub.links.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800 text-blue-400 hover:text-blue-300 text-sm font-medium"
                                            >
                                                View Paper →
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {publications.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-gray-400 text-lg">
                            No publications yet. Check back soon!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}