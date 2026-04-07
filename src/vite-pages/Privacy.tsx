import type { ComponentType, ReactNode } from "react";
import {
  Shield,
  BookOpen,
  Cookie,
  Layers,
  Lock,
  ExternalLink,
  Scale,
  FileText,
  MessageCircle,
  ListTree,
  CircleDot,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

const PATH = "/privacy";
const TITLE = "Privacy Policy";
const DESCRIPTION =
  "Read how AhrefsGroupBuy collects, uses, and protects your information—including cookies, third-party services, your rights, and how to contact us.";

function SectionCard({
  icon: Icon,
  iconClassName,
  title,
  children,
}: {
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  iconClassName: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[2rem] border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:gap-6">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-sm ring-1 ring-slate-100 ${iconClassName}`}
        >
          <Icon className="h-6 w-6" aria-hidden />
        </div>
        <div className="min-w-0 flex-1 space-y-4">
          <h2 className="text-xl font-black uppercase tracking-tight text-[#1A284D] sm:text-2xl">{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm font-medium leading-relaxed text-slate-600">
          <CircleDot className="mt-1.5 h-4 w-4 shrink-0 text-[#FF5C00]" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Privacy() {
  const lastUpdated = new Date().toISOString().slice(0, 10);

  return (
    <>
      <div className="min-h-screen bg-slate-50 pb-20 pt-24 md:pt-28">
        <div className="border-b border-white/10 bg-[#1A284D] text-white">
          <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
            <header className="max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-600/20 px-4 py-2">
                <Shield className="h-4 w-4 text-blue-300" aria-hidden />
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-100">Your privacy</span>
              </div>
              <h1 className="text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl md:text-5xl">
                {TITLE}
              </h1>
              <p className="border-l-4 border-blue-400 pl-5 text-base font-medium leading-relaxed text-blue-100/90 md:text-lg">
                Clear, honest information about how {SITE_CONFIG.name} handles data when you use our website—so you can
                browse and buy with confidence.
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-200/80">Last updated: {lastUpdated}</p>
            </header>
          </div>
        </div>

        <div className="mx-auto max-w-4xl space-y-8 px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
          <SectionCard
            icon={BookOpen}
            iconClassName="bg-gradient-to-br from-blue-50 to-slate-50 text-blue-600"
            title="Introduction"
          >
            <div className="space-y-4 text-sm font-medium leading-relaxed text-slate-600">
              <p>
                Welcome to {SITE_CONFIG.name}. Your privacy is very important to us, and this Privacy Policy explains how
                we collect, use, and protect your information when you visit our site. By using this website, you agree
                to the terms described in this policy.
              </p>
              <p>
                We are committed to keeping your data safe and being transparent about how your information is handled.
              </p>
            </div>
          </SectionCard>

          <SectionCard
            icon={ListTree}
            iconClassName="bg-gradient-to-br from-orange-50 to-amber-50 text-[#FF5C00]"
            title="Information We Collect"
          >
            <p className="text-sm font-medium leading-relaxed text-slate-600">
              We may collect different types of information to improve our website and provide a better user experience.
              This may include:
            </p>
            <BulletList
              items={[
                "Personal information such as your name or email (only if you provide it voluntarily)",
                "Non-personal information such as browser type, device, and pages visited",
                "Usage data including time spent on pages and interactions",
              ]}
            />
            <p className="text-sm font-medium leading-relaxed text-slate-600">
              This information helps us understand how users interact with our website and how we can improve it.
            </p>
          </SectionCard>

          <SectionCard
            icon={CircleDot}
            iconClassName="bg-gradient-to-br from-slate-50 to-blue-50 text-[#1A284D]"
            title="How We Use Your Information"
          >
            <p className="text-sm font-medium leading-relaxed text-slate-600">
              We use the collected information for the following purposes:
            </p>
            <BulletList
              items={[
                "To improve website performance and content quality",
                "To understand user behavior and preferences",
                "To respond to user inquiries or messages",
                "To maintain website security and prevent misuse",
              ]}
            />
            <p className="rounded-2xl border border-green-100 bg-green-50/80 p-4 text-sm font-semibold text-slate-700">
              We do not sell, trade, or share your personal information with third parties for marketing purposes.
            </p>
          </SectionCard>

          <SectionCard
            icon={Cookie}
            iconClassName="bg-gradient-to-br from-amber-50 to-orange-50 text-amber-700"
            title="Cookies"
          >
            <div className="space-y-4 text-sm font-medium leading-relaxed text-slate-600">
              <p>
                Our website may use cookies to enhance your browsing experience. Cookies are small data files stored on
                your device that help us analyze website traffic and remember user preferences.
              </p>
              <p>
                You can choose to disable cookies through your browser settings. However, some features of the website may
                not function properly if cookies are disabled.
              </p>
            </div>
          </SectionCard>

          <SectionCard
            icon={Layers}
            iconClassName="bg-gradient-to-br from-blue-50 to-indigo-50 text-indigo-600"
            title="Third-Party Services"
          >
            <div className="space-y-4 text-sm font-medium leading-relaxed text-slate-600">
              <p>
                We may use third-party tools and services to operate our website efficiently. These may include analytics
                tools and advertising services.
              </p>
              <p>
                These third-party providers may collect information in accordance with their own privacy policies. We
                recommend reviewing their policies for more details on how they handle data.
              </p>
            </div>
          </SectionCard>

          <SectionCard
            icon={Lock}
            iconClassName="bg-gradient-to-br from-emerald-50 to-teal-50 text-emerald-700"
            title="Data Security"
          >
            <div className="space-y-4 text-sm font-medium leading-relaxed text-slate-600">
              <p>
                We take reasonable measures to protect your information from unauthorized access, misuse, or disclosure.
                Our website uses secure technologies to help keep your data safe.
              </p>
              <p className="text-slate-500">
                However, no method of transmission over the internet is 100% secure, so we cannot guarantee absolute
                security.
              </p>
            </div>
          </SectionCard>

          <SectionCard
            icon={ExternalLink}
            iconClassName="bg-gradient-to-br from-slate-100 to-slate-50 text-slate-700"
            title="Links to Other Websites"
          >
            <p className="text-sm font-medium leading-relaxed text-slate-600">
              Our website may contain links to external websites. We are not responsible for the privacy practices or
              content of those websites. We encourage users to review the privacy policies of any external sites they
              visit.
            </p>
          </SectionCard>

          <SectionCard
            icon={Scale}
            iconClassName="bg-gradient-to-br from-violet-50 to-purple-50 text-violet-700"
            title="Your Rights"
          >
            <p className="text-sm font-medium leading-relaxed text-slate-600">
              Depending on your location, you may have certain rights regarding your personal data, including:
            </p>
            <BulletList
              items={[
                "The right to access your data",
                "The right to request correction or deletion",
                "The right to withdraw consent",
              ]}
            />
            <p className="text-sm font-medium leading-relaxed text-slate-600">
              If you wish to exercise any of these rights, you can contact us using the information provided below.
            </p>
          </SectionCard>

          <SectionCard
            icon={FileText}
            iconClassName="bg-gradient-to-br from-sky-50 to-blue-50 text-sky-700"
            title="Updates to This Policy"
          >
            <p className="text-sm font-medium leading-relaxed text-slate-600">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated
              revision date. We encourage you to review this page regularly to stay informed.
            </p>
          </SectionCard>

          <SectionCard
            icon={MessageCircle}
            iconClassName="bg-gradient-to-br from-emerald-50 to-green-50 text-emerald-600"
            title="Contact Us"
          >
            <div className="space-y-5 text-sm font-medium leading-relaxed text-slate-600">
              <p>
                If you have any questions about this Privacy Policy or how your data is handled, you can reach us on
                WhatsApp and we&apos;ll get back to you as soon as we can.
              </p>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-3.5 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-emerald-200/60 transition-colors hover:bg-[#20BD5A]"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
                Chat on WhatsApp
              </a>
            </div>
          </SectionCard>
        </div>
      </div>
    </>
  );
}
