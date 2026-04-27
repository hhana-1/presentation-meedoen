import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Building2,
  Globe,
  TrendingUp,
  ShieldCheck,
  Briefcase,
  Heart,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Star,
  Clock,
  Euro,
  FileText,
  XCircle,
} from "lucide-react";

import IMG_PERSON1 from "../imports/IMG_4843_(1).jpeg";
import IMG_PERSON2 from "../imports/IMG_3681_(1).jpeg";
import IMG_PERSON3 from "../imports/IMG_7221_(1).jpeg";
import IMG_DIFFICULT from "../imports/39-10347296374a98b49131.jpg";

const IMG_POSITIVE = IMG_PERSON3;

const costData = [
  { year: "2022", amount: 1.6 },
  { year: "2023", amount: 2.7 },
  { year: "2024", amount: 3.3 },
  { year: "2025", amount: 4.0 },
  { year: "2026", amount: 4.19 },
];

// ── Slides ────────────────────────────────────────────────────────────────────

function Slide1() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <div className="absolute top-0 left-0 right-0 h-2 flex">
        <div className="flex-1 bg-[#AE1C28]" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-[#21468B]" />
      </div>
      <div className="relative z-10 text-center px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-orange-100 border border-orange-300 rounded-full px-4 py-1.5 mb-8"
        >
          <Globe className="w-4 h-4 text-orange-600" />
          <span className="text-orange-700 text-sm tracking-widest uppercase font-bold">
            Integration Policy Proposal
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="text-5xl md:text-6xl mb-6 leading-tight font-extrabold"
        >
          <span className="text-gray-900">Improving Asylum Integration</span>
          <br />
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            in the Netherlands
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="text-gray-700 text-xl md:text-2xl font-medium"
        >
          Turning waiting time into active participation — for seekers, society, and the economy
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 flex justify-center gap-8"
        >
          {[
            { icon: Users, label: "70,000 in the system", color: "orange" },
            { icon: Clock, label: "2+ years waiting", color: "red" },
            { icon: Euro, label: "€4B+ per year", color: "blue" },
          ].map(({ icon: Icon, label, color }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${
                  color === "orange"
                    ? "bg-orange-100 border-orange-300"
                    : color === "red"
                    ? "bg-red-100 border-red-300"
                    : "bg-blue-100 border-blue-300"
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    color === "orange"
                      ? "text-orange-600"
                      : color === "red"
                      ? "text-red-600"
                      : "text-blue-600"
                  }`}
                />
              </div>
              <span className="text-gray-700 text-sm font-bold">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function Slide2() {
  const stats = [
    {
      value: "70,000+",
      label: "asylum seekers in COA reception (non-Ukrainian)",
      sub: "19,606 are children · ~50,000 adults who can work",
      color: "orange",
    },
    {
      value: "24,000",
      label: "first-time applications in 2025",
      sub: "↓ 25% from 32,180 in 2024 — source: IND Asylum Trends",
      color: "blue",
    },
    {
      value: "2+ years",
      label: "average waiting time for a decision",
      sub: "Many wait 3–5 years",
      color: "red",
    },
    {
      value: "20,000",
      label: "asylum beds projected missing in 2026",
      sub: "Municipalities cannot keep up with demand",
      color: "red",
    },
  ];
  return (
    <SlideLayout badge="The Numbers" title="This Is the Scale" accent="orange">
      <div className="grid grid-cols-2 gap-4 mt-5">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 * i + 0.2 }}
            className={`p-5 rounded-xl border-2 shadow-sm ${
              s.color === "orange"
                ? "bg-orange-50 border-orange-300"
                : s.color === "blue"
                ? "bg-blue-50 border-blue-300"
                : s.color === "red"
                ? "bg-red-50 border-red-300"
                : "bg-gray-50 border-gray-300"
            }`}
          >
            <div
              className={`text-5xl font-black mb-1 ${
                s.color === "orange"
                  ? "text-orange-600"
                  : s.color === "blue"
                  ? "text-blue-600"
                  : s.color === "red"
                  ? "text-red-600"
                  : "text-gray-700"
              }`}
            >
              {s.value}
            </div>
            <div className="text-gray-800 font-bold text-sm leading-snug">{s.label}</div>
            <div className="text-gray-500 text-xs mt-1 font-medium">{s.sub}</div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85 }}
        className="mt-4 p-4 rounded-xl bg-white border-2 border-orange-200 flex items-center gap-3 shadow-sm"
      >
        <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0" />
        <p className="text-gray-700 text-sm font-semibold">
          The government cannot easily stop people from arriving — but it <span className="text-orange-600 font-extrabold">can choose what happens while they're here</span>.
          Of the 70,000+ non-Ukrainian seekers, <strong>19,606 are children</strong> (CBS, Jan 2026). That leaves <span className="text-orange-600 font-extrabold">~50,000 adults who can work</span> — sitting idle, costing €4.19B a year. The question is: what do we do with that?
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.05 }}
        className="mt-2 flex gap-2"
      >
        <div className="flex-1 px-3 py-2 rounded-lg bg-blue-50 border border-blue-200 flex items-start gap-2">
          <span className="text-blue-500 text-xs font-extrabold flex-shrink-0 mt-0.5">* Note</span>
          <p className="text-blue-700 text-xs font-semibold">
            All figures refer to <strong>non-Ukrainian asylum seekers</strong>. Ukrainians have separate temporary protection — can work from day one, housed separately.
          </p>
        </div>
        <div className="flex-1 px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 flex items-start gap-2">
          <span className="text-gray-500 text-xs font-extrabold flex-shrink-0 mt-0.5">Sources</span>
          <p className="text-gray-600 text-xs font-semibold">
            IND Asylum Trends (ind.nl) · CBS Asiel en Integratie 2025 (cbs.nl) · COA / rijksfinancien.nl
          </p>
        </div>
      </motion.div>
    </SlideLayout>
  );
}

function Slide3() {
  const parties = [
    {
      icon: FileText,
      title: "IND is overwhelmed",
      color: "red",
      items: [
        "Massive backlog of applications to process",
        "Understaffed relative to demand",
        "Long queues with no end in sight",
        "Burned-out caseworkers, rising errors",
      ],
    },
    {
      icon: Euro,
      title: "Dutch system is overspending",
      color: "blue",
      items: [
        "€4B+ per year and rising fast",
        "Mostly spent on passive housing & food",
        "Emergency facilities are very expensive",
        "No return on this investment — money disappears",
      ],
    },
    {
      icon: Users,
      title: "Asylum seekers are stuck",
      color: "orange",
      items: [
        "Years of waiting with nothing to do",
        "No sense of purpose or progress",
        "Skills go unused and skills atrophy",
        "Mental health deteriorates while waiting",
      ],
    },
  ];
  return (
    <SlideLayout badge="The Problem" title="Everyone Is Frustrated" accent="red">
      <div className="grid grid-cols-3 gap-4 mt-5">
        {parties.map(({ icon: Icon, title, color, items }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * i + 0.3 }}
            className={`p-5 rounded-xl border-2 shadow-sm ${
              color === "red"
                ? "bg-red-50 border-red-300"
                : color === "blue"
                ? "bg-blue-50 border-blue-300"
                : "bg-orange-50 border-orange-300"
            }`}
          >
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                color === "red" ? "bg-red-200" : color === "blue" ? "bg-blue-200" : "bg-orange-200"
              }`}
            >
              <Icon
                className={`w-5 h-5 ${
                  color === "red"
                    ? "text-red-600"
                    : color === "blue"
                    ? "text-blue-600"
                    : "text-orange-600"
                }`}
              />
            </div>
            <h3 className="text-gray-900 mb-3 font-extrabold text-sm">{title}</h3>
            <ul className="space-y-1.5">
              {items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-xs text-gray-700 font-medium">
                  <span
                    className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      color === "red"
                        ? "bg-red-500"
                        : color === "blue"
                        ? "bg-blue-500"
                        : "bg-orange-500"
                    }`}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.95 }}
        className="mt-4 p-4 rounded-xl bg-white border-2 border-red-200 text-center shadow-sm"
      >
        <p className="text-gray-800 font-bold text-sm">
          This is not a problem with <em>the people</em> — it is a problem with{" "}
          <span className="text-red-600 font-extrabold">the system that keeps them passive</span>.
          If they're already here, it's too late to stop them coming. The cost is already being paid.
        </p>
      </motion.div>
    </SlideLayout>
  );
}

function Slide4() {
  return (
    <SlideLayout badge="Finances" title="Rising Costs" accent="orange">
      <div className="grid grid-cols-5 gap-6 mt-4 items-start">
        <div className="col-span-3">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="h-64 bg-white p-4 rounded-xl border-2 border-orange-200 shadow-sm"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={costData} barSize={36}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="year" stroke="#6b7280" tick={{ fill: "#6b7280", fontSize: 13, fontWeight: 600 }} />
                <YAxis
                  stroke="#6b7280"
                  tick={{ fill: "#6b7280", fontSize: 12, fontWeight: 600 }}
                  tickFormatter={(v) => `€${v}B`}
                  domain={[0, 5]}
                />
                <Tooltip
                  contentStyle={{
                    background: "#fff",
                    border: "2px solid #fed7aa",
                    borderRadius: 12,
                    color: "#1f2937",
                    fontWeight: 600,
                  }}
                  formatter={(v: number) => [`€${v}B`, "Budget"]}
                />
                <Bar dataKey="amount" radius={[8, 8, 0, 0]}>
                  {costData.map((_, i) => (
                    <Cell key={i} fill={i === costData.length - 1 ? "#f97316" : "#3b82f6"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
          <p className="text-gray-600 text-xs text-center mt-2 font-semibold">
            COA Budget — Source: rijksfinancien.nl / Ministerie van Asiel en Migratie
          </p>
        </div>
        <div className="col-span-2 flex flex-col gap-2 mt-1">
          {[
            { year: "2022", amount: "€1.6 billion", color: "blue" },
            { year: "2023", amount: "€2.7 billion", color: "blue" },
            { year: "2024", amount: "€3.3 billion", color: "blue" },
            { year: "2025", amount: "€4.0 billion", color: "blue" },
            { year: "2026", amount: "€4.19 billion", color: "orange" },
          ].map(({ year, amount, color }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 * i + 0.3 }}
              className={`flex items-center gap-3 p-2.5 rounded-lg border-2 shadow-sm ${
                color === "orange" ? "bg-orange-50 border-orange-300" : "bg-blue-50 border-blue-300"
              }`}
            >
              <span
                className={`text-xs font-extrabold px-2 py-0.5 rounded ${
                  color === "orange" ? "bg-orange-200 text-orange-700" : "bg-blue-200 text-blue-700"
                }`}
              >
                {year}
              </span>
              <span className="text-gray-900 font-bold text-sm">{amount}</span>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-1 p-3 rounded-lg bg-red-50 border-2 border-red-200 shadow-sm"
          >
            <p className="text-gray-700 text-xs leading-relaxed font-semibold mb-1">
              Cost per person per year:
            </p>
            <div className="flex gap-2">
              <div className="flex-1 text-center p-1.5 rounded bg-red-200">
                <div className="text-red-700 font-extrabold text-sm">€69,400</div>
                <div className="text-red-600 text-xs font-semibold">emergency housing</div>
              </div>
              <div className="flex-1 text-center p-1.5 rounded bg-green-100">
                <div className="text-green-700 font-extrabold text-sm">€30,400</div>
                <div className="text-green-600 text-xs font-semibold">regular housing</div>
              </div>
            </div>
            <p className="text-gray-600 text-xs mt-1.5 font-semibold">
              Active integration means fewer people in emergency beds.
            </p>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
}

function Slide5() {
  return (
    <SlideLayout badge="Living Standards" title="The Real Conditions" accent="red">
      <div className="grid grid-cols-2 gap-5 mt-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-xl overflow-hidden border-2 border-red-300 relative shadow-lg"
        >
          <img src={IMG_DIFFICULT} alt="Difficult conditions" className="w-full object-contain" />
          <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1.5 rounded-lg font-bold shadow-md">
            Current Reality
          </div>
          <div className="p-4 bg-red-50">
            <ul className="space-y-2">
              {[
                "Overcrowded centres with little privacy",
                "Shared rooms, noise, light, no personal space",
                "Food provided — no choice, no dignity",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-800 font-medium">
                  <span className="text-red-600 mt-0.5 font-bold">✕</span> {item}
                </li>
              ))}
            </ul>
            <div className="mt-3 p-2.5 rounded-lg bg-red-100 border border-red-300">
              <p className="text-red-800 text-xs font-bold">
                ⚠ COA staff do not always follow the law
              </p>
              <p className="text-red-700 text-xs font-medium mt-0.5">
                Residents have limited recourse and little awareness of their rights — creating a power imbalance that is rarely addressed.
              </p>
            </div>
            <div className="mt-2 flex gap-2 flex-wrap">
              {["Stress", "Boredom", "No purpose"].map((tag) => (
                <span key={tag} className="text-xs bg-red-200 text-red-700 border border-red-400 px-2 py-0.5 rounded-full font-bold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-col gap-3"
        >
          <div className="flex flex-col gap-2">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Weekly cash allowance — two situations</p>
            <div className="rounded-xl border-2 border-orange-300 overflow-hidden shadow-sm">
              <div className="bg-orange-500 px-3 py-1.5">
                <p className="text-white text-xs font-extrabold uppercase tracking-wider">Self-catering — buys own food</p>
              </div>
              <div className="p-3 bg-white flex items-end gap-2">
                <div className="text-4xl font-black text-orange-600">€73.67</div>
                <div className="text-gray-500 text-sm font-bold mb-0.5">/ week</div>
              </div>
              <div className="px-3 pb-3 bg-white space-y-1 text-xs text-gray-600 font-medium">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0" />
                  Covers food + all other personal needs
                </div>
              </div>
            </div>
            <div className="rounded-xl border-2 border-red-400 overflow-hidden shadow-sm">
              <div className="bg-red-600 px-3 py-1.5">
                <p className="text-white text-xs font-extrabold uppercase tracking-wider">Food provided at location — this is it</p>
              </div>
              <div className="p-3 bg-white flex items-end gap-2">
                <div className="text-4xl font-black text-red-600">€14.87</div>
                <div className="text-gray-500 text-sm font-bold mb-0.5">/ week</div>
              </div>
              <div className="px-3 pb-3 bg-white space-y-1 text-xs text-gray-600 font-medium">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                  €2.12 per day — less than a bus ticket
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                  No clothes, toiletries, phone credit, birthday present
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-orange-50 border-2 border-orange-300 shadow-sm">
            <p className="text-gray-800 text-sm font-bold mb-2">The Poverty Trap</p>
            <p className="text-gray-700 text-xs font-medium leading-relaxed">
              If an asylum seeker earns <strong>more than €210/month</strong>, they lose their
              government benefits and must pay for their housing themselves (REBA costs).
              So there is actually a financial <span className="text-red-600 font-extrabold">disincentive</span> to earn more — unless it's tracked carefully.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-green-50 border-2 border-green-300 shadow-sm">
            <p className="text-gray-700 text-xs font-medium leading-relaxed">
              <span className="text-green-700 font-bold">With our app:</span> earnings are tracked automatically so seekers know exactly where they stand — and can stay under the limit, or plan to cross it with a real job.
            </p>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
}

function Slide6() {
  const categories = [
    {
      title: "Asylum Seeker",
      sub: "Somali · Syrian · Ethiopian · etc.",
      color: "orange",
      icon: Clock,
      items: [
        "Waiting for an IND decision — can take 2–5+ years",
        "Most vulnerable legal category in the system",
        "Volunteering and working possible after 6 months in NL",
        "Can get BSN + legally work after 6 months",
        "Housed in shared COA centres, unless they find their own housing",
      ],
      tag: "Our platform's target group",
      tagColor: "bg-orange-200 text-orange-700",
    },
    {
      title: "Ukrainian",
      sub: "Temporary Protection Directive",
      color: "blue",
      icon: ShieldCheck,
      items: [
        "Separate legal framework — not standard asylum",
        "Can work from day one, no permit required",
        "Housed separately, more favourable conditions",
        "Not included in this presentation's data or scope",
      ],
      tag: "Out of scope for this platform",
      tagColor: "bg-blue-200 text-blue-700",
    },
    {
      title: "Refugee",
      sub: "Recognised status (erkend vluchteling)",
      color: "green",
      icon: CheckCircle2,
      items: [
        "Status granted — IND decision is final",
        "Full working rights, same as Dutch citizens",
        "Can rent housing, open bank account",
        "Access to full social services and benefits",
        "Can apply for permanent residency",
        "No longer under COA rules",
      ],
      tag: "Already has rights — less urgent",
      tagColor: "bg-green-200 text-green-700",
    },
  ];
  return (
    <SlideLayout badge="Key Distinction" title="Three Very Different Categories" accent="blue">
      <div className="grid grid-cols-3 gap-4 mt-4">
        {categories.map(({ title, sub, color, icon: Icon, items, tag, tagColor }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * i + 0.2 }}
            className={`rounded-xl border-2 overflow-hidden shadow-lg ${
              color === "orange"
                ? "border-orange-300"
                : color === "blue"
                ? "border-blue-300"
                : "border-green-300"
            }`}
          >
            <div
              className={`px-4 py-3 border-b-2 ${
                color === "orange"
                  ? "bg-orange-100 border-orange-300"
                  : color === "blue"
                  ? "bg-blue-100 border-blue-300"
                  : "bg-green-100 border-green-300"
              }`}
            >
              <div
                className={`font-extrabold text-sm ${
                  color === "orange"
                    ? "text-orange-700"
                    : color === "blue"
                    ? "text-blue-700"
                    : "text-green-700"
                }`}
              >
                {title}
              </div>
              <div className="text-gray-500 text-xs font-semibold mt-0.5">{sub}</div>
            </div>
            <div className="p-3 bg-white space-y-2">
              {items.map((item, j) => (
                <div key={j} className="flex items-start gap-2 text-xs text-gray-700 font-medium">
                  <Icon
                    className={`w-3 h-3 mt-0.5 flex-shrink-0 ${
                      color === "orange"
                        ? "text-orange-500"
                        : color === "blue"
                        ? "text-blue-500"
                        : "text-green-500"
                    }`}
                  />
                  {item}
                </div>
              ))}
              <div className={`mt-2 text-xs px-2 py-1 rounded-full font-bold inline-block ${tagColor}`}>
                {tag}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-3 p-3 rounded-xl bg-orange-50 border-2 border-orange-300 text-center shadow-sm"
      >
        <p className="text-gray-800 font-bold text-xs">
          All data in this presentation refers to <span className="text-orange-600 font-extrabold">non-Ukrainian asylum seekers</span>.
          The window to make a difference is <span className="text-blue-600 font-extrabold">during their waiting period</span> — before a decision is made.
        </p>
      </motion.div>
    </SlideLayout>
  );
}

function Slide7() {
  const problems = [
    {
      icon: Briefcase,
      title: "Employers don't know the rules",
      color: "blue",
      items: [
        "Think hiring an asylum seeker is complicated or costly",
        "Don't know a work permit takes only 2–3 weeks",
        "Unaware seekers can get BSN + legally work after 6 months",
        "No platform to find vetted, motivated candidates",
      ],
    },
    {
      icon: Users,
      title: "Asylum seekers have no platform",
      color: "orange",
      items: [
        "No way to show skills or build a track record",
        "Don't know their rights around volunteering",
        "Risk losing benefits if they earn too much — unknowingly",
        "No record-keeping for COA or IND",
      ],
    },
    {
      icon: Globe,
      title: "No system tracks any of this",
      color: "red",
      items: [
        "No central tracking of volunteer hours or earnings",
        "Rules about €210/month limit are poorly communicated",
        "No annual report generation — it's all manual",
      ],
    },
  ];
  return (
    <SlideLayout badge="Root Cause" title="The Information Gap" accent="red">
      <div className="grid grid-cols-3 gap-4 mt-5">
        {problems.map(({ icon: Icon, title, color, items }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * i + 0.3 }}
            className={`p-4 rounded-xl border-2 shadow-sm ${
              color === "blue"
                ? "bg-blue-50 border-blue-300"
                : color === "orange"
                ? "bg-orange-50 border-orange-300"
                : "bg-red-50 border-red-300"
            }`}
          >
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center mb-2.5 ${
                color === "blue" ? "bg-blue-200" : color === "orange" ? "bg-orange-200" : "bg-red-200"
              }`}
            >
              <Icon
                className={`w-4 h-4 ${
                  color === "blue" ? "text-blue-600" : color === "orange" ? "text-orange-600" : "text-red-600"
                }`}
              />
            </div>
            <h3 className="text-gray-900 mb-2 font-extrabold text-xs">{title}</h3>
            <ul className="space-y-1.5">
              {items.map((item, j) => (
                <li key={j} className="flex items-start gap-1.5 text-xs text-gray-700 font-medium">
                  <XCircle
                    className={`w-3 h-3 mt-0.5 flex-shrink-0 ${
                      color === "blue" ? "text-blue-400" : color === "orange" ? "text-orange-400" : "text-red-400"
                    }`}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="mt-4 p-4 rounded-xl bg-white border-2 border-red-300 text-center shadow-sm"
      >
        <p className="text-gray-800 font-bold text-sm">
          The system fails not because people don't want to help —
          but because <span className="text-red-600 font-extrabold">no one has the right information</span>, and{" "}
          <span className="text-red-600 font-extrabold">nothing is tracked</span>.
        </p>
      </motion.div>
    </SlideLayout>
  );
}

function Slide8() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-blue-50 to-white">
      <div className="relative z-10 text-center px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-orange-100 border-2 border-orange-300 rounded-full px-4 py-1.5 mb-6 shadow-sm"
        >
          <Lightbulb className="w-4 h-4 text-orange-600" />
          <span className="text-orange-700 text-sm tracking-widest uppercase font-extrabold">
            Our Solution
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-4xl md:text-5xl leading-tight mb-6 font-extrabold"
        >
          <span className="text-gray-900">A platform that connects </span>
          <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
            asylum seekers
          </span>
          <span className="text-gray-900"> with society</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4 mb-6"
        >
          {[IMG_PERSON1, IMG_PERSON2, IMG_PERSON3].map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`Person ${i + 1}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="w-28 h-28 rounded-2xl object-cover border-4 border-white shadow-lg"
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="p-6 rounded-2xl bg-white border-2 border-blue-200 shadow-lg"
        >
          <p className="text-gray-800 text-base mb-3 font-extrabold">Instead of smoking shisha and waiting…</p>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-3 px-5 py-3 rounded-lg bg-red-100 border-2 border-red-300 shadow-sm">
              <span className="text-red-700 font-bold text-sm">Passive waiting</span>
            </div>
            <ArrowRight className="w-8 h-8 text-orange-500" />
            <div className="flex items-center gap-3 px-5 py-3 rounded-lg bg-green-100 border-2 border-green-300 shadow-sm">
              <span className="text-green-700 font-bold text-sm">Active contribution & earnings</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Slide9() {
  return (
    <SlideLayout badge="For Employers" title="What Employers Need to Know" accent="blue">
      <div className="grid grid-cols-2 gap-5 mt-5">
        <div className="space-y-3">
          {[
            {
              myth: "Myth: It costs extra to hire an asylum seeker",
              fact: "Fact: It costs nothing extra. Same wages, same process.",
              color: "blue",
            },
            {
              myth: "Myth: Work permits take months to arrange",
              fact: "Fact: A work permit (TWV) takes just 2–3 weeks.",
              color: "blue",
            },
            {
              myth: "Myth: Asylum seekers can't work legally",
              fact: "Fact: After 6 months in NL, they can get a BSN and legally work.",
              color: "blue",
            },
          ].map(({ myth, fact, color }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 * i + 0.3 }}
              className="rounded-xl overflow-hidden border-2 border-blue-200 shadow-sm"
            >
              <div className="px-4 py-2 bg-red-50 border-b border-red-200">
                <p className="text-red-700 text-xs font-bold">{myth}</p>
              </div>
              <div className="px-4 py-2.5 bg-white">
                <p className="text-green-700 text-sm font-bold">{fact}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col gap-3"
        >
          <div className="p-4 rounded-xl bg-blue-50 border-2 border-blue-300 shadow-sm">
            <p className="text-blue-700 font-extrabold text-sm mb-3">The Hiring Process</p>
            <div className="space-y-2">
              {[
                { step: "1", label: "Seeker has been in NL 6+ months", note: "They're eligible" },
                { step: "2", label: "Employer applies for TWV permit", note: "Takes 2–3 weeks" },
                { step: "3", label: "BSN number issued to the seeker", note: "Can start working" },
                { step: "4", label: "Normal employment begins", note: "Same as any hire" },
              ].map(({ step, label, note }, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-200 text-blue-700 text-xs font-extrabold flex items-center justify-center flex-shrink-0">
                    {step}
                  </span>
                  <div>
                    <div className="text-gray-800 text-xs font-bold">{label}</div>
                    <div className="text-gray-500 text-xs">{note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 rounded-xl bg-green-50 border-2 border-green-300 shadow-sm">
            <p className="text-gray-700 text-xs font-semibold leading-relaxed">
              <span className="text-green-700 font-extrabold">Our platform</span> pre-collects all required information and guides employers through the process — removing the complexity entirely.
            </p>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
}

function Slide10() {
  return (
    <SlideLayout badge="Volunteering" title="The Volunteering Framework" accent="orange">
      <div className="grid grid-cols-2 gap-5 mt-4">
        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-4 rounded-xl bg-orange-50 border-2 border-orange-300 shadow-sm"
          >
            <p className="text-orange-700 font-extrabold text-sm mb-3">The Rules</p>
            <ul className="space-y-2">
              {[
                "Non-taxable up to €210/month or €2,200/year",
                "Must be offered by an NGO or non-profit",
                "Cannot replace an existing paid position",
                "Seeker keeps benefits if they stay under limit",
                "App warns automatically when limit approaches",
              ].map((rule, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 mt-0.5 flex-shrink-0" />
                  {rule}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-4 rounded-xl bg-white border-2 border-gray-200 shadow-sm"
          >
            <p className="text-gray-700 font-extrabold text-sm mb-2">COA Reporting</p>
            <p className="text-gray-600 text-xs font-medium leading-relaxed">
              Our app generates an annual earnings document that can be exported and sent directly to COA — replacing a currently manual, error-prone process.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-3"
        >
          <div className="p-4 rounded-xl bg-blue-50 border-2 border-blue-300 shadow-sm">
            <p className="text-blue-700 font-extrabold text-sm mb-3">What volunteering can look like</p>
            <div className="space-y-2.5">
              {[
                {
                  title: "Syrian cooking workshop",
                  desc: "Traditional food class run for a local community centre — paid up to €50/session",
                  icon: "🍲",
                },
                {
                  title: "Mural painting",
                  desc: "Creating street art for a neighbourhood NGO — recognised contribution",
                  icon: "🎨",
                },
                {
                  title: "Website for a local NGO",
                  desc: "Using professional skills for a non-profit — up to €210/month",
                  icon: "💻",
                },
              ].map(({ title, desc, icon }, i) => (
                <div key={i} className="flex items-start gap-3 p-2.5 rounded-lg bg-white border border-blue-200">
                  <span className="text-xl flex-shrink-0">{icon}</span>
                  <div>
                    <div className="text-gray-800 text-xs font-bold">{title}</div>
                    <div className="text-gray-600 text-xs">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-3 rounded-xl bg-green-50 border-2 border-green-300 shadow-sm">
            <p className="text-green-700 text-xs font-semibold">
              These jobs are <strong>still useful and still rewarded</strong> — they just can't be something a paid worker was doing before.
            </p>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
}

function Slide11() {
  return (
    <SlideLayout badge="How It Works" title="The Platform" accent="blue">
      <div className="grid grid-cols-2 gap-8 mt-4 items-start">
        <div className="space-y-4">
          {[
            {
              icon: Users,
              title: "Personal Profiles",
              desc: "Skills, languages, experience, and a profile photo — visible to NGOs and employers",
            },
            {
              icon: Euro,
              title: "Earnings Tracker",
              desc: "Real-time tracking of volunteering income — warns before the €210/month limit is crossed",
            },
            {
              icon: FileText,
              title: "COA Annual Report",
              desc: "Auto-generated yearly document — one click to export and send to COA",
            },
            {
              icon: Star,
              title: "Verified Reviews",
              desc: "NGOs and employers leave reviews, building a trusted record over time",
            },
          ].map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 * i + 0.3 }}
              className="flex gap-4 p-4 rounded-xl bg-white border-2 border-blue-200 shadow-sm"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h4 className="text-gray-900 mb-0.5 font-extrabold text-sm">{title}</h4>
                <p className="text-gray-700 text-xs leading-relaxed font-medium">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="rounded-2xl bg-white border-2 border-orange-200 overflow-hidden shadow-lg"
        >
          <div className="bg-gradient-to-r from-orange-100 to-blue-100 p-4 flex items-center gap-4">
            <img src={IMG_PERSON1} alt="Profile" className="w-14 h-14 rounded-full object-cover border-4 border-white shadow-md" />
            <div>
              <div className="text-gray-900 font-extrabold">Fatima A.</div>
              <div className="text-gray-600 text-xs font-semibold">In NL 8 months · BSN issued</div>
              <div className="flex gap-1 mt-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
            </div>
          </div>
          <div className="p-4 space-y-3">
            <div>
              <div className="text-gray-500 text-xs uppercase tracking-wider mb-1.5 font-bold">Skills</div>
              <div className="flex flex-wrap gap-1.5">
                {["Cooking", "Arabic", "Dutch (A2)", "Teaching", "Design"].map((s) => (
                  <span key={s} className="text-xs bg-blue-100 text-blue-700 border border-blue-300 px-2 py-0.5 rounded-full font-semibold">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-gray-500 text-xs uppercase tracking-wider mb-1.5 font-bold">Earnings This Month</div>
              <div className="flex items-center gap-3 p-2.5 rounded-lg bg-orange-50 border border-orange-200">
                <div className="flex-1">
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-400 rounded-full" style={{ width: "72%" }} />
                  </div>
                </div>
                <span className="text-orange-600 font-extrabold text-sm">€152 / €210</span>
              </div>
            </div>
            <div className="flex gap-2 pt-1">
              <button className="flex-1 text-xs py-2 rounded-lg bg-orange-500 text-white font-bold shadow-sm">
                Contact
              </button>
              <button className="flex-1 text-xs py-2 rounded-lg bg-blue-500 text-white font-bold shadow-sm">
                View Profile
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
}

function Slide12() {
  return (
    <SlideLayout badge="Why It Matters" title="More Than Just Money" accent="orange">
      <div className="grid grid-cols-3 gap-4 mt-5">
        {[
          {
            icon: "🛒",
            title: "€50 from volunteering",
            desc: "Earn up to €210/month through volunteering and you keep your benefits. That €50 extra means two more grocery runs — or new shoes for your child.",
            color: "orange",
          },
          {
            icon: "🤝",
            title: "A sense of belonging",
            desc: "Work gives structure, social contact, and the feeling of contributing to the society you're trying to become part of.",
            color: "blue",
          },
          {
            icon: "📈",
            title: "Revenue for the Dutch economy",
            desc: "Every working asylum seeker pays tax, spends locally, and reduces their dependency on government support.",
            color: "green",
          },
        ].map(({ icon, title, desc, color }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * i + 0.3 }}
            className={`p-5 rounded-xl border-2 shadow-sm ${
              color === "orange"
                ? "bg-orange-50 border-orange-300"
                : color === "blue"
                ? "bg-blue-50 border-blue-300"
                : "bg-green-50 border-green-300"
            }`}
          >
            <div className="text-3xl mb-3">{icon}</div>
            <h3 className="text-gray-900 font-extrabold text-sm mb-2">{title}</h3>
            <p className="text-gray-700 text-xs font-medium leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85 }}
        className="mt-5 p-4 rounded-xl bg-white border-2 border-orange-200 shadow-sm"
      >
        <p className="text-gray-800 text-sm font-bold text-center">
          Access to the labour market is not only about earnings.
          It is about <span className="text-orange-600 font-extrabold">feeling happier</span> and bringing value to the society{" "}
          <span className="text-blue-600 font-extrabold">you are striving to be a part of</span>.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.05 }}
        className="mt-3 grid grid-cols-2 gap-3"
      >
        <div className="p-3 rounded-lg bg-green-50 border-2 border-green-300 shadow-sm">
          <p className="text-gray-800 text-xs font-semibold">
            <span className="text-green-700 font-extrabold">For employers:</span> motivated, pre-screened workers at no extra cost
          </p>
        </div>
        <div className="p-3 rounded-lg bg-blue-50 border-2 border-blue-300 shadow-sm">
          <p className="text-gray-800 text-xs font-semibold">
            <span className="text-blue-700 font-extrabold">For Dutch society:</span> contributors instead of dependents
          </p>
        </div>
      </motion.div>
    </SlideLayout>
  );
}

function Slide13() {
  const impacts = [
    {
      icon: Building2,
      title: "Lower Emergency Housing Dependency",
      desc: "As asylum seekers earn and integrate faster, reliance on expensive emergency accommodations decreases.",
      color: "blue",
    },
    {
      icon: TrendingUp,
      title: "Reduced Costs Over Time",
      desc: "Faster integration means less long-term support spending — the €4B annual bill starts to shrink.",
      color: "green",
    },
    {
      icon: Users,
      title: "Stronger Community Trust",
      desc: "Verified participation creates visible contributions — reducing fear and building genuine social bonds.",
      color: "orange",
    },
    {
      icon: Globe,
      title: "A Sustainable Asylum System",
      desc: "Designed for participation, not warehousing — cheaper, more humane, and actually effective.",
      color: "purple",
    },
  ];
  return (
    <SlideLayout badge="Vision" title="Long-Term Impact" accent="green">
      <div className="grid grid-cols-2 gap-5 mt-5">
        {impacts.map(({ icon: Icon, title, desc, color }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 * i + 0.3 }}
            className={`p-5 rounded-xl border-2 shadow-sm ${
              color === "blue"
                ? "bg-blue-50 border-blue-300"
                : color === "green"
                ? "bg-green-50 border-green-300"
                : color === "orange"
                ? "bg-orange-50 border-orange-300"
                : "bg-purple-50 border-purple-300"
            }`}
          >
            <div
              className={`w-10 h-10 rounded-lg mb-3 flex items-center justify-center ${
                color === "blue"
                  ? "bg-blue-200"
                  : color === "green"
                  ? "bg-green-200"
                  : color === "orange"
                  ? "bg-orange-200"
                  : "bg-purple-200"
              }`}
            >
              <Icon
                className={`w-5 h-5 ${
                  color === "blue"
                    ? "text-blue-600"
                    : color === "green"
                    ? "text-green-600"
                    : color === "orange"
                    ? "text-orange-600"
                    : "text-purple-600"
                }`}
              />
            </div>
            <h4 className="text-gray-900 mb-2 font-extrabold text-sm">{title}</h4>
            <p className="text-gray-700 text-xs leading-relaxed font-medium">{desc}</p>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
}

function Slide14() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <div className="absolute bottom-0 left-0 right-0 h-2 flex">
        <div className="flex-1 bg-[#AE1C28]" />
        <div className="flex-1 bg-gray-300" />
        <div className="flex-1 bg-[#21468B]" />
      </div>
      <div className="relative z-10 text-center px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-green-100 border-2 border-green-300 rounded-full px-4 py-1.5 mb-6 shadow-sm"
        >
          <CheckCircle2 className="w-4 h-4 text-green-600" />
          <span className="text-green-700 text-sm tracking-widest uppercase font-extrabold">
            Conclusion
          </span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-gray-800 text-lg leading-relaxed mb-6 font-bold"
        >
          70,000 people are already here. The government cannot undo that.{" "}
          <span className="text-red-600 font-extrabold">Keeping them idle costs €4.19B in 2026 alone.</span>{" "}
          <span className="text-orange-600 font-extrabold">Activating them costs almost nothing extra.</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mb-6 space-y-3"
        >
          {[
            { label: "Track earnings", desc: "Stay within the €210/month volunteering limit automatically" },
            { label: "Educate employers", desc: "Remove myths — no extra cost, permit in 2–3 weeks" },
            { label: "Build records", desc: "From zero to verified track record, ready for real employment" },
          ].map(({ label, desc }, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-3.5 rounded-xl bg-white border-2 border-blue-200 shadow-sm"
            >
              <span className="text-orange-600 font-extrabold min-w-[150px] text-right text-sm">{label}</span>
              <div className="w-px h-5 bg-gray-300" />
              <span className="text-gray-700 font-semibold text-sm">{desc}</span>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.75 }}
          className="p-6 rounded-2xl bg-gradient-to-r from-orange-100 to-blue-100 border-2 border-orange-300 shadow-lg"
        >
          <p className="text-gray-900 text-xl leading-relaxed font-extrabold">
            They're here. They want to contribute.{" "}
            <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Let's build a system that lets them.
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

// ── Shared Layout ─────────────────────────────────────────────────────────────

function SlideLayout({
  badge,
  title,
  accent,
  children,
}: {
  badge: string;
  title: string;
  accent: "orange" | "blue" | "red" | "green" | "purple";
  children: React.ReactNode;
}) {
  const accentColor = {
    orange: "text-orange-700 bg-orange-100 border-orange-300",
    blue: "text-blue-700 bg-blue-100 border-blue-300",
    red: "text-red-700 bg-red-100 border-red-300",
    green: "text-green-700 bg-green-100 border-green-300",
    purple: "text-purple-700 bg-purple-100 border-purple-300",
  }[accent];

  const lineColor = {
    orange: "bg-gradient-to-b from-orange-500 to-orange-600",
    blue: "bg-gradient-to-b from-blue-500 to-blue-600",
    red: "bg-gradient-to-b from-red-500 to-red-600",
    green: "bg-gradient-to-b from-green-500 to-green-600",
    purple: "bg-gradient-to-b from-purple-500 to-purple-600",
  }[accent];

  return (
    <div className="w-full h-full flex flex-col px-10 py-8 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="flex-shrink-0"
      >
        <span
          className={`inline-flex items-center text-xs uppercase tracking-widest px-3 py-1 rounded-full border font-bold ${accentColor}`}
        >
          {badge}
        </span>
        <div className="flex items-center gap-3 mt-2">
          <div className={`w-1.5 h-10 rounded-full ${lineColor}`} />
          <h2 className="text-gray-900 text-3xl md:text-4xl font-extrabold">{title}</h2>
        </div>
      </motion.div>
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  );
}

// ── Slide Registry ────────────────────────────────────────────────────────────

const slides = [
  Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7,
  Slide8, Slide9, Slide10, Slide11, Slide12, Slide13, Slide14,
];

const slideTitles = [
  "Title",
  "The Scale",
  "Everyone Frustrated",
  "Rising Costs",
  "Real Conditions",
  "Seeker ≠ Refugee",
  "Information Gap",
  "Our Solution",
  "Employer Rules",
  "Volunteering Framework",
  "The Platform",
  "Why It Matters",
  "Long-Term Impact",
  "Conclusion",
];

// ── Main App ──────────────────────────────────────────────────────────────────

export default function App() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [showMenu, setShowMenu] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (index === current) return;
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
      setShowMenu(false);
    },
    [current]
  );

  const prev = useCallback(() => {
    if (current > 0) {
      setDirection(-1);
      setCurrent((c) => c - 1);
    }
  }, [current]);

  const next = useCallback(() => {
    if (current < slides.length - 1) {
      setDirection(1);
      setCurrent((c) => c + 1);
    }
  }, [current]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
      if (e.key === "Escape") setShowMenu(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const SlideComponent = slides[current];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <div className="w-screen h-screen bg-white flex flex-col overflow-hidden select-none">
      <div className="flex-shrink-0 flex items-center justify-between px-6 py-3 border-b border-gray-200 bg-white shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-[#AE1C28]" />
            <div className="w-2 h-2 rounded-full bg-gray-300" />
            <div className="w-2 h-2 rounded-full bg-[#21468B]" />
          </div>
          <span className="text-gray-600 text-sm hidden md:block font-semibold">
            <span className="text-orange-500">Meedoen</span>
            <span className="text-blue-600">Balie</span> • Asylum Integration
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-600 text-sm font-semibold">
            {current + 1} / {slides.length}
          </span>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="relative text-gray-600 hover:text-gray-900 transition-colors text-xs border border-gray-300 px-3 py-1.5 rounded-lg hover:bg-gray-50 font-semibold"
          >
            Slides ▾
            {showMenu && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden">
                {slideTitles.map((title, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 hover:bg-orange-50 transition-colors font-semibold ${
                      i === current ? "text-orange-600 bg-orange-50" : "text-gray-700"
                    }`}
                  >
                    <span className="text-gray-400 w-5 text-right text-xs">{i + 1}</span>
                    {title}
                  </button>
                ))}
              </div>
            )}
          </button>
        </div>
      </div>

      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <SlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex-shrink-0 flex items-center justify-between px-6 py-3 border-t border-gray-200 bg-white shadow-sm">
        <div className="flex-1 max-w-xs">
          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-500 to-blue-600 rounded-full"
              animate={{ width: `${((current + 1) / slides.length) * 100}%` }}
              transition={{ duration: 0.35 }}
            />
          </div>
        </div>
        <div className="flex-1 text-center">
          <span className="text-gray-700 text-sm font-bold">{slideTitles[current]}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            disabled={current === 0}
            className="w-9 h-9 rounded-lg border border-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-1.5 px-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all ${
                  i === current
                    ? "w-5 h-2 bg-gradient-to-r from-orange-500 to-blue-600"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            disabled={current === slides.length - 1}
            className="w-9 h-9 rounded-lg border border-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
