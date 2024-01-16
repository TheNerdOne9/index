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
import backBackgroundBarLarge from 'assets/back-background-bar-large.jpg';
import backBackgroundBarPlaceholder from 'assets/back-background-bar-placeholder.jpg';
import backBackgroundBar from 'assets/back-background-bar.jpg';
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
import threatSidebarLayersLarge from 'assets/threat-sidebar-layers-large.png';
import threatSidebarLayersPlaceholder from 'assets/threat-sidebar-layers.png';
import threatSidebarLayers from 'assets/threat-sidebar-layers.png';
import sliceSidebarLayersLarge from 'assets/slice-sidebar-layers-large.png';
import sliceSidebarLayersPlaceholder from 'assets/slice-sidebar-layers-placeholder.png';
import sliceSidebarLayers from 'assets/slice-sidebar-layers.png';

export const Services = () => {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_KEY;
  const roles = ['Red Team', 'DevSecOps',  'Penetration Test', 'Threat Hunting', 'Awareness'];
  return (
    <Fragment>
      <Meta
        title="Services"
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
          title="Services"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum semper quam, sed efficitur enim faucibus vitae. Sed egestas, lectus ac scelerisque semper, lectus mauris semper eros, ac faucibus quam lectus non quam. Aenean euismod quam nec justo faucibus, ac semper lectus semper. Aliquam auctor quam ac lectus semper, sit amet ultrices mauris scelerisque. Donec euismod, quam vitae tincidunt faucibus, lectus lectus feugiat nisi, nec faucibus eros enim ac quam. Sed ullamcorper, lectus ac sodales semper, quam mauris tincidunt tellus, ac semper enim eros sed eros."
          roles={roles}
        />
        <ServiceSection padding="top">
        </ServiceSection>
        <ServiceSection>
          <ServiceSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ServiceSectionHeading>Red Team</ServiceSectionHeading>
              <ServiceSectionText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum semper quam, sed efficitur enim faucibus vitae. Sed egestas, lectus ac scelerisque semper, lectus mauris semper eros, ac faucibus quam lectus non quam. Aenean euismod quam nec justo faucibus, ac semper lectus semper. Aliquam auctor quam ac lectus semper, sit amet ultrices mauris scelerisque. Donec euismod, quam vitae tincidunt faucibus, lectus lectus feugiat nisi, nec faucibus eros enim ac quam. Sed ullamcorper, lectus ac sodales semper, quam mauris tincidunt tellus, ac semper enim eros sed eros.
              </ServiceSectionText>
              <ServiceSectionText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum semper quam, sed efficitur enim faucibus vitae. Sed egestas, lectus ac scelerisque semper, lectus mauris semper eros, ac faucibus quam lectus non quam. Aenean euismod quam nec justo faucibus, ac semper lectus semper. Aliquam auctor quam ac lectus semper, sit amet ultrices mauris scelerisque. Donec euismod, quam vitae tincidunt faucibus, lectus lectus feugiat nisi, nec faucibus eros enim ac quam. Sed ullamcorper, lectus ac sodales semper, quam mauris tincidunt tellus, ac semper enim eros sed eros.
              </ServiceSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[sliceSidebarLayers, sliceSidebarLayersLarge]}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
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
          <ServiceSectionContent>
            <ServiceTextRow>
              <ServiceSectionHeading>DevSecOps</ServiceSectionHeading>
              <ServiceSectionText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum semper quam, sed efficitur enim faucibus vitae. Sed egestas, lectus ac scelerisque semper, lectus mauris semper eros, ac faucibus quam lectus non quam. Aenean euismod quam nec justo faucibus, ac semper lectus semper. Aliquam auctor quam ac lectus semper, sit amet ultrices mauris scelerisque. Donec euismod, quam vitae tincidunt faucibus, lectus lectus feugiat nisi, nec faucibus eros enim ac quam. Sed ullamcorper, lectus ac sodales semper, quam mauris tincidunt tellus, ac semper enim eros sed eros.
              </ServiceSectionText>
            </ServiceTextRow>
            <Image
              srcSet={[devSidebarLayers, devSidebarLayersLarge]}
              placeholder={devSidebarLayersPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ServiceSectionContent>
        </ServiceSection>
        <ServiceSection padding="top">
          <ServiceSectionContent className={styles.grid}>
          <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[sliceSidebarLayers, sliceSidebarLayersLarge]}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[penSidebarLayers, penSidebarLayersLarge]}
                placeholder={penSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
            <div className={styles.gridText}>
              <ServiceSectionHeading>Penetration Testing</ServiceSectionHeading>
              <ServiceSectionText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum semper quam, sed efficitur enim faucibus vitae. Sed egestas, lectus ac scelerisque semper, lectus mauris semper eros, ac faucibus quam lectus non quam. Aenean euismod quam nec justo faucibus, ac semper lectus semper. Aliquam auctor quam ac lectus semper, sit amet ultrices mauris scelerisque. Donec euismod, quam vitae tincidunt faucibus, lectus lectus feugiat nisi, nec faucibus eros enim ac quam. Sed ullamcorper, lectus ac sodales semper, quam mauris tincidunt tellus, ac semper enim eros sed eros.
              </ServiceSectionText>
            </div>
          </ServiceSectionContent>
        </ServiceSection>
        <ServiceSection light>
          <ServiceSectionContent>
            <ServiceTextRow>
              <ServiceSectionHeading>Threat Hunting</ServiceSectionHeading>
              <ServiceSectionText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum semper quam, sed efficitur enim faucibus vitae. Sed egestas, lectus ac scelerisque semper, lectus mauris semper eros, ac faucibus quam lectus non quam. Aenean euismod quam nec justo faucibus, ac semper lectus semper. Aliquam auctor quam ac lectus semper, sit amet ultrices mauris scelerisque. Donec euismod, quam vitae tincidunt faucibus, lectus lectus feugiat nisi, nec faucibus eros enim ac quam. Sed ullamcorper, lectus ac sodales semper, quam mauris tincidunt tellus, ac semper enim eros sed eros.
              </ServiceSectionText>
            </ServiceTextRow>
            <Image
              srcSet={[threatSidebarLayers, threatSidebarLayersLarge]}
              placeholder={threatSidebarLayersPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ServiceSectionContent>
        </ServiceSection>
        <ServiceSection>
          <ServiceSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ServiceSectionHeading>Awareness</ServiceSectionHeading>
              <ServiceSectionText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum semper quam, sed efficitur enim faucibus vitae. Sed egestas, lectus ac scelerisque semper, lectus mauris semper eros, ac faucibus quam lectus non quam. Aenean euismod quam nec justo faucibus, ac semper lectus semper. Aliquam auctor quam ac lectus semper, sit amet ultrices mauris scelerisque. Donec euismod, quam vitae tincidunt faucibus, lectus lectus feugiat nisi, nec faucibus eros enim ac quam. Sed ullamcorper, lectus ac sodales semper, quam mauris tincidunt tellus, ac semper enim eros sed eros..
              </ServiceSectionText>
              <ServiceSectionText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum semper quam, sed efficitur enim faucibus vitae. Sed egestas, lectus ac scelerisque semper, lectus mauris semper eros, ac faucibus quam lectus non quam. Aenean euismod quam nec justo faucibus, ac semper lectus semper. Aliquam auctor quam ac lectus semper, sit amet ultrices mauris scelerisque. Donec euismod, quam vitae tincidunt faucibus, lectus lectus feugiat nisi, nec faucibus eros enim ac quam. Sed ullamcorper, lectus ac sodales semper, quam mauris tincidunt tellus, ac semper enim eros sed eros.
              </ServiceSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[sliceSidebarLayers, sliceSidebarLayersLarge]}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
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
