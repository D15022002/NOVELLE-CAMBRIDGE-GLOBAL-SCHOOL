import { Route, Switch, Router as WouterRouter } from 'wouter';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Welcome } from '@/components/sections/Welcome';
import { CambridgeCurriculum } from '@/components/sections/CambridgeCurriculum';
import { Philosophy } from '@/components/sections/Philosophy';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Programs } from '@/components/sections/Programs';
import { CoreValues } from '@/components/sections/CoreValues';
import { BeyondClassroom } from '@/components/sections/BeyondClassroom';
import { Safety } from '@/components/sections/Safety';
import { Testimonials } from '@/components/sections/Testimonials';
import { Admissions } from '@/components/sections/Admissions';
import { FAQ } from '@/components/sections/FAQ';
import { Teachers } from '@/components/sections/Teachers';
import { FranchiseOpportunity } from '@/components/sections/FranchiseOpportunity';
import { FinalCTA } from '@/components/sections/FinalCTA';

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Welcome />
        <CambridgeCurriculum />
        <Philosophy />
        <WhyChooseUs />
        <Programs />
        <CoreValues />
        <BeyondClassroom />
        <Safety />
        <Testimonials />
        <Admissions />
        <FAQ />
        <Teachers />
        <FranchiseOpportunity />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <WouterRouter base="/NOVELLE-CAMBRIDGE-GLOBAL-SCHOOL">
      <Switch>
        <Route path="/" component={Home} />
        <Route>
          <div className="min-h-screen flex items-center justify-center bg-background flex-col gap-4 text-center p-4">
            <h1 className="text-4xl font-serif text-primary">Page Not Found</h1>
            <p className="text-muted-foreground max-w-md">The page you are looking for doesn't exist or has been moved.</p>
            <a href="/NOVELLE-CAMBRIDGE-GLOBAL-SCHOOL/" className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
              Return Home
            </a>
          </div>
        </Route>
      </Switch>
    </WouterRouter>
  );
}

export default App;
