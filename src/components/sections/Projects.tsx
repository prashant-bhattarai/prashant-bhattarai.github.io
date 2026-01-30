import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FaCalendar, FaUsers, FaFilePdf, FaFileImage, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

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

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-top: ${theme.spacing.xl};
`;

const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.md};
  }
`;

const CarouselContent = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  perspective: 1000px;
  width: 100%;
`;

const CarouselInner = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: auto;
`;

const NavButton = styled.button`
  background: ${theme.colors.accent};
  color: ${theme.colors.textDark};
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${theme.transitions.default};
  flex-shrink: 0;
  font-size: 1.8rem;

  &:hover {
    background: ${theme.colors.light};
    transform: scale(1.15);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    transform: scale(1);
  }

  @media (max-width: ${theme.breakpoints.md}) {
    width: 40px;
    height: 40px;
    font-size: 1.3rem;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.lg};
`;

const PaginationDot = styled.button<{ isActive: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid ${props => props.isActive ? theme.colors.accent : 'rgba(255, 255, 255, 0.3)'};
  background: ${props => props.isActive ? theme.colors.accent : 'transparent'};
  cursor: pointer;
  transition: all ${theme.transitions.default};

  &:hover {
    border-color: ${theme.colors.accent};
    background: ${props => !props.isActive && 'rgba(246, 177, 122, 0.3)'};
  }
`;

const ExperienceCard = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: ${theme.spacing.lg};
  border-left: 4px solid ${theme.colors.accent};
  color: ${theme.colors.textLight};
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl};
  }

  &:hover {
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

const ResourcesSection = styled.div`
  margin: ${theme.spacing.lg} 0;
  padding: ${theme.spacing.md};
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

const ResourcesLabel = styled.h5`
  font-size: 0.95rem;
  color: ${theme.colors.accent};
  margin: 0 0 ${theme.spacing.md} 0;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ResourceLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

const ResourceLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: 0.6rem 1rem;
  background: ${theme.colors.accent};
  color: ${theme.colors.textDark};
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all ${theme.transitions.default};
  width: fit-content;

  svg {
    font-size: 1rem;
  }

  &:hover {
    background: ${theme.colors.light};
    transform: translateX(4px);
    box-shadow: 0 4px 12px rgba(246, 177, 122, 0.3);
  }
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
    outcomes: "The modular architecture reduced fabrication cost and enabled rapid future upgrades. The final prototype supported downstream PhD-level research and contributed to ongoing academic paper development. Findings were presented at the University Undergraduate Research Symposium.",
    resources: [
      {
        label: "Download Final Report",
        url: "/final-report-usda-ai2f.pdf",
        icon: <FaFilePdf style={{ marginRight: '0.3rem' }} />
      },
      {
        label: "Download Poster",
        url: "/poster-usda-ai2f.pdf",
        icon: <FaFileImage style={{ marginRight: '0.3rem' }} />
      }
    ]
  },
  {
    id: 2,
    title: "Undergraduate Research Assistant",
    organization: "Industrial & Systems Engineering, Mississippi State University",
    duration: "Aug 2025 - Nov 2025",
    team: "Additive Manufacturing & Ceramic Nanocomposites Research Group",
    overview: "Supported cutting-edge additive manufacturing research focused on ceramic nanocomposites. Contributed to process development for improving fracture toughness and density using the Buried Combustion Method (BCM). Transitioned from ceramic system work into hands-on lab ownership, equipment management, and support for PhD-level research.",
    role: "Served as lab technician and research support for the additive manufacturing group. Owned fabrication workflows across multiple printing platforms, maintained equipment functionality, and assisted PhD researchers with experimental design and execution. Managed lab operations including equipment procurement, safety documentation, and instructional support.",
    contributions: [
      "Supported additive manufacturing research on ceramic nanocomposites contributing to process development for improving fracture toughness and density using the Buried Combustion Method (BCM)",
      "Designed and fabricated components using FDM, resin, and metal additive manufacturing, including lattice structures and functional lab replacements",
      "Performed parameter selection (infill, porosity, layer height), post-processing, and print failure analysis across multiple printing platforms",
      "Maintained and repaired lab equipment, improving print consistency and reliability for ongoing research",
      "Assisted PhD-led experiments with ceramic, copper, and carbon fiber composites and supported microhardness testing",
      "Managed equipment procurement (RFQs, quotations), safety documentation (MSDS), and lab setup/maintenance",
      "Supported instructional additive manufacturing workshops, demonstrating FDM and resin printing principles to undergraduate classes"
    ],
    techStack: ["FDM Printing", "Resin Printing", "Metal Additive Manufacturing", "CAD Design", "Materials Testing", "Equipment Maintenance", "Lab Operations"],
    outcomes: "Contributed directly to ongoing ceramic nanocomposites research while building expertise across multiple additive manufacturing platforms. Improved lab operational efficiency through equipment repairs and maintenance. Supported educational initiatives by mentoring undergraduate students in additive manufacturing techniques."
  },
  {
    id: 3,
    title: "Undergraduate Research Assistant",
    organization: "ISTVS Student Chapter, Mississippi State University",
    duration: "Feb 2025 - Apr 2025",
    team: "Autonomous Vehicles & Localization Research Group",
    overview: "Investigated localization methods for autonomous vehicles in off-road environments. Evaluated GPS-only navigation versus GPS/IMU sensor fusion approaches under PhD mentorship to understand improvements in positioning accuracy for autonomous systems.",
    role: "Worked as research assistant analyzing vehicle localization data provided by PhD researchers and faculty. Focused on data analysis, validation, and statistical comparison of different sensor approaches. Responsible for processing research findings and presenting results to the academic community.",
    contributions: [
      "Investigated localization methods for autonomous vehicles, evaluating GPS-only navigation versus GPS/IMU sensor fusion in off-road environments",
      "Analyzed vehicle localization data from a Polaris MRZR, validating improvements in positioning accuracy through multi-sensor integration",
      "Performed statistical analysis and data validation to compare GPS-only versus sensor fusion approaches",
      "Collaborated with PhD researchers and faculty mentors on data interpretation and research methodology",
      "Presented research findings at the Spring Undergraduate Research Symposium, representing the ISTVS Student Chapter"
    ],
    techStack: ["GPS", "IMU Sensors", "Sensor Fusion", "Data Analysis", "Statistical Analysis", "Autonomous Vehicles"],
    outcomes: "Contributed to research understanding GPS/IMU sensor fusion advantages for autonomous vehicle localization in off-road settings. Gained experience in data analysis, statistical validation, and academic presentation of technical research."
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  const handleDragEnd = (_: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      handlePrev();
    } else if (info.offset.x < -swipeThreshold) {
      handleNext();
    }
  };

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

          {/* Experience Carousel */}
          <CarouselContainer>
            <CarouselWrapper>
              {currentIndex > 0 && (
                <NavButton onClick={handlePrev} aria-label="Previous experience">
                  <FaChevronLeft />
                </NavButton>
              )}
              {currentIndex === 0 && <div style={{ width: '64px' }} />}

              <CarouselContent>
                <CarouselInner>
                  <AnimatePresence mode="wait">
                    <ExperienceCard
                      key={experiences[currentIndex].id}
                      initial={{ opacity: 0, x: 100, rotateY: 20 }}
                      animate={{ opacity: 1, x: 0, rotateY: 0 }}
                      exit={{ opacity: 0, x: -100, rotateY: -20 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      drag="x"
                      dragElastic={0.2}
                      onDragEnd={handleDragEnd}
                      role="article"
                    >
                      <ExperienceHeader>
                        <div>
                          <ExperienceTitle>{experiences[currentIndex].title}</ExperienceTitle>
                          <ExperienceOrganization>{experiences[currentIndex].organization}</ExperienceOrganization>
                        </div>
                        <ExperienceMeta>
                          <FaCalendar aria-hidden="true" />
                          <span>{experiences[currentIndex].duration}</span>
                        </ExperienceMeta>
                      </ExperienceHeader>

                      <ExperienceMeta style={{ marginBottom: `${theme.spacing.md}` }}>
                        <FaUsers aria-hidden="true" />
                        <span>{experiences[currentIndex].team}</span>
                      </ExperienceMeta>

                      <ExperienceDescription>{experiences[currentIndex].overview}</ExperienceDescription>

                      <SectionSubtitle>My Role & Contributions</SectionSubtitle>
                      <ExperienceDescription>{experiences[currentIndex].role}</ExperienceDescription>

                      <BulletList>
                        {experiences[currentIndex].contributions.map((contribution, idx) => (
                          <li key={idx}>{contribution}</li>
                        ))}
                      </BulletList>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: `${theme.spacing.sm}`, margin: `${theme.spacing.md} 0` }}>
                        {experiences[currentIndex].techStack.map((tech, idx) => (
                          <TechBadge key={idx}>{tech}</TechBadge>
                        ))}
                      </div>

                      <SectionSubtitle>Impact & Outcomes</SectionSubtitle>
                      <ExperienceDescription>{experiences[currentIndex].outcomes}</ExperienceDescription>

                      {experiences[currentIndex].resources && (
                        <ResourcesSection>
                          <ResourcesLabel>📚 Resources</ResourcesLabel>
                          <ResourceLinks>
                            {experiences[currentIndex].resources.map((resource, idx) => (
                              <ResourceLink 
                                key={idx}
                                href={resource.url} 
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {resource.icon}
                                {resource.label}
                              </ResourceLink>
                            ))}
                          </ResourceLinks>
                        </ResourcesSection>
                      )}
                    </ExperienceCard>
                  </AnimatePresence>
                </CarouselInner>
              </CarouselContent>

              {currentIndex < experiences.length - 1 && (
                <NavButton onClick={handleNext} aria-label="Next experience">
                  <FaChevronRight />
                </NavButton>
              )}
              {currentIndex === experiences.length - 1 && <div style={{ width: '64px' }} />}
            </CarouselWrapper>

            <PaginationContainer>
              {experiences.map((_, idx) => (
                <PaginationDot
                  key={idx}
                  isActive={idx === currentIndex}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to experience ${idx + 1}`}
                />
              ))}
            </PaginationContainer>
          </CarouselContainer>
        </motion.div>
      </div>
    </ProjectsSection>
  );
};

export default Projects;