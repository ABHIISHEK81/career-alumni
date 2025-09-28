import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Search, 
  Filter, 
  MapPin, 
  Building, 
  Calendar, 
  MessageCircle,
  Star,
  Award,
  Users
} from "lucide-react";

const Alumni = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Mock alumni data
  const alumniData = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/api/placeholder/80/80",
      graduation: "2018",
      degree: "Computer Science",
      company: "Microsoft",
      position: "Senior Software Engineer",
      location: "Seattle, WA",
      skills: ["React", "TypeScript", "Cloud"],
      mentorshipAvailable: true,
      rating: 4.9,
      connections: 156
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "/api/placeholder/80/80",
      graduation: "2016",
      degree: "Business Administration",
      company: "Goldman Sachs",
      position: "Vice President",
      location: "New York, NY",
      skills: ["Finance", "Strategy", "Leadership"],
      mentorshipAvailable: true,
      rating: 4.8,
      connections: 243
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      avatar: "/api/placeholder/80/80",
      graduation: "2020",
      degree: "Marketing",
      company: "Tesla",
      position: "Marketing Manager",
      location: "Austin, TX",
      skills: ["Digital Marketing", "Brand Strategy", "Analytics"],
      mentorshipAvailable: false,
      rating: 4.7,
      connections: 98
    },
    {
      id: 4,
      name: "David Kumar",
      avatar: "/api/placeholder/80/80",
      graduation: "2015",
      degree: "Mechanical Engineering",
      company: "SpaceX",
      position: "Lead Engineer",
      location: "Los Angeles, CA",
      skills: ["Aerospace", "CAD", "Project Management"],
      mentorshipAvailable: true,
      rating: 4.9,
      connections: 187
    },
    {
      id: 5,
      name: "Lisa Thompson",
      avatar: "/api/placeholder/80/80",
      graduation: "2019",
      degree: "Data Science",
      company: "Google",
      position: "Data Scientist",
      location: "Mountain View, CA",
      skills: ["Machine Learning", "Python", "Statistics"],
      mentorshipAvailable: true,
      rating: 4.8,
      connections: 134
    },
    {
      id: 6,
      name: "James Wilson",
      avatar: "/api/placeholder/80/80",
      graduation: "2017",
      degree: "Medicine",
      company: "Johns Hopkins",
      position: "Chief Resident",
      location: "Baltimore, MD",
      skills: ["Surgery", "Research", "Teaching"],
      mentorshipAvailable: false,
      rating: 4.9,
      connections: 76
    }
  ];

  const filters = [
    { id: "all", label: "All Alumni" },
    { id: "mentors", label: "Available Mentors" },
    { id: "recent", label: "Recent Graduates" },
    { id: "leadership", label: "Leadership Roles" }
  ];

  const filteredAlumni = alumniData.filter(alumni => {
    const matchesSearch = alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alumni.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alumni.degree.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === "all" || 
                         (selectedFilter === "mentors" && alumni.mentorshipAvailable) ||
                         (selectedFilter === "recent" && parseInt(alumni.graduation) >= 2018) ||
                         (selectedFilter === "leadership" && alumni.position.toLowerCase().includes("senior") || alumni.position.toLowerCase().includes("lead") || alumni.position.toLowerCase().includes("president"));
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Alumni Directory</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Connect with over 50,000 alumni worldwide. Find mentors, explore career opportunities, 
              and build meaningful professional relationships.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-background border-b border-border py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search alumni, companies, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={selectedFilter === filter.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter(filter.id)}
                  className="transition-smooth"
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Alumni Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-muted-foreground">
            Showing {filteredAlumni.length} alumni
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlumni.map((alumni) => (
            <Card key={alumni.id} className="shadow-soft hover:shadow-medium transition-smooth">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={alumni.avatar} alt={alumni.name} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {alumni.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{alumni.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">Class of {alumni.graduation}</p>
                    </div>
                  </div>
                  {alumni.mentorshipAvailable && (
                    <Badge variant="secondary" className="bg-success text-success-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Mentor
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Current Position */}
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Building className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span className="font-medium">{alumni.position}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Award className="w-4 h-4 mr-2" />
                    <span>{alumni.company}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{alumni.location}</span>
                  </div>
                </div>

                {/* Education */}
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{alumni.degree}</span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1">
                  {alumni.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-accent fill-current" />
                    <span>{alumni.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{alumni.connections} connections</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Connect
                  </Button>
                  <Button size="sm" variant="outline">
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAlumni.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No alumni found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filters to find more alumni.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Alumni;