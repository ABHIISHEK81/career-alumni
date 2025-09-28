import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Calendar,
  MapPin,
  Clock,
  Users,
  Filter,
  Search,
  Plus,
  Video,
  Star,
  Share2
} from "lucide-react";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const events = [
    {
      id: 1,
      title: "Annual Alumni Gala 2024",
      date: "December 15, 2024",
      time: "7:00 PM - 11:00 PM",
      location: "Grand Ballroom, Marriott Hotel",
      type: "in-person",
      category: "networking",
      attendees: 234,
      maxAttendees: 300,
      price: 150,
      image: "/api/placeholder/400/200",
      description: "Join us for an elegant evening of networking, dining, and celebration of our alumni achievements.",
      featured: true,
      status: "open"
    },
    {
      id: 2,
      title: "Tech Career Panel Discussion",
      date: "December 20, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Virtual Event",
      type: "virtual",
      category: "career",
      attendees: 89,
      maxAttendees: 200,
      price: 0,
      image: "/api/placeholder/400/200",
      description: "Industry leaders share insights on tech careers, emerging trends, and career advancement strategies.",
      featured: false,
      status: "open"
    },
    {
      id: 3,
      title: "Entrepreneurship Workshop",
      date: "January 5, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Innovation Center, Campus",
      type: "in-person",
      category: "workshop",
      attendees: 45,
      maxAttendees: 60,
      price: 75,
      image: "/api/placeholder/400/200",
      description: "Hands-on workshop covering startup fundamentals, funding strategies, and business plan development.",
      featured: false,
      status: "open"
    },
    {
      id: 4,
      title: "Alumni Mentorship Mixer",
      date: "January 12, 2025",
      time: "5:30 PM - 8:30 PM",
      location: "Alumni Center",
      type: "in-person",
      category: "mentorship",
      attendees: 67,
      maxAttendees: 80,
      price: 25,
      image: "/api/placeholder/400/200",
      description: "Connect mentors with mentees in a relaxed environment with food, drinks, and structured networking.",
      featured: true,
      status: "open"
    },
    {
      id: 5,
      title: "Finance & Investment Seminar",
      date: "January 18, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Virtual Event",
      type: "virtual",
      category: "education",
      attendees: 156,
      maxAttendees: 250,
      price: 0,
      image: "/api/placeholder/400/200",
      description: "Learn about investment strategies, financial planning, and market trends from industry experts.",
      featured: false,
      status: "open"
    },
    {
      id: 6,
      title: "Global Alumni Reunion",
      date: "March 15, 2025",
      time: "All Day",
      location: "Main Campus",
      type: "in-person",
      category: "reunion",
      attendees: 523,
      maxAttendees: 800,
      price: 200,
      image: "/api/placeholder/400/200",
      description: "The biggest alumni gathering of the year with activities, tours, dining, and entertainment.",
      featured: true,
      status: "early-bird"
    }
  ];

  const filters = [
    { id: "all", label: "All Events" },
    { id: "networking", label: "Networking" },
    { id: "career", label: "Career" },
    { id: "workshop", label: "Workshops" },
    { id: "virtual", label: "Virtual" }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === "all" || 
                         event.category === selectedFilter ||
                         (selectedFilter === "virtual" && event.type === "virtual");
    
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open": return "bg-success text-success-foreground";
      case "early-bird": return "bg-accent text-accent-foreground";
      case "full": return "bg-warning text-warning-foreground";
      case "closed": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "networking": return "bg-blue-100 text-blue-800";
      case "career": return "bg-green-100 text-green-800";
      case "workshop": return "bg-purple-100 text-purple-800";
      case "education": return "bg-orange-100 text-orange-800";
      case "mentorship": return "bg-pink-100 text-pink-800";
      case "reunion": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-4">Alumni Events</h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl">
                Join our community events, workshops, and networking opportunities. 
                Connect with fellow alumni and advance your career.
              </p>
            </div>
            <Button variant="secondary" size="lg" className="hidden md:flex">
              <Plus className="w-5 h-5 mr-2" />
              Create Event
            </Button>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-background border-b border-border py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={selectedFilter === filter.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter(filter.id)}
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-muted-foreground">
            {filteredEvents.length} events found
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {filteredEvents.map((event) => (
            <Card key={event.id} className={`shadow-soft hover:shadow-medium transition-smooth ${event.featured ? 'ring-2 ring-accent/20' : ''}`}>
              {event.featured && (
                <div className="bg-accent text-accent-foreground px-3 py-1 text-sm font-medium">
                  <Star className="w-4 h-4 inline mr-1" />
                  Featured Event
                </div>
              )}
              
              <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                <Calendar className="w-12 h-12 text-muted-foreground" />
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <Badge className={getStatusColor(event.status)}>
                    {event.status.replace('-', ' ')}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className={getCategoryColor(event.category)}>
                    {event.category}
                  </Badge>
                  {event.type === 'virtual' && (
                    <Badge variant="outline" className="bg-blue-50 text-blue-700">
                      <Video className="w-3 h-3 mr-1" />
                      Virtual
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground line-clamp-2">
                  {event.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span>{event.attendees} / {event.maxAttendees} attendees</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="text-lg font-semibold">
                    {event.price === 0 ? 'Free' : `$${event.price}`}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button size="sm" disabled={event.status === 'full' || event.status === 'closed'}>
                      {event.status === 'full' ? 'Full' : event.status === 'closed' ? 'Closed' : 'Register'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No events found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filters to find events.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;