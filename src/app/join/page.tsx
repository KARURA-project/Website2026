'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const subTeamTasks = [
  {
    team: 'AUTONOMY & SOFTWARE',
    mission: 'Develop the localized intelligence, sensor-fusion pipelines, and pathfinding stacks to complete complex navigation objectives without manual human intervention.',
    coreTasks: [
      'Architect ROS2 navigation nodes and customize Nav2 plugins to execute path planning and precise obstacle avoidance maneuvers.',
      'Deploy custom computer vision models (such as YOLO or specialized OpenCV wrappers) onto edge computers for real-time terrain mapping and AR tag detection.',
      'Construct high-fidelity Gazebo or Isaac Sim environments to reliably test sensor fusion and localization scripts in simulated Martian topography.',
      'Maintain reliable Git version control strategies, optimizing CMake profiles, and streamlining remote build configurations across distributed nodes.'
    ]
  },
  {
    team: 'MECHANICAL DESIGN',
    mission: 'Conceptualize, test, and manufacture the robust physical infrastructure, specialized deployment linkages, and mechanical drive systems of the rover framework.',
    coreTasks: [
      'Model structural chassis geometry and complex multi-axis robotic linkages using SolidWorks, verifying integrity via Finite Element Analysis (FEA).',
      'Optimize localized rocker-bogie suspension systems to maintain standard wheel-to-ground contact over uneven, rocky inclines.',
      'Mill, turn, and 3D-print high-tolerance custom parts using aerospace-grade light alloys, carbon composites, and specialized polymers.',
      'Execute continuous physical stress verification protocols, ensuring structural assemblies survive high-impact kinetic drops and environmental load testing.'
    ]
  },
  {
    team: 'ELECTRICAL POWER SYSTEMS',
    mission: 'Engineer the core power distribution matrix, safety isolation layers, and high-speed communication infrastructure linking all onboard computational payloads.',
    coreTasks: [
      'Design, layout, and debug custom multi-layer PCBs utilizing Altium Designer to manage clean power rails and isolate delicate signaling paths.',
      'Integrate dense, high-capacity battery management systems (BMS) with dedicated voltage regulators to protect against current spikes.',
      'Wire and test hardware communication buses (CAN, SPI, I2C, UART) linking main microcontrollers to high-torque brushless motor controllers.',
      'Implement explicit physical and digital kill-switches, thermal monitoring grids, and robust EMI shielding strategies to secure vital telemetric uptime.'
    ]
  },
  {
    team: 'SCIENCE STRATEGY & ASTROBIOLOGY',
    mission: 'Formulate field sampling strategies and develop remote instrument payloads to accurately detect geological anomalies and biomarkers of extinct or extant life.',
    coreTasks: [
      'Select, calibrate, and isolate specialized spectrometers, microscopic imaging arrays, and environmental sensor payloads.',
      'Establish clean, contamination-free collection mechanics to extract and analyze soil cores without compromising localized samples.',
      'Apply advanced statistical datasets, Bayes\' Theorem, and defect analysis to translate real-time field readings into empirical reports.',
      'Author formal scientific justification protocols detailing targeted astrobiology findings for competitive review panels.'
    ]
  },
  {
    team: 'BUSINESS OPERATIONS & OUTREACH',
    mission: 'Direct international resource pipelines, coordinate brand asset portfolios, and manage capital workflows to maintain cross-pacific operations.',
    coreTasks: [
      'Build and pitch comprehensive corporate sponsorship packages to secure financial backing and enterprise engineering licenses.',
      'Coordinate complex logistical and financial operations, tracking manufacturing pipelines, grant submissions, and multi-currency project budgets.',
      'Maintain clear cross-pacific communication infrastructure, scheduling international collaborative sprints across multiple distinct time zones.',
      'Produce professional digital outreach collateral, brand design guidelines, and public-facing updates documenting current development cycles.'
    ]
  }
];

const workflowSteps = [
  {
    id: 'PHASE-01',
    title: 'Core Track Assignment & Screening',
    desc: 'Candidates undergo initial engineering alignment reviews. Sub-team leads evaluate your mechanical portfolio, coding backgrounds, scientific concepts, or management history to match you with critical open issues.',
    runtime: 'T+0 to T+7 Days'
  },
  {
    id: 'PHASE-02',
    title: 'Collaborative Simulation Sprint',
    desc: 'Applicants sync into localized testing branches or sandbox environments. You will work through an actual diagnostic or design task—such as tuning a mock control loop, analyzing a sample dataset, or optimizing a CAD sub-assembly.',
    runtime: 'T+14 Days'
  },
  {
    id: 'PHASE-03',
    title: 'Integrated Hardware & Roster Onboarding',
    desc: 'Validated contributors are fully provisioned into active workspaces. You gain direct access to production repositories, physical prototyping labs, target testbeds, and international operational stand-ups.',
    runtime: 'Active Cycle Continuous'
  }
];

export default function JoinPortal() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen text-[#0A0A0A]">
      <Header />

      {/* Hero Header Frame */}
      <section className="pt-36 pb-12 border-b border-[#0A0A0A]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">
          <span className="font-mono text-[10px] tracking-[0.25em] text-[#0A0A0A]/40 uppercase block mb-3">
            SYSTEM PARAMETER // SUB-TEAM ALIGNMENT MATRIX
          </span>
          <h1 className="font-display text-[clamp(2.8rem,6vw,5.5rem)] font-bold tracking-tight uppercase leading-[0.9] text-[#0A0A0A]">
            JOIN<span className="text-[#E63946]">.</span>
          </h1>
        </div>
      </section>

      {/* Main Structural Layout Splits: 60 / 40 Asymmetric Engineering Architecture */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-px bg-[#0A0A0A]/10 border-b border-[#0A0A0A]">
        
        {/* LEFT COLUMN PANEL: SUB-TEAM ROLES & RESPONSIBILITIES */}
        <div className="bg-[#FAFAFA] py-16 lg:pr-12 flex flex-col gap-20">
          
          {/* Section 1: Detailed Sub-Team Operational Tasks */}
          <section id="subteam-breakdown">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-5 h-px bg-[#0A0A0A]" />
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#0A0A0A]/50 uppercase">
                01 / OPERATIONAL TASK MATRIX BY SPECIALIZATION
              </span>
            </div>

            <div className="space-y-16">
              {subTeamTasks.map((track) => (
                <div key={track.team} className="border-l border-[#0A0A0A] pl-6 group">
                  <h3 className="font-mono text-sm font-bold tracking-widest text-[#0A0A0A] mb-2 uppercase bg-[#0A0A0A]/5 px-2 py-1 inline-block group-hover:bg-[#E63946] group-hover:text-white transition-colors duration-200">
                    {track.team}
                  </h3>
                  <p className="text-xs text-[#0A0A0A]/70 font-mono mb-4 leading-relaxed max-w-2xl italic">
                    {track.mission}
                  </p>
                  
                  <div className="mt-4">
                    <span className="font-mono text-[10px] font-bold text-[#0A0A0A]/40 tracking-wider block mb-2 uppercase">Core System Responsibilities:</span>
                    <ul className="space-y-3 font-mono text-xs text-[#0A0A0A]/80 leading-relaxed max-w-2xl">
                      {track.coreTasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-[#E63946] font-bold shrink-0">[{i + 1}]</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* RIGHT COLUMN PANEL: PORTAL EVALUATION STACK */}
        <div className="bg-[#FAFAFA] py-16 lg:pl-12 border-t lg:border-t-0 border-[#0A0A0A]/10 flex flex-col gap-12">
          
          <div className="sticky top-28 bg-[#FAFAFA] border border-[#0A0A0A] p-8">
            <div className="flex items-center justify-between border-b border-[#0A0A0A] pb-4 mb-6">
              <span className="font-mono text-[11px] font-bold tracking-widest uppercase">
                PORTAL PIPELINE STEPS
              </span>
              <span className="w-2 h-2 bg-[#E63946] rounded-full animate-pulse" />
            </div>

            {/* Workflow Timeline */}
            <div className="relative border-l border-[#0A0A0A]/20 ml-3 pl-6 space-y-10 mb-8">
              {workflowSteps.map((step) => (
                <div key={step.id} className="relative">
                  <div className="absolute -left-[31px] top-0 bg-[#FAFAFA] border border-[#0A0A0A] font-mono text-[8px] font-bold p-0.5 px-1 leading-none">
                    {step.id.split('-')[1]}
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[9px] tracking-wider font-semibold text-[#0A0A0A]/40 uppercase">
                      {step.runtime}
                    </span>
                    <h4 className="font-display text-sm font-bold text-[#0A0A0A]">
                      {step.title}
                    </h4>
                    <p className="text-xs text-[#0A0A0A]/50 leading-relaxed font-mono mt-1">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* SUBMISSION TRIGGER KEY */}
            <a
              href="https://forms.gle/karuraRecruitment2026" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#E63946] text-white font-mono text-xs font-bold tracking-[0.2em] uppercase py-4 border border-[#0A0A0A] hover:bg-[#C1121F] transition-colors shadow-[4px_4px_0px_0px_rgba(10,10,10,1)]"
            >
              INITIALIZE APPLICATION
            </a>
            
            <div className="mt-4 text-center">
              <span className="font-mono text-[8px] text-[#0A0A0A]/30 tracking-wider block uppercase">
                SECURE TELEMETRY PIPE // INTAKE GATEWAY STABLE
              </span>
            </div>
          </div>

        </div>

      </div>

      <Footer />
    </main>
  );
}