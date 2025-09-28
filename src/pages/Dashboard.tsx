import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Users,
  Calendar,
  TrendingUp,
  Heart,
  MessageSquare,
  Star,
  Award,
  Target,
  Clock,
  ArrowUpRight,
  Bell
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Alumni",
      value: "47,293",
      change: "+12%",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Active Mentorships",
      value: "1,284",
      change: "+23%",
      icon: MessageSquare,
      color: "text-green-600"
    },
    {
      title: "Upcoming Events",
      value: "15",
      change: "+5%",
      icon: Calendar,
      color: "text-purple-600"
    },
    {
      title: "Funds Raised",
      value: "$2.4M",
      change: "+18%",
      icon: Heart,
      color: "text-red-600"
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: "mentorship",
      message: "New mentorship request from Sarah Johnson",
      time: "2 hours ago",
      icon: MessageSquare
    },
    {
      id: 2,
      type: "donation",
      message: "Michael Chen donated $5,000 to scholarship fund",
      time: "4 hours ago",
      icon: Heart
    },
    {
      id: 3,
      type: "event",
      message: "Tech Alumni Meetup - 45 new registrations",
      time: "6 hours ago",
      icon: Calendar
    },
    {
      id: 4,
      type: "connection",
      message: "15 new alumni joined the network today",
      time: "8 hours ago",
      icon: Users
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Alumni Gala",
      date: "Dec 15, 2024",
      attendees: 234,
      status: "confirmed"
    },
    {
      id: 2,
      title: "Tech Career Panel",
      date: "Dec 20, 2024",
      attendees: 89,
      status: "confirmed"
    },
    {
      id: 3,
      title: "Mentorship Workshop",
      date: "Jan 5, 2025",
      attendees: 67,
      status: "planning"
    }
  ];

  const fundraisingGoals = [
    {
      name: "Scholarship Fund",
      current: 750000,
      target: 1000000,
      percentage: 75
    },
    {
      name: "Research Grant",
      current: 340000,
      target: 500000,
      percentage: 68
    },
    {
      name: "Campus Development",
      current: 2100000,
      target: 3000000,
      percentage: 70
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Alumni Dashboard</h1>
              <p className="text-primary-foreground/90">
                Welcome back! Here's what's happening in your alumni network.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="secondary" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-sm text-success font-medium">
                        {stat.change} from last month
                      </p>
                    </div>
                    <div className={`p-3 rounded-full bg-muted ${stat.color}`}>
                      <Icon className="w-6 h-6" />
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
            {/* Fundraising Progress */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-primary" />
                  Fundraising Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {fundraisingGoals.map((goal) => (
                  <div key={goal.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{goal.name}</h4>
                      <span className="text-sm text-muted-foreground">
                        ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                      </span>
                    </div>
                    <Progress value={goal.percentage} className="h-2" />
                    <p className="text-sm text-muted-foreground">
                      {goal.percentage}% of goal reached
                    </p>
                  </div>
                ))}
                <Button className="w-full mt-4">
                  View All Campaigns
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  Recent Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => {
                    const Icon = activity.icon;
                    return (
                      <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-smooth">
                        <div className="p-2 rounded-full bg-primary/10">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground">
                            {activity.message}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Activities
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Events */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-primary" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="p-3 border border-border rounded-lg">
                    <h4 className="font-medium mb-1">{event.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{event.date}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {event.attendees} attendees
                      </span>
                      <Badge 
                        variant={event.status === 'confirmed' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {event.status}
                      </Badge>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  Manage Events
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Add New Alumni
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  Create Event
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send Newsletter
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
              </CardContent>
            </Card>

            {/* Top Performers */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-primary" />
                  Top Contributors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: "Sarah Johnson", contribution: "Mentored 15 students", score: 98 },
                  { name: "Michael Chen", contribution: "Donated $50K", score: 95 },
                  { name: "Emily Rodriguez", contribution: "Hosted 3 events", score: 92 }
                ].map((contributor, index) => (
                  <div key={contributor.name} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                        index === 0 ? 'bg-accent' : index === 1 ? 'bg-muted-foreground' : 'bg-muted-foreground/70'
                      }`}>
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground">
                        {contributor.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {contributor.contribution}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-accent fill-current mr-1" />
                      <span className="text-sm font-medium">{contributor.score}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;