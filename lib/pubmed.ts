// src/app/publications/page.tsx
import { fetchPublicationsByAuthor } from '@/lib/pubmed';

export default async function PublicationsPage() {
  // Fetches directly from PubMed on each page load
  const publications = await fetchPublicationsByAuthor('Paniello B');
  
  return <div>{/* Display publications */}</div>;
}