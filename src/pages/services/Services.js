import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import usesBackground from 'assets/uses-background.mp4';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Image } from 'components/Image';
import {
  ServiceBackground,
  ServiceContainer,
  ServiceHeader,
  ServiceImage,
  ServiceSection,
  ServiceSectionColumns,
  ServiceSectionContent,
  ServiceSectionHeading,
  ServiceSectionText,
  ServiceTextRow,
} from 'layouts/Service';
import { Fragment } from 'react';
import styles from './Services.module.css';
import Script from "next/script";
import { randomBytes } from 'crypto';
const nonce = randomBytes(128).toString('base64');
/*Service Images*/
import { media } from 'utils/style';
import backBackgroundLarge from 'assets/back-background-large.jpg';
import backBackgroundPlaceholder from 'assets/back-background-placeholder.jpg';
import backBackground from 'assets/back-background.jpg';
import backSidebarLayersLarge from 'assets/back-sidebar-layers-large.png';
import backSidebarLayersPlaceholder from 'assets/back-sidebar-layers.png';
import backSidebarLayers from 'assets/back-sidebar-layers.png';
import devSidebarLayersLarge from 'assets/dev-sidebar-layers-large.png';
import devSidebarLayersPlaceholder from 'assets/dev-sidebar-layers.png';
import devSidebarLayers from 'assets/dev-sidebar-layers.png';
import phiSidebarLayersLarge from 'assets/phi-sidebar-layers-large.png';
import phiSidebarLayersPlaceholder from 'assets/phi-sidebar-layers.png';
import phiSidebarLayers from 'assets/phi-sidebar-layers-small.png';
import penSidebarLayersLarge from 'assets/pen-sidebar-layers-large.png';
import penSidebarLayersPlaceholder from 'assets/pen-sidebar-layers.png';
import penSidebarLayers from 'assets/pen-sidebar-layers.png';
import threatSidebarLayersLarge from 'assets/target.png';

export const Services = () => {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_KEY;
  const roles = ['Red Team', 'DevSecOps',  'Penetration Test', 'Threat Hunting', 'Awareness'];
  return (
    <Fragment>
      <Meta
        title="Freelancing"
        description="A list of hardware and software I use to do my thing"
      />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        nonce={nonce}
      />
      <Script id="google-analytics" strategy="afterInteractive" nonce={nonce}>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <ServiceContainer className={styles.services}>
        <ServiceBackground
          src={backBackground}
          srcSet={`${backBackground.src} 1280w, ${backBackgroundLarge.src} 2560w`}
          placeholder={backBackgroundPlaceholder}
          opacity={0.8}
        />
        <ServiceHeader
          title="Freelancing Services"
          description="With all this adventure in the area of cybersecurity and with the experience gained, I feel that I must return some of this knowledge to the community, especially the Portuguese one where i came from, through my blog and work to improve the maturity of companies with fewer resources or knowledge with a closer and uncomplicated relationship. For this reason, I present some of the areas in which I have acquired skills and in which I am available to work with you to secure your business."

        />
        <ServiceSection padding="top">
        </ServiceSection>
        <ServiceSection>
          <ServiceSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ServiceSectionHeading>Red Team</ServiceSectionHeading>
              <ServiceSectionText>
              Empower your organization's cybersecurity posture with a comprehensive red team service, meticulously simulating real-world attacks to identify and fortify critical vulnerabilities before genuine threats can exploit them from the internet.
              </ServiceSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[backSidebarLayers, backSidebarLayersLarge]}
                placeholder={backSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ServiceSectionColumns>
        </ServiceSection>
        <ServiceSection light>
        <ServiceSectionContent className={styles.grid}>
          <div className={styles.sidebarImages}>
              
              <Image
                className={styles.sidebarImage1}
                srcSet={[devSidebarLayers, devSidebarLayersLarge]}
                placeholder={devSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
            <div className={styles.gridText}>
              <ServiceSectionHeading>DevSecOps</ServiceSectionHeading>
              <ServiceSectionText>
              Securely streamline your software development process with a comprehensive DevSecOps service, strategically integrating security practices throughout the lifecycle to enhance your cybersecurity posture and safeguard your digital assets from cyberattacks.
              </ServiceSectionText>
            </div>
          </ServiceSectionContent>
        </ServiceSection>
        <ServiceSection padding="top"  >
          <ServiceSectionContent className={styles.grid}>
          
            <div className={styles.gridText}>
              <ServiceSectionHeading>Penetration Testing</ServiceSectionHeading>
              <ServiceSectionText>
              Secure your network from potential breaches with a proactive internal assessment service, identifying and eliminating security gaps before they can be exposed.              </ServiceSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[penSidebarLayers, penSidebarLayersLarge]}
                placeholder={penSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ServiceSectionContent>
        </ServiceSection>
        <ServiceSection light>
        <ServiceSectionContent className={styles.grid}>
          <div className={styles.sidebarImages}>
              
              <Image
                className={styles.sidebarImage1}
                srcSet={[threatSidebarLayersLarge, threatSidebarLayersLarge]}
                placeholder={threatSidebarLayersLarge}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
            <div className={styles.gridText}>
              <ServiceSectionHeading>Threat Hunting</ServiceSectionHeading>
              <ServiceSectionText>
              Protect your organization from threat actors with a comprehensive threat hunting and darkweb monitoring services, proactively identifying and neutralizing threats that may be lurking in the hidden corners of the internet.              </ServiceSectionText>
            </div>
          </ServiceSectionContent>
        </ServiceSection>
        <ServiceSection>
          <ServiceSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ServiceSectionHeading>Awareness</ServiceSectionHeading>
              <ServiceSectionText>
              Elevate your organization's cybersecurity posture with a proactive awareness service, conducting customized training programs and simulated phishing exercises to educate your employees about the latest techniques, fostering a culture of cybersecurity vigilance, and safeguarding your organization from costly data breaches and cyberattacks.
              </ServiceSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[phiSidebarLayers, phiSidebarLayersLarge]}
                placeholder={phiSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ServiceSectionColumns>
        </ServiceSection>
      </ServiceContainer>
      <Footer />
    </Fragment>
    
  );
};
