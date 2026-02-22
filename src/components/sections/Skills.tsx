import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { 
  FaCube,
  FaMicrochip,
  FaChartLine,
  FaTools,
  FaDatabase,
  FaCode,
  FaCog,
  FaAward
} from 'react-icons/fa';
import { 
  SiPython,
  SiCplusplus,
  SiLatex
} from 'react-icons/si';
import { useState } from 'react';

const SkillsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.lg} ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} ${theme.spacing.lg};
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2.2rem, 4.5vw, 2.8rem);
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.light};
  position: relative;
  font-weight: 700;
  line-height: 1.2;

  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.light};
    border-radius: 2px;
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${theme.spacing.xl};
  width: 100%;
  margin-top: ${theme.spacing.xl};
  padding: 0 ${theme.spacing.lg};
  justify-items: center;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacing.xl};
  }
`;

const SkillCategory = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: ${theme.spacing.xl};
  transition: all ${theme.transitions.default};
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(246, 177, 122, 0.15);
  }
`;

const CategoryTitle = styled.h3`
  font-size: clamp(1.6rem, 3.5vw, 2rem);
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.light};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-weight: 700;
  position: relative;
  padding-bottom: ${theme.spacing.md};
  line-height: 1.3;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }

  svg {
    font-size: clamp(1.75rem, 3vw, 2rem);
    color: ${theme.colors.accent};
  }
`;

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.md};
  flex: 1;
  width: 100%;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: clamp(0.95rem, 2.2vw, 1.15rem);
  padding: ${theme.spacing.md};
  border-radius: 12px;
  transition: all ${theme.transitions.default};
  background: ${theme.colors.glass.card};
  font-weight: 500;
  line-height: 1.5;

  svg {
    font-size: clamp(1.1rem, 2vw, 1.5rem);
    color: ${theme.colors.accent};
    transition: all ${theme.transitions.default};
  }

  &:hover {
    background: ${theme.colors.gradient.glass};
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);

    svg {
      transform: scale(1.1) rotate(5deg);
      color: ${theme.colors.light};
    }
  }
`;

const CertificateIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  font-size: 0.9rem;
  color: ${theme.colors.accent};
  transition: all ${theme.transitions.default};
  padding: 2px 6px;
  margin-left: 4px;
  border-radius: 4px;

  &:hover {
    color: ${theme.colors.light};
    transform: scale(1.15);
    background: ${theme.colors.glass.card};
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Modal = styled.div<{ isOpen: boolean }>`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContent = styled.div`
  background: ${theme.colors.glass.background};
  border-radius: 20px;
  padding: ${theme.spacing.xl};
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
  position: relative;
  border: 1px solid rgba(246, 177, 122, 0.2);

  @media (min-width: ${theme.breakpoints.md}) {
    max-width: 80vw;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${theme.spacing.md};
  right: ${theme.spacing.md};
  background: ${theme.colors.accent};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${theme.transitions.default};
  color: ${theme.colors.textDark};

  &:hover {
    transform: rotate(90deg);
    box-shadow: 0 4px 12px rgba(246, 177, 122, 0.3);
  }
`;

const CertificatePDF = styled.iframe`
  width: 100%;
  height: 600px;
  border: none;
  border-radius: 12px;
  margin-bottom: ${theme.spacing.lg};
`;

const skillCategories = [
  {
    title: 'CAD & Design',
    icon: <FaCube />,
    skills: [
      { name: 'SolidWorks (CSWP)', icon: <FaCube />, certificate: 'CSWP.pdf' },
      { name: 'Fusion 360', icon: <FaTools /> },
      { name: 'Additive Manufacturing', icon: <FaCube />, certificate: 'CSWA AM.pdf' },
      { name: 'Design for Manufacturing', icon: <FaTools /> },
    ],
  },
  {
    title: 'Programming & Analysis',
    icon: <FaCode />,
    skills: [
      { name: 'Python', icon: <SiPython /> },
      { name: 'C / C++', icon: <SiCplusplus /> },
      { name: 'Data Analysis', icon: <FaChartLine /> },
      { name: 'Excel', icon: <FaDatabase /> },
    ],
  },
  {
    title: 'Research & Sensors',
    icon: <FaMicrochip />,
    skills: [
      { name: 'GPS/IMU Sensor Fusion', icon: <FaMicrochip /> },
      { name: 'Vehicle Localization', icon: <FaCog /> },
      { name: 'Technical Documentation', icon: <SiLatex /> },
      { name: 'Research Methodology', icon: <FaDatabase /> },
    ],
  },
];

const Skills = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

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
    <SkillsSection id="skills" role="region" aria-label="Skills and Expertise">
      <SectionTitle 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        role="heading"
        aria-level={2}
      >
        Skills & Expertise
      </SectionTitle>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SkillsContainer role="list">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index} 
              variants={itemVariants}
              role="listitem"
              aria-labelledby={`category-title-${index}`}
            >
              <CategoryTitle id={`category-title-${index}`}>
                <span aria-hidden="true">{category.icon}</span>
                {category.title}
              </CategoryTitle>
              <SkillsList role="list" aria-label={`${category.title} skills`}>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem 
                    key={skillIndex} 
                    variants={itemVariants}
                    role="listitem"
                  >
                    <span aria-hidden="true">{skill.icon}</span>
                    <span>{skill.name}</span>
                    {skill.certificate && (
                      <CertificateIcon
                        onClick={() => setSelectedCertificate(skill.certificate)}
                        title={`View ${skill.name} certificate`}
                        aria-label={`View ${skill.name} certificate`}
                      >
                        <FaAward />
                      </CertificateIcon>
                    )}
                    <span className="sr-only">{`${skill.name} - ${category.title} skill`}</span>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsContainer>
      </motion.div>

      <Modal 
        isOpen={!!selectedCertificate}
        onClick={() => setSelectedCertificate(null)}
        role="dialog"
        aria-labelledby="certificate-modal"
        aria-modal="true"
      >
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <CloseButton 
            onClick={() => setSelectedCertificate(null)}
            aria-label="Close certificate"
          >
            ×
          </CloseButton>
          {selectedCertificate && (
            <>
              <CertificatePDF
                src={`/${selectedCertificate}`}
                title="Certificate PDF"
              />
              <a 
                href={`/${selectedCertificate}`}
                download
                style={{
                  display: 'inline-block',
                  padding: `${theme.spacing.md} ${theme.spacing.lg}`,
                  background: theme.colors.gradient.accent,
                  color: theme.colors.textDark,
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  marginTop: theme.spacing.md,
                }}
              >
                Download Certificate
              </a>
            </>
          )}
        </ModalContent>
      </Modal>
    </SkillsSection>
  );
};

export default Skills;
