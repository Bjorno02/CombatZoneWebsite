import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import EventsPage from "@/pages/events";
import EventDetailPage from "@/pages/event-detail";
import PastEventsPage from "@/pages/past-events";
import AboutPage from "@/pages/about";
import FightersPage from "@/pages/fighters";
import MediaPage from "@/pages/media";
import ShopPage from "@/pages/shop";
import SponsorsPage from "@/pages/sponsors";
import SponsorPackagesPage from "@/pages/sponsor-packages";
import ContactPage from "@/pages/contact";
import VIPPage from "@/pages/vip";
import FightCardPage from "@/pages/fight-card";
import SocialPage from "@/pages/social";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/events/past" component={PastEventsPage} />
      <Route path="/events/:eventId" component={EventDetailPage} />
      <Route path="/events" component={EventsPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/fighters" component={FightersPage} />
      <Route path="/media" component={MediaPage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/sponsors" component={SponsorsPage} />
      <Route path="/sponsor-packages" component={SponsorPackagesPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/vip" component={VIPPage} />
      <Route path="/fight-card" component={FightCardPage} />
      <Route path="/social" component={SocialPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

