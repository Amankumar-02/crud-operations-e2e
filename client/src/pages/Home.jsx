import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import Section from '../components/Section.jsx';
import SectionCards from '../components/SectionCards.jsx';
import InfoSection from '../components/InfoSection.jsx';
import LoginSection from '../components/LoginSection.jsx';

const featureCards = [
  {
    icon: '🗂️',
    title: 'Organized Boards',
    description: 'Structure every project with lists, cards, and custom labels so nothing slips through the cracks.',
  },
  {
    icon: '🤝',
    title: 'Real-Time Collaboration',
    description: 'Share updates, assign owners, and comment on work instantly so every team member stays informed.',
  },
  {
    icon: '📈',
    title: 'Progress Analytics',
    description: 'Know which tasks are on track, overdue, or blocked with clean reporting and status summaries.',
  },
];

const productCards = [
  {
    title: 'Task Boards',
    description: 'Build workflows with drag-and-drop boards, labels, and automation rules.',
  },
  {
    title: 'Reports',
    description: 'Turn progress into insights with custom analytics and dashboards.',
  },
  {
    title: 'Integrations',
    description: 'Connect your favorite tools and keep work synced across every team.',
  },
];

const solutionCards = [
  {
    title: 'Product Teams',
    description: 'Plan releases, manage sprints, and move from ideas to shipped features faster.',
  },
  {
    title: 'Operations',
    description: 'Keep cross-functional work aligned and remove bottlenecks with transparent workflows.',
  },
  {
    title: 'Remote Teams',
    description: 'Stay connected across time zones with shared goals, updates, and priorities.',
  },
];

const pricingCards = [
  {
    title: 'Starter',
    price: 'Free',
    description: 'Basic task management for small teams getting started.',
  },
  {
    title: 'Growth',
    price: '$12/user',
    description: 'Advanced collaboration tools for growing teams.',
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    description: 'Tailored support, security, and workflows for large organizations.',
  },
];

const resourceCards = [
  {
    title: 'Guides',
    description: 'Step-by-step playbooks for onboarding, planning, and delivery.',
  },
  {
    title: 'Templates',
    description: 'Ready-made boards and workflows for every team type.',
  },
  {
    title: 'Support',
    description: 'Expert help when you need it most, from setup to scaling.',
  },
];

const aboutItems = [
  'Custom boards, priorities, and reminders for every team.',
  'Automations that keep recurring work moving without manual follow-up.',
  'A single view for priorities, progress, and next actions.',
];

function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <Hero />

        <Section
          id="features"
          eyebrow="Features"
          title="The simplest way to manage your team and stay aligned."
          description="Create plans, assign tasks, and track progress from a single dashboard that makes collaboration effortless."
        >
          <SectionCards cards={featureCards} />
        </Section>

        <div className="mt-24 space-y-24">
          <Section
            id="products"
            eyebrow="Products"
            title="Everything your team needs in one powerful product suite."
            description="From task boards to status reports, our product suite keeps work visible, prioritized, and on schedule."
          >
            <SectionCards cards={productCards} />
          </Section>

          <Section
            id="solutions"
            eyebrow="Solutions"
            title="Solutions built for every team and every stage of work."
            description="Whether you’re launching product, scaling operations, or managing distributed teams, TaskFlow adapts to your needs."
          >
            <SectionCards cards={solutionCards} />
          </Section>

          <Section
            id="pricing"
            eyebrow="Pricing"
            title="Simple pricing for teams of every size."
            description="Choose the plan that fits your workflow, then scale on demand as your team grows."
          >
            <SectionCards cards={pricingCards} />
          </Section>

          <Section
            id="resources"
            eyebrow="Resources"
            title="Resources that help you get the most from your workflow."
            description="Explore guides, templates, and best practices to keep your team moving confidently."
          >
            <SectionCards cards={resourceCards} />
          </Section>

          <InfoSection
            id="about"
            title="Built for every workflow"
            description="Whether you run a lean startup or a cross-functional enterprise team, TaskFlow adapts to the way you plan, review, and ship work."
            items={aboutItems}
            variant="dark"
          />
        </div>

        <LoginSection />
      </main>

      <footer id="footer" className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-950">TaskFlow</p>
            <p className="mt-2 text-sm text-slate-600">Task management designed for teams that ship on time.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <a href="#features" className="transition hover:text-slate-900">Features</a>
            <a href="#about" className="transition hover:text-slate-900">About</a>
            <a href="/about" className="transition hover:text-slate-900">Company</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
