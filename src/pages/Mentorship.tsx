import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search,
  Filter,
  Users,
  MessageCircle,
  Star,
  Award,
  Target,
  Clock,
  TrendingUp,
  Heart,
  BookOpen,
  Zap,
  Calendar
} from "lucide-react";

const Mentorship = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("find-mentor");

  const mentors = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/api/placeholder/80/80",
      title: "Senior Software Engineer",
      company: "Microsoft",
      expertise: ["React", "TypeScript", "Leadership", "Career Growth"],
      experience: "8 years",
      rating: 4.9,
      mentees: 12,
      sessions: 156,
      bio: "Passionate about helping developers grow their careers in tech. Specialized in frontend development and technical leadership.",
      availability: "Available",
      responseTime: "< 24 hours"
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "/api/placeholder/80/80",
      title: "Vice President",
      company: "Goldman Sachs",
      expertise: ["Finance", "Investment Banking", "Strategy", "Networking"],
      experience: "12 years",
      rating: 4.8,
      mentees: 8,
      sessions: 89,
      bio: "Helping finance professionals navigate complex career decisions and build strong professional networks.",
      availability: "Limited",
      responseTime: "< 48 hours"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      avatar: "/api/placeholder/80/80",
      title: "Research Director",
      company: "Pfizer",
      expertise: ["Biotechnology", "Research", "PhD Guidance", "Academia to Industry"],
      experience: "15 years",
      rating: 4.9,
      mentees: 15,
      sessions: 203,
      bio: "Supporting researchers and PhD students in making informed career decisions in biotech and pharmaceuticals.",
      availability: "Available",
      responseTime: "< 12 hours"
    }
  ];

  const mentorshipRequests = [
    {
      id: 1,
      studentName: "Alex Kumar",
      studentAvatar: "/api/placeholder/60/60",
      field: "Computer Science",
      year: "Junior",
      topic: "Internship Preparation",
      message: "Looking for guidance on landing a software engineering internship at top tech companies.",
      urgency: "high",
      timeAgo: "2 hours ago"
    },
    {
      id: 2,
      studentName: "Jessica Wong",
      studentAvatar: "/api/placeholder/60/60",
      field: "Business",
      year: "Senior",
      topic: "Career Transition",
      message: "Interested in transitioning from consulting to tech. Would love to learn about the process.",
      urgency: "medium",
      timeAgo: "5 hours ago"
    },
    {
      id: 3,
      studentName: "David Martinez",
      studentAvatar: "/api/placeholder/60/60",
      field: "Engineering",
      year: "Graduate",
      topic: "Research Career",
      message: "Considering PhD vs industry career paths. Need advice on research opportunities.",
      urgency: "low",
      timeAgo: "1 day ago"
    }
  ];

  const myMentorships = [
    {
      id: 1,
      name: "Emma Thompson",
      avatar: "/api/placeholder/60/60",
      role: "mentee",
      field: "Data Science",
      startDate: "Sep 2024",
      sessions: 8,
      nextSession: "Dec 18, 2024",
      progress: 75,
      goals: ["Machine Learning Career", "Portfolio Building", "Interview Prep"]
    },
    {
      id: 2,
      name: "Robert Kim",
      avatar: "/api/placeholder/60/60",
      role: "mentee",
      field: "Product Management",
      startDate: "Oct 2024",
      sessions: 5,
      nextSession: "Dec 20, 2024",
      progress: 60,
      goals: ["PM Role Transition", "Product Strategy", "Stakeholder Management"]
    }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "Available": return "bg-green-100 text-green-800";
      case "Limited": return "bg-yellow-100 text-yellow-800";
      case "Unavailable": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Mentorship Hub</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Connect with experienced alumni for career guidance, skill development, 
              and professional growth. Join our thriving mentorship community.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="find-mentor">Find a Mentor</TabsTrigger>
            <TabsTrigger value="mentor-requests">Mentor Requests</TabsTrigger>
            <TabsTrigger value="my-mentorships">My Mentorships</TabsTrigger>
          </TabsList>

          {/* Find a Mentor Tab */}
          <TabsContent value="find-mentor" className="space-y-8">
            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search mentors by expertise, company, or name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Mentors Grid */}
            <div className="grid lg:grid-cols-2 gap-6">
              {mentors.map((mentor) => (
                <Card key={mentor.id} className="shadow-soft hover:shadow-medium transition-smooth">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={mentor.avatar} alt={mentor.name} />
                        <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                          {mentor.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl">{mentor.name}</CardTitle>
                          <Badge className={getAvailabilityColor(mentor.availability)}>
                            {mentor.availability}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground font-medium">{mentor.title}</p>
                        <p className="text-sm text-muted-foreground">{mentor.company}</p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{mentor.bio}</p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2">
                      {mentor.expertise.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
                      <div className="text-center">
                        <div className="text-lg font-semibold">{mentor.experience}</div>
                        <div className="text-xs text-muted-foreground">Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center">
                          <Star className="w-4 h-4 text-accent fill-current mr-1" />
                          <span className="text-lg font-semibold">{mentor.rating}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold">{mentor.mentees}</div>
                        <div className="text-xs text-muted-foreground">Mentees</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold">{mentor.sessions}</div>
                        <div className="text-xs text-muted-foreground">Sessions</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>Responds {mentor.responseTime}</span>
                      </div>
                    </div>

                    <Button className="w-full">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Request Mentorship
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Mentor Requests Tab */}
          <TabsContent value="mentor-requests" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Mentorship Requests</h2>
              <Badge variant="secondary" className="text-sm">
                {mentorshipRequests.length} pending requests
              </Badge>
            </div>

            {mentorshipRequests.map((request) => (
              <Card key={request.id} className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={request.studentAvatar} alt={request.studentName} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {request.studentName.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="font-semibold">{request.studentName}</h3>
                          <p className="text-sm text-muted-foreground">
                            {request.year} • {request.field}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getUrgencyColor(request.urgency)}>
                            {request.urgency} priority
                          </Badge>
                          <span className="text-sm text-muted-foreground">{request.timeAgo}</span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <Badge variant="outline" className="mb-2">
                          <Target className="w-3 h-3 mr-1" />
                          {request.topic}
                        </Badge>
                        <p className="text-sm text-muted-foreground">{request.message}</p>
                      </div>
                      <div className="flex space-x-3">
                        <Button size="sm">Accept Request</Button>
                        <Button size="sm" variant="outline">Schedule Call</Button>
                        <Button size="sm" variant="ghost">Decline</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* My Mentorships Tab */}
          <TabsContent value="my-mentorships" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">My Active Mentorships</h2>
              <div className="flex space-x-4">
                <Button variant="outline">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Resources
                </Button>
                <Button>
                  <Users className="w-4 h-4 mr-2" />
                  Become a Mentor
                </Button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {myMentorships.map((mentorship) => (
                <Card key={mentorship.id} className="shadow-soft">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={mentorship.avatar} alt={mentorship.name} />
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {mentorship.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{mentorship.name}</CardTitle>
                        <p className="text-sm text-muted-foreground capitalize">
                          {mentorship.role} • {mentorship.field}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Started:</span>
                        <div className="font-medium">{mentorship.startDate}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Sessions:</span>
                        <div className="font-medium">{mentorship.sessions} completed</div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Progress</span>
                        <span className="text-sm font-medium">{mentorship.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${mentorship.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <span className="text-sm text-muted-foreground">Goals:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {mentorship.goals.map((goal) => (
                          <Badge key={goal} variant="outline" className="text-xs">
                            {goal}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-muted-foreground">Next Session:</span>
                        <span className="text-sm font-medium">{mentorship.nextSession}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Message
                        </Button>
                        <Button size="sm" variant="outline">
                          <Calendar className="w-4 h-4 mr-2" />
                          Schedule
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-4 mt-8">
              {[
                { label: "Total Sessions", value: "13", icon: Clock, color: "text-blue-600" },
                { label: "Active Mentees", value: "2", icon: Users, color: "text-green-600" },
                { label: "Avg Rating", value: "4.8", icon: Star, color: "text-yellow-600" },
                { label: "Impact Score", value: "92", icon: TrendingUp, color: "text-purple-600" }
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <Card key={stat.label} className="shadow-soft">
                    <CardContent className="p-4 text-center">
                      <Icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Mentorship;