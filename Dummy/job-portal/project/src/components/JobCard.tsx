import { Job } from '@/types/job';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, Clock, BriefcaseIcon, BookmarkIcon } from 'lucide-react';

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card className="group transition-all hover:border-primary/50 hover:shadow-lg">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-14 w-14 rounded-lg">
          <AvatarImage src={job.logo} alt={job.company} />
          <AvatarFallback className="rounded-lg">{job.company[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold group-hover:text-primary">{job.title}</h3>
          <p className="text-sm text-muted-foreground">{job.company}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-muted-foreground">{job.description}</p>
          <div className="flex flex-wrap gap-2">
            {job.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-primary/10">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {job.location}
            </div>
            <div className="flex items-center gap-1">
              <BriefcaseIcon className="h-4 w-4" />
              {job.type}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {job.posted}
            </div>
          </div>
          <p className="text-sm font-medium text-primary">{job.salary}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Apply Now</Button>
        <Button variant="ghost" size="icon">
          <BookmarkIcon className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}