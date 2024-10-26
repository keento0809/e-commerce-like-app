'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';

type SearchResult = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

export function SearchResults({
  query,
  onItemClick,
}: {
  query: string;
  onItemClick: () => void;
}) {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchProducts = async () => {
      if (!query.trim()) {
        setResults([]);
        return;
      }

      setLoading(true);
      // Simulate API call with mock data
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      const mockResults: SearchResult[] = [
        {
          id: '1',
          name: 'Wireless Headphones',
          price: 199.99,
          image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
          category: 'Electronics',
        },
        {
          id: '2',
          name: 'Smart Watch',
          price: 299.99,
          image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
          category: 'Electronics',
        },
      ].filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );

      setResults(mockResults);
      setLoading(false);
    };

    const debounce = setTimeout(searchProducts, 300);
    return () => clearTimeout(debounce);
  }, [query]);

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    );
  }

  if (query && !results.length) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No products found
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {results.map((result) => (
        <Link
          key={result.id}
          href={`/products/${result.id}`}
          className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted transition-colors"
          onClick={onItemClick}
        >
          <div className="relative w-16 h-16">
            <Image
              src={result.image}
              alt={result.name}
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-medium">{result.name}</h3>
            <p className="text-sm text-muted-foreground">{result.category}</p>
          </div>
          <div className="font-medium">${result.price}</div>
        </Link>
      ))}
    </div>
  );
}