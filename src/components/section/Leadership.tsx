import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import { Users, Rocket, Lightbulb } from 'lucide-react';

const Leadership = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const roles = [
    {
      id: 'synapse-ai-club',
      icon: Users,
      title: 'Vice President, Synapse AI Club',
      org: 'MIT-WPU',
      period: '2024 - Present',
      progression: 'Tech Team Member (2024) → Treasurer (2025) → Vice President (2026 onwards)',
      description:
        'Joined as a Technical Team Member in 2024, contributing to projects including DriveOpt. Became Treasurer in 2025, managing club finances across workshops, hackathons, and major events. Now serving as Vice President, leading club initiatives and technical sessions for a community of 500+ members.',
    },
    {
      id: 'e-cell-thrive-head',
      icon: Rocket,
      title: 'Thrive Head, E-Cell',
      org: 'MIT-WPU',
      period: '2024 - Present',
      progression: 'Member (2025) → HOD Collaboration at MahaSummit → Core Organiser at RIDE → Thrive Head (2026 onwards)',
      description:
        "Joined E-Cell as a member in 2025, led Collaboration and Convention at MahaSummit, then joined the core organising body of RIDE as one of the main organisers. Managed end-to-end execution, mentor coordination, and participant milestones for the university's largest entrepreneurship event. This work contributed to MIT-WPU's recognition in the World Book of Records and the Asia Book of Records.",
    },
    {
      id: 'iic-member',
      icon: Lightbulb,
      title: "Member, Institution's Innovation Council (IIC)",
      org: 'MIT-WPU',
      period: '2026 - Present',
      progression: 'Secretary, RIDE Division 1',
      description:
        'Contributing to campus innovation and entrepreneurship initiatives through the IIC; serving as Secretary for RIDE Division 1.',
    },
  ];

  return (
    <section
      id="extracurriculars"
      className="py-16 relative"
      style={{
        background: themeColors.background.sections?.certifications || themeColors.background.gradient,
        transition: 'background 0.3s ease-in-out',
      }}
    >
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2
          className="text-4xl font-bold text-center mb-4"
          style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}
        >
          Leadership & Extracurriculars
        </h2>
        <p
          className="text-center max-w-2xl mx-auto mb-12"
          style={{ color: themeColors.text.secondary }}
        >
          Building communities alongside building technology.
        </p>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-6 top-2 bottom-2 w-0.5 hidden md:block"
            style={{ backgroundColor: isDarkMode ? themeColors.colors.pink[700] : themeColors.colors.pink[200] }}
            aria-hidden="true"
          />

          <div className="space-y-8">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <article
                  key={role.id}
                  className="relative md:pl-16 rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-[1.02]"
                  style={{ backgroundColor: themeColors.card.background }}
                >
                  <div
                    className="hidden md:flex absolute left-0 top-6 items-center justify-center w-12 h-12 rounded-full shadow-md"
                    style={{ backgroundColor: themeColors.interactive.primary }}
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" style={{ color: themeColors.text.pink }} />
                  </div>

                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="text-xl font-semibold" style={{ color: themeColors.text.primary }}>
                      {role.title}
                    </h3>
                    <span className="text-sm font-mono" style={{ color: themeColors.text.tertiary }}>
                      {role.period}
                    </span>
                  </div>
                  <p className="text-sm mb-3" style={{ color: themeColors.colors.pink[400] }}>
                    {role.org}
                  </p>
                  <p className="text-xs italic mb-3" style={{ color: themeColors.text.tertiary }}>
                    {role.progression}
                  </p>
                  <p style={{ color: themeColors.text.secondary }}>{role.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay for smooth transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.pink[25]} 100%)`,
          zIndex: 1,
        }}
      />
    </section>
  );
};

export default Leadership;
