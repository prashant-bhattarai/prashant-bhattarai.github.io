import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FaCalendar, FaUsers } from 'react-icons/fa';

const ProjectsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: ${theme.spacing.lg} 0;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: calc(${theme.spacing.xl} * 1.5);
  color: ${theme.colors.textLight};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: calc(${theme.spacing.xl} * 2);
  }
`;

const ExperienceCard = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
  border-left: 4px solid ${theme.colors.accent};
  color: ${theme.colors.textLight};
  transition: all ${theme.transitions.default};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl};
  }

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 8px 30px rgba(246, 177, 122, 0.15);
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${theme.spacing.md};
  gap: ${theme.spacing.md};
  flex-wrap: wrap;

  @media (min-width: ${theme.breakpoints.md}) {
    align-items: center;
  }
`;

const ExperienceTitle = styled.h3`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  color: ${theme.colors.light};
  margin: 0;
  font-weight: 600;
`;

const ExperienceOrganization = styled.p`
  font-size: 1rem;
  color: ${theme.colors.accent};
  margin: 0.3rem 0 0 0;
  font-weight: 500;
`;

const ExperienceMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: 0.9rem;
  color: ${theme.colors.accent};
  font-weight: 500;

  svg {
    font-size: 0.9em;
  }
`;

const ExperienceDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: ${theme.colors.textLight};
  margin: ${theme.spacing.md} 0;
  opacity: 0.85;
`;

const SectionSubtitle = styled.h4`
  font-size: 1.1rem;
  color: ${theme.colors.light};
  margin: ${theme.spacing.lg} 0 ${theme.spacing.md} 0;
  font-weight: 600;
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${theme.spacing.md} 0;

  li {
    padding-left: ${theme.spacing.lg};
    margin-bottom: ${theme.spacing.sm};
    position: relative;
    font-size: 0.95rem;
    line-height: 1.6;
    color: ${theme.colors.textLight};

    &::before {
      content: '▸';
      position: absolute;
      left: 0;
      color: ${theme.colors.accent};
      font-weight: bold;
    }
  }
`;

const TechBadge = styled.span`
  background: ${theme.colors.gradient.accent};
  color: ${theme.colors.textDark};
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
`;

const experiences = [
  {
    id: 1,
    title: "Product Design Research Intern",
    organization: "USDA REEU AI2F Summer Research Program",
    duration: "June 2025 - August 2025",
    team: "4-person interdisciplinary team",
    overview: "Designed and prototyped a portable, modular AI-enabled field device for evaluating wood chip moisture content and size distribution. The system addressed limitations of existing lab-based equipment by enabling offline, real-time field analysis in a compact, cost-effective form factor.",
    role: "Sole mechanical designer on interdisciplinary team spanning Mechanical Engineering, Industrial & Systems Engineering, Forestry, and Sustainable Bioproducts. Owned the full product lifecycle from concept development through fabrication, integration, testing, and documentation.",
    contributions: [
      "Designed detailed parts, assemblies, and drawings using SolidWorks and Fusion 360",
      "Applied design-for-manufacturing and tolerancing principles to enable reliable fabrication",
      "Fabricated and iterated multiple prototypes using additive manufacturing; performed printer setup, troubleshooting, and post-processing",
      "Integrated embedded hardware including NVIDIA Jetson Nano, camera system, touchscreen display, and battery power",
      "Deployed pre-trained machine learning models on embedded hardware for offline field operation",
      "Conducted data collection and validation to support AI model evaluation"
    ],
    techStack: ["SolidWorks", "Fusion 360", "3D Printing", "Embedded Systems", "ML Deployment", "Design for Manufacturing"],
    outcomes: "The modular architecture reduced fabrication cost and enabled rapid future upgrades. The final prototype supported downstream PhD-level research and contributed to ongoing academic paper development. Findings were presented at the University Undergraduate Research Symposium."
  }
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <ProjectsSection id="projects" role="region" aria-label="Experience and Projects">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionTitle 
            variants={itemVariants}
            role="heading"
            aria-level={2}
          >
            Experience & Projects
          </SectionTitle>

          {/* Experience Cards */}
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              variants={itemVariants}
              role="article"
            >
              <ExperienceHeader>
                <div>
                  <ExperienceTitle>{experience.title}</ExperienceTitle>
                  <ExperienceOrganization>{experience.organization}</ExperienceOrganization>
                </div>
                <ExperienceMeta>
                  <FaCalendar aria-hidden="true" />
                  <span>{experience.duration}</span>
                </ExperienceMeta>
              </ExperienceHeader>

              <ExperienceMeta style={{ marginBottom: `${theme.spacing.md}` }}>
                <FaUsers aria-hidden="true" />
                <span>{experience.team}</span>
              </ExperienceMeta>

              <ExperienceDescription>{experience.overview}</ExperienceDescription>

              <SectionSubtitle>My Role & Contributions</SectionSubtitle>
              <ExperienceDescription>{experience.role}</ExperienceDescription>

              <BulletList>
                {experience.contributions.map((contribution, idx) => (
                  <li key={idx}>{contribution}</li>
                ))}
              </BulletList>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: `${theme.spacing.sm}`, margin: `${theme.spacing.md} 0` }}>
                {experience.techStack.map((tech, idx) => (
                  <TechBadge key={idx}>{tech}</TechBadge>
                ))}
              </div>

              <SectionSubtitle>Impact & Outcomes</SectionSubtitle>
              <ExperienceDescription>{experience.outcomes}</ExperienceDescription>
            </ExperienceCard>
          ))}
        </motion.div>
      </div>
    </ProjectsSection>
  );
};

export default Projects;