import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Shield, Zap } from "lucide-react";

const Hero = () => {
  const stats = [
    { label: "Alumni Connected", value: "50K+", icon: Users },
    { label: "Success Rate", value: "95%", icon: TrendingUp },
    { label: "Secure Platform", value: "100%", icon: Shield },
    { label: "AI Powered", value: "Smart", icon: Zap },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Hero Background */}
      <div className="hero-gradient">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center animate-fade-in">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Smart Alumni
              <span className="block text-accent">Management Platform</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect, engage, and grow your institutional community with AI-powered 
              networking, mentorship matching, and transparent fundraising.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8 py-4 text-lg shadow-glow transition-bounce">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg backdrop-blur-sm"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 animate-slide-up">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={stat.label}
                    className="text-center animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3 backdrop-blur-sm">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-white/80 text-sm lg:text-base">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Features Preview */}
      <div className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Build Strong Alumni Networks
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From AI-powered matching to secure fundraising, SAMP provides all the tools 
              educational institutions need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Matching",
                description: "Smart algorithms connect alumni with students for mentorship and career opportunities.",
                color: "from-blue-500 to-purple-600"
              },
              {
                title: "Secure Fundraising",
                description: "Transparent donation tracking with blockchain-verified credentials and achievements.",
                color: "from-green-500 to-teal-600"
              },
              {
                title: "Event Management",
                description: "QR check-ins, virtual networking, and comprehensive analytics for all your events.",
                color: "from-orange-500 to-red-600"
              }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className="relative p-6 bg-card rounded-xl shadow-medium hover:shadow-strong transition-smooth animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} mb-4 flex items-center justify-center`}>
                  <div className="w-6 h-6 bg-white rounded-sm"></div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;