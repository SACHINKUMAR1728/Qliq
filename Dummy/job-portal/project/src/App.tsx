import { useState } from 'react';
import { jobs } from '@/data/jobs';
import { JobCard } from '@/components/JobCard';
import { SearchBar } from '@/components/SearchBar';
import { Header } from '@/components/Header';
import { AdBanner } from '@/components/AdBanner';
import { JobFilters } from '@/components/JobFilters';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredJobs = jobs.filter((job) =>
    Object.values(job)
      .join(' ')
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">Find Your Next Opportunity</h2>
          <p className="text-lg text-muted-foreground">
            Discover and apply to the best tech jobs in the industry
          </p>
        </div>

        <div className="mb-8">
          <SearchBar onSearch={setSearchQuery} />
        </div>

        <div className="mb-8">
          <JobFilters />
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-6 lg:col-span-3">
            <div className="grid gap-6 md:grid-cols-2">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <AdBanner />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;