import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Heart,
  Target,
  TrendingUp,
  Users,
  Calendar,
  DollarSign,
  Award,
  Gift,
  Share2,
  Search,
  Filter,
  Zap
} from "lucide-react";

const Fundraising = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const campaigns = [
    {
      id: 1,
      title: "Emergency Student Relief Fund",
      description: "Supporting students facing financial hardship due to unexpected circumstances.",
      goal: 100000,
      raised: 75420,
      percentage: 75,
      donors: 234,
      daysLeft: 15,
      category: "student-support",
      image: "/api/placeholder/400/200",
      urgent: true,
      featured: true
    },
    {
      id: 2,
      title: "New Engineering Lab Equipment",
      description: "State-of-the-art equipment for our engineering students to enhance their learning experience.",
      goal: 250000,
      raised: 180750,
      percentage: 72,
      donors: 156,
      daysLeft: 30,
      category: "infrastructure",
      image: "/api/placeholder/400/200",
      urgent: false,
      featured: true
    },
    {
      id: 3,
      title: "Merit Scholarship Program",
      description: "Providing scholarships to outstanding students from underrepresented communities.",
      goal: 500000,
      raised: 320000,
      percentage: 64,
      donors: 445,
      daysLeft: 45,
      category: "scholarships",
      image: "/api/placeholder/400/200",
      urgent: false,
      featured: false
    },
    {
      id: 4,
      title: "Alumni Mentorship Platform Enhancement",
      description: "Upgrading our mentorship platform with AI-powered matching and enhanced features.",
      goal: 75000,
      raised: 45600,
      percentage: 61,
      donors: 89,
      daysLeft: 20,
      category: "technology",
      image: "/api/placeholder/400/200",
      urgent: false,
      featured: false
    }
  ];

  const topDonors = [
    {
      name: "Michael Chen",
      avatar: "/api/placeholder/60/60",
      amount: 50000,
      campaigns: 3,
      badge: "Platinum Supporter"
    },
    {
      name: "Sarah Johnson",
      avatar: "/api/placeholder/60/60",
      amount: 25000,
      campaigns: 5,
      badge: "Gold Supporter"
    },
    {
      name: "Dr. Emily Rodriguez",
      avatar: "/api/placeholder/60/60",
      amount: 15000,
      campaigns: 2,
      badge: "Silver Supporter"
    },
    {
      name: "Anonymous Donor",
      avatar: "/api/placeholder/60/60",
      amount: 100000,
      campaigns: 1,
      badge: "Diamond Supporter"
    }
  ];

  const impactStats = [
    {
      title: "Students Supported",
      value: "2,847",
      icon: Users,
      change: "+12%"
    },
    {
      title: "Total Raised",
      value: "$3.2M",
      icon: DollarSign,
      change: "+25%"
    },
    {
      title: "Active Campaigns",
      value: "12",
      icon: Target,
      change: "+3"
    },
    {
      title: "Success Rate",
      value: "94%",
      icon: TrendingUp,
      change: "+2%"
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Diamond Supporter": return "bg-gradient-to-r from-blue-400 to-purple-500 text-white";
      case "Platinum Supporter": return "bg-gradient-to-r from-gray-300 to-gray-500 text-white";
      case "Gold Supporter": return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white";
      case "Silver Supporter": return "bg-gradient-to-r from-gray-200 to-gray-400 text-gray-800";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "student-support": return "bg-red-100 text-red-800";
      case "infrastructure": return "bg-blue-100 text-blue-800";
      case "scholarships": return "bg-green-100 text-green-800";
      case "technology": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Alumni Fundraising</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Support your alma mater and help shape the future of education. 
              Every contribution makes a meaningful impact on student success.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impactStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                      <p className="text-sm text-success font-medium">
                        {stat.change} this year
                      </p>
                    </div>
                    <div className="p-3 rounded-full bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search campaigns..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                All Categories
              </Button>
            </div>

            {/* Active Campaigns */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Active Campaigns</h2>
              
              {campaigns.map((campaign) => (
                <Card key={campaign.id} className={`shadow-soft hover:shadow-medium transition-smooth ${campaign.featured ? 'ring-2 ring-accent/20' : ''}`}>
                  {campaign.featured && (
                    <div className="bg-accent text-accent-foreground px-4 py-2 text-sm font-medium">
                      <Zap className="w-4 h-4 inline mr-2" />
                      Featured Campaign
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold">{campaign.title}</h3>
                          {campaign.urgent && (
                            <Badge variant="destructive" className="text-xs">
                              Urgent
                            </Badge>
                          )}
                        </div>
                        <Badge variant="outline" className={getCategoryColor(campaign.category)}>
                          {campaign.category.replace('-', ' ')}
                        </Badge>
                        <p className="text-muted-foreground mt-2">{campaign.description}</p>
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Progress</span>
                        <span className="text-sm font-medium">{campaign.percentage}%</span>
                      </div>
                      <Progress value={campaign.percentage} className="h-3" />
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-semibold">
                          ${campaign.raised.toLocaleString()} raised
                        </span>
                        <span className="text-muted-foreground">
                          of ${campaign.goal.toLocaleString()} goal
                        </span>
                      </div>
                    </div>

                    {/* Campaign Stats */}
                    <div className="flex items-center justify-between mb-6 p-4 bg-muted/50 rounded-lg">
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Users className="w-4 h-4 mr-1 text-muted-foreground" />
                          <span className="font-semibold">{campaign.donors}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Donors</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Calendar className="w-4 h-4 mr-1 text-muted-foreground" />
                          <span className="font-semibold">{campaign.daysLeft}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Days Left</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Target className="w-4 h-4 mr-1 text-muted-foreground" />
                          <span className="font-semibold">${(campaign.goal - campaign.raised).toLocaleString()}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Remaining</div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button className="flex-1">
                        <Heart className="w-4 h-4 mr-2" />
                        Donate Now
                      </Button>
                      <Button variant="outline">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                      <Button variant="outline" size="sm">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Donate */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gift className="w-5 h-5 mr-2 text-primary" />
                  Quick Donate
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  {[25, 50, 100, 250].map((amount) => (
                    <Button key={amount} variant="outline" className="text-sm">
                      ${amount}
                    </Button>
                  ))}
                </div>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Custom amount" className="pl-10" />
                </div>
                <Button className="w-full">
                  <Heart className="w-4 h-4 mr-2" />
                  Donate Now
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  100% of your donation goes directly to the cause
                </p>
              </CardContent>
            </Card>

            {/* Top Supporters */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-primary" />
                  Top Supporters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topDonors.map((donor, index) => (
                  <div key={donor.name} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                        index === 0 ? 'bg-accent' : index === 1 ? 'bg-muted-foreground' : 'bg-muted-foreground/70'
                      }`}>
                        {index + 1}
                      </div>
                    </div>
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={donor.avatar} alt={donor.name} />
                      <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                        {donor.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground">
                        {donor.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        ${donor.amount.toLocaleString()} • {donor.campaigns} campaigns
                      </p>
                      <Badge className={`text-xs mt-1 ${getBadgeColor(donor.badge)}`}>
                        {donor.badge}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Impact Story */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Recent Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium mb-2">New Computer Lab Opened</h4>
                    <p className="text-sm text-muted-foreground">
                      Thanks to your generous donations, we've opened a state-of-the-art computer lab 
                      serving 300+ students daily.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium mb-2">50 Scholarships Awarded</h4>
                    <p className="text-sm text-muted-foreground">
                      This semester, 50 deserving students received full scholarships through 
                      our merit program.
                    </p>
                  </div>
                  <Button variant="outline" className="w-full">
                    View All Impact Stories
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fundraising;