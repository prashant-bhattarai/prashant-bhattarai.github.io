import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { keyframes } from '@emotion/react';
import { lazy, Suspense } from 'react';
const FaGithub = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaGithub })));
const FaLinkedin = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaLinkedin })));
const FaEnvelope = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaEnvelope })));

const HeroSection = styled.section`
  min-height: calc(100vh - 4.5rem);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.lg} 0;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;
    
    @media (min-width: ${theme.breakpoints.sm}) {
      width: 90%;
    }
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1000px;
  width: 100%;
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: ${theme.spacing.lg};
  border: none;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl};
  }
`;

const fadeUpKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Title = styled.h1`
  animation: ${fadeUpKeyframes} 0.5s ease-out forwards;
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.light};
  line-height: 1.1;
  letter-spacing: -0.02em;
  white-space: nowrap;
`;

const Subtitle = styled.h2`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.2s forwards;
  opacity: 0;
  font-size: clamp(0.9rem, 1.8vw, 1.2rem);
  margin-bottom: ${theme.spacing.lg};
  opacity: 0.9;
  font-weight: 500;
  white-space: nowrap;
`;

const Description = styled.p`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.4s forwards;
  opacity: 0;
  font-size: clamp(1rem, 1.2vw, 1.2rem);
  max-width: 600px;
  margin-bottom: ${theme.spacing.xl};
  opacity: 0.8;
  line-height: 1.7;
`;

const CTAButtons = styled.div`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.5s forwards;
  opacity: 0;
  display: flex;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.xl};
  flex-wrap: wrap;

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${theme.spacing.sm};
  }
`;

const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  background: ${theme.colors.gradient.accent};
  color: ${theme.colors.textDark};
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: all ${theme.transitions.default};
  text-decoration: none;
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(246, 177, 122, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
    justify-content: center;
  }
`;

const SocialLinks = styled.div`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.6s forwards;
  opacity: 0;
  display: flex;
  gap: ${theme.spacing.md};
  
  a {
    color: ${theme.colors.textLight};
    font-size: 1.5rem;
    transition: all ${theme.transitions.default};
    padding: ${theme.spacing.xs};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.glass.background};
    
    &:hover {
      color: ${theme.colors.light};
      transform: translateY(-3px);
      background: ${theme.colors.glass.card};
      box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);
    }
  }

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.lg};
    
    a {
      font-size: 1.75rem;
    }
  }
`;

export const Hero = () => {
  return (
    <HeroSection id="hero" role="region" aria-label="Introduction">
      <div className="container">
        <HeroContent>
          <div>
            <Title role="heading" aria-level={2}>
              Hello, I'm Prashant Bhattarai
            </Title>
            <Subtitle role="heading" aria-level={3}>
              Mechanical Engineering Student | Python & CAD | Robotics
            </Subtitle>
            <Description role="paragraph">
              Sophomore at Mississippi State with a 4.0 GPA, focused on turning design ideas into reality. 
              I've worked on AI-enabled field device prototypes through product design research, and I'm diving 
              into CAD optimization and manufacturing processes. Currently developing a Python-based simulation 
              project and contributing to multiple engineering communities. Always learning new tools—recently 
              CSWA certified and working toward CSWP.
            </Description>
            <CTAButtons>
              <ResumeButton 
                href="/resume.pdf"
                download="Prashant_Bhattarai_Resume.pdf"
                aria-label="Download my resume as PDF"
              >
                Download Resume
              </ResumeButton>
            </CTAButtons>
            <SocialLinks role="list" aria-label="Social media links">
              <a 
                href="https://github.com/prashant-bhattarai" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
                role="listitem"
              >
                <Suspense fallback={<div style={{ width: '1.5rem', height: '1.5rem' }} />}>
                  <FaGithub aria-hidden="true" />
                </Suspense>
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/prashant-bhattarai2005" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
                role="listitem"
              >
                <Suspense fallback={<div style={{ width: '1.5rem', height: '1.5rem' }} />}>
                  <FaLinkedin aria-hidden="true" />
                </Suspense>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="mailto:prashantbhattarai224@gmail.com"
                aria-label="Send me an email"
                role="listitem"
              >
                <Suspense fallback={<div style={{ width: '1.5rem', height: '1.5rem' }} />}>
                  <FaEnvelope aria-hidden="true" />
                </Suspense>
                <span className="sr-only">Email</span>
              </a>
            </SocialLinks>
          </div>
        </HeroContent>
      </div>
    </HeroSection>
  );
};
