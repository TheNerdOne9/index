import backgroundSprLarge from 'assets/spr-background-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from 'assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from 'assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from 'assets/spr-background-volcanism.jpg';
import backgroundSpr from 'assets/spr-background.jpg';
import imageSprComponentsDarkLarge from 'assets/spr-components-dark-large.png';
import imageSprComponentsDarkPlaceholder from 'assets/spr-components-dark-placeholder.png';
import imageSprComponentsDark from 'assets/spr-components-dark.png';
import imageSprComponentsLightLarge from 'assets/spr-components-light-large.png';
import imageSprComponentsLightPlaceholder from 'assets/spr-components-light-placeholder.png';
import imageSprComponentsLight from 'assets/spr-components-light.png';
import imageSprDesignSystemDarkLarge from 'assets/spr-design-system-dark-large.png';
import imageSprDesignSystemDarkPlaceholder from 'assets/spr-design-system-dark-placeholder.png';
import imageSprDesignSystemDark from 'assets/spr-design-system-dark.png';
import imageSprDesignSystemLightLarge from 'assets/spr-design-system-light-large.png';
import imageSprDesignSystemLightPlaceholder from 'assets/spr-design-system-light-placeholder.png';
import imageSprDesignSystemLight from 'assets/spr-design-system-light.png';
import imageSprLessonBuilderDarkLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDarkPlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import imageSprLessonBuilderDark from 'assets/spr-lesson-builder-dark.jpg';
import imageSprLessonBuilderLightLarge from 'assets/spr-lesson-builder-light-large.jpg';
import imageSprLessonBuilderLightPlaceholder from 'assets/spr-lesson-builder-light-placeholder.jpg';
import imageSprLessonBuilderLight from 'assets/spr-lesson-builder-light.jpg';
import videoSprMotionLarge from 'assets/spr-motion-large.mp4';
import videoSprMotionPlaceholder from 'assets/spr-motion-placeholder.jpg';
import videoSprMotion from 'assets/spr-motion.mp4';
import imageSprSchema1DarkLarge from 'assets/spr-schema-1-dark-large.png';
import imageSprSchema1DarkPlaceholder from 'assets/spr-schema-1-dark-placeholder.png';
import imageSprSchema1Dark from 'assets/spr-schema-1-dark.png';
import imageSprSchema1LightLarge from 'assets/spr-schema-1-light-large.png';
import imageSprSchema1LightPlaceholder from 'assets/spr-schema-1-light-placeholder.png';
import imageSprSchema1Light from 'assets/spr-schema-1-light.png';
import imageSprSchema2DarkLarge from 'assets/spr-schema-2-dark-large.png';
import imageSprSchema2DarkPlaceholder from 'assets/spr-schema-2-dark-placeholder.png';
import imageSprSchema2Dark from 'assets/spr-schema-2-dark.png';
import imageSprSchema2LightLarge from 'assets/spr-schema-2-light-large.png';
import imageSprSchema2LightPlaceholder from 'assets/spr-schema-2-light-placeholder.png';
import imageSprSchema2Light from 'assets/spr-schema-2-light.png';
import imageSprStoryboarderDarkLarge from 'assets/spr-storyboarder-dark-large.png';
import imageSprStoryboarderDarkPlaceholder from 'assets/spr-storyboarder-dark-placeholder.png';
import imageSprStoryboarderDark from 'assets/spr-storyboarder-dark.png';
import imageSprStoryboarderLightLarge from 'assets/spr-storyboarder-light-large.png';
import imageSprStoryboarderLightPlaceholder from 'assets/spr-storyboarder-light-placeholder.png';
import imageSprStoryboarderLight from 'assets/spr-storyboarder-light.png';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Meta } from 'components/Meta';
import { SegmentedControl, SegmentedControlOption } from 'components/SegmentedControl';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
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
import dynamic from 'next/dynamic';
import { Fragment, useMemo } from 'react';
import { media } from 'utils/style';
import styles from './SmartSparrow.module.css';

const Earth = dynamic(() => import('./Earth').then(mod => mod.Earth));
const EarthSection = dynamic(() => import('./Earth').then(mod => mod.EarthSection));

const title = 'Designing the future of education';
const description =
  'I worked as the design lead on a major iteration of Smart Sparrow’s product. We took the platform in a bold new direction, focusing on becoming the best tool for learning designers.';
const roles = [
  'Art Direction',
  'UX and UI Design',
  'Front End Development',
  'Motion Design',
];

export const SmartSparrow = () => {
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    dispatch({ type: 'setTheme', value: themes[index] });
  };

  return (
    <Fragment>
      <ServiceContainer className="spr">
        <Meta title={title} prefix="Services" description={description} />
        <ServiceBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr.src} 1080w, ${backgroundSprLarge.src} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ServiceHeader
          title={title}
          description={description}
          url="https://www.smartsparrow.com/"
          roles={roles}
        />
        <ServiceSection padding="top">
          <ServiceSectionContent>
            <ServiceImage
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprLessonBuilderDark, imageSprLessonBuilderDarkLarge]
                  : [imageSprLessonBuilderLight, imageSprLessonBuilderLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprLessonBuilderDarkPlaceholder
                  : imageSprLessonBuilderLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ServiceSectionContent>
        </ServiceSection>
        <ServiceSection>
          <ServiceTextRow>
            <ServiceSectionHeading>The problem</ServiceSectionHeading>
            <ServiceSectionText>
              In 2017, Smart Sparrow began a Service to build an entirely new platform to
              from the ground up to serve as the most powerful tool for educators to
              create online learning experiences. The old platform was built in Flash, and
              there were a number of user experience problems to solve in the process of
              moving the platform to Javascript. The primary goals for the Service were
              reducing barriers to collaboration, and making the platform both easier for
              new users, but with plenty of room to scale for advanced users.
            </ServiceSectionText>
          </ServiceTextRow>
        </ServiceSection>
        <ServiceSection light={isDark}>
          <ServiceSectionContent>
            <Image
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprComponentsDark, imageSprComponentsDarkLarge]
                  : [imageSprComponentsLight, imageSprComponentsLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprComponentsDarkPlaceholder
                  : imageSprComponentsLightPlaceholder
              }
              alt={`A set of ${themeId} themed components for the aero design system`}
              sizes="100vw"
            />
            <ServiceTextRow>
              <SegmentedControl
                currentIndex={themes.indexOf(themeId)}
                onChange={handleThemeChange}
              >
                <SegmentedControlOption>Dark theme</SegmentedControlOption>
                <SegmentedControlOption>Light theme</SegmentedControlOption>
              </SegmentedControl>
            </ServiceTextRow>
            <ServiceTextRow>
              <ServiceSectionHeading>The aero design system</ServiceSectionHeading>
              <ServiceSectionText>
                To streamline the design process across designers and engineers for such a
                large Service, it was important to lay the foundations with a strong,
                flexible design system that could evolve during the product’s development
                cycle. This would inform both the aesthetics and user experience across
                the product itself as well as the website and marketing material.
              </ServiceSectionText>
            </ServiceTextRow>
          </ServiceSectionContent>
        </ServiceSection>
        <ServiceSection>
          <ServiceSectionContent>
            <Image
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprDesignSystemDark, imageSprDesignSystemDarkLarge]
                  : [imageSprDesignSystemLight, imageSprDesignSystemLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprDesignSystemDarkPlaceholder
                  : imageSprDesignSystemLightPlaceholder
              }
              alt="The homepage of the aero design system docs website linking to principles and components."
              sizes="100vw"
            />
            <ServiceTextRow>
              <ServiceSectionHeading>Design system docs</ServiceSectionHeading>
              <ServiceSectionText>
                A design system is useless if no one knows how to use it, so we put
                together a comprehensive documentation website to cover principles, ux,
                accessibility, and component guidelines for designers and engineers
                working with the system.
              </ServiceSectionText>
            </ServiceTextRow>
          </ServiceSectionContent>
        </ServiceSection>
        <ThemeProvider themeId="dark" data-invert>
          <ServiceSection
            backgroundOverlayOpacity={0.5}
            backgroundElement={
              <Image
                srcSet={[imageSprBackgroundVolcanism, imageSprBackgroundVolcanismLarge]}
                placeholder={imageSprBackgroundVolcanismPlaceholder}
                alt="A dramatic ocean scene with lava forming a new land mass."
                sizes="100vw"
              />
            }
          >
            <ServiceSectionColumns width="full">
              <ServiceSectionContent width="full">
                <ServiceTextRow width="s">
                  <ServiceSectionHeading>Motion design</ServiceSectionHeading>
                  <ServiceSectionText>
                    Animation was a core principle in making the authoring experience a
                    more understandable process. Elements animate in ways that indicate
                    the cause and effect of each interaction to improve the fluidity of
                    the overall experience.
                  </ServiceSectionText>
                </ServiceTextRow>
              </ServiceSectionContent>
              <Image
                raised
                className={styles.video}
                srcSet={[
                  { src: videoSprMotion, width: 1280 },
                  { src: videoSprMotionLarge, width: 2560 },
                ]}
                placeholder={videoSprMotionPlaceholder}
                alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </ServiceSectionColumns>
          </ServiceSection>
        </ThemeProvider>
        <ServiceSection>
          <ServiceSectionContent>
            <ServiceTextRow>
              <ServiceSectionHeading>Encouraging adaptivity</ServiceSectionHeading>
              <ServiceSectionText>
                A major part of solving for collaboration was being able to visualize the
                learner experience in the editor. This was especially beneficial for
                subject matter experts and instructors need to review and give feedback on
                the higher level structure without having to dig through all of the
                adaptivity scenarios screen by screen.
              </ServiceSectionText>
            </ServiceTextRow>
            <Image
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprStoryboarderDark, imageSprStoryboarderDarkLarge]
                  : [imageSprStoryboarderLight, imageSprStoryboarderLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprStoryboarderDarkPlaceholder
                  : imageSprStoryboarderLightPlaceholder
              }
              alt="A drag and drop storyboard style editor for creating an adaptive lesson."
              sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
            />
          </ServiceSectionContent>
        </ServiceSection>
        <ServiceSection>
          <ServiceSectionColumns>
            <ServiceSectionContent>
              <ServiceTextRow>
                <ServiceSectionHeading>
                  An extensible plugin ecosystem usable by everyone
                </ServiceSectionHeading>
                <ServiceSectionText>
                  The most powerful aspect of the platform is the ability to create custom
                  plugins for any content, whether it be a degree, course, lesson, screen,
                  or interactive component. Out of the box these can be made configurable
                  with minimal effort from developers. Learning designers can then edit
                  everything using a common configuration interface.
                </ServiceSectionText>
              </ServiceTextRow>
            </ServiceSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={
                  isDark
                    ? [imageSprSchema2Dark, imageSprSchema2DarkLarge]
                    : [imageSprSchema2Light, imageSprSchema2LightLarge]
                }
                placeholder={
                  isDark
                    ? imageSprSchema2DarkPlaceholder
                    : imageSprSchema2LightPlaceholder
                }
                alt="Configuration options for a component."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={
                  isDark
                    ? [imageSprSchema1Dark, imageSprSchema1DarkLarge]
                    : [imageSprSchema1Light, imageSprSchema1LightLarge]
                }
                placeholder={
                  isDark
                    ? imageSprSchema1DarkPlaceholder
                    : imageSprSchema1LightPlaceholder
                }
                alt="Configuration options for text."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
            </div>
          </ServiceSectionColumns>
        </ServiceSection>
        <ThemeProvider themeId="dark" data-invert>
          <Earth
            className={styles.earth}
            hideMeshes={useMemo(
              () => ['Atmosphere', 'EarthPartial', 'Chunk', 'EarthFull'],
              []
            )}
            position={useMemo(() => [0, 0, 0], [])}
            labels={useMemo(
              () => [
                {
                  position: [0.54, 0.19, 0.18],
                  text: 'Pacific ring of fire',
                  hidden: true,
                },
                {
                  position: [0.47, -0.38, 0.04],
                  text: 'Ruapehu',
                  hidden: true,
                },
                {
                  position: [0.22, 0.44, -0.35],
                  text: 'St. Helens',
                  hidden: true,
                },
                {
                  position: [0.16, -0.06, 0.58],
                  text: 'Krakatoa',
                  hidden: true,
                },
                {
                  position: [0.11, 0.2, -0.56],
                  text: 'Parícutin',
                  hidden: true,
                },
                {
                  position: [0.52, 0.2, -0.23],
                  text: 'Kīlauea',
                  hidden: true,
                },
                {
                  position: [-0.24, 0.75, 0.24],
                  text: 'Mantle',
                  delay: 800,
                  hidden: true,
                },
                {
                  position: [-0.24, 0.55, 0.24],
                  text: 'Outer core',
                  delay: 800,
                  hidden: true,
                },
                {
                  position: [-0.24, 0.35, 0.24],
                  text: 'Inner core',
                  delay: 800,
                  hidden: true,
                },
              ],
              []
            )}
            scale={0.6}
          >
            <EarthSection
              scrim
              animations={['0:loop']}
              camera={[0, 0, 1.5]}
              meshes={['Atmosphere', 'EarthFull']}
            >
              <ServiceSection>
                <ServiceSectionContent>
                  <ServiceTextRow center>
                    <ServiceSectionHeading>
                      Next-generation learning experiences
                    </ServiceSectionHeading>
                    <ServiceSectionText>
                      The flexibility of the product allowed for developers to create
                      engaging interactive experiences as highly configurable plugins that
                      could then be used and manipulated by learning designers.
                    </ServiceSectionText>
                  </ServiceTextRow>
                </ServiceSectionContent>
              </ServiceSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[0, 0, 2.4]}
              meshes={['Atmosphere', 'EarthFull']}
            />
            <EarthSection
              animations={['0:loop']}
              camera={[1.14, -1.39, 0.94]}
              meshes={['Atmosphere', 'EarthFull']}
            >
              <ServiceSection>
                <ServiceSectionContent width="xl">
                  <ServiceTextRow justify="end" width="s">
                    <ServiceSectionHeading level={4} as="h3">
                      Bringing 3D into learning
                    </ServiceSectionHeading>
                    <ServiceSectionText>
                      One really cool example is the 3D screen plugin. Learning designers
                      can load any model into it and then configure camera positions to
                      animate to for each section.
                    </ServiceSectionText>
                  </ServiceTextRow>
                </ServiceSectionContent>
              </ServiceSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[1.17, 0.69, -1.47]}
              meshes={['Atmosphere', 'EarthFull']}
              labels={[
                'Pacific ring of fire',
                'Ruapehu',
                'St. Helens',
                'Krakatoa',
                'Parícutin',
                'Kīlauea',
              ]}
            >
              <ServiceSection>
                <ServiceSectionContent width="xl">
                  <ServiceTextRow justify="start" width="s">
                    <ServiceSectionHeading level={4} as="h3">
                      Interactivity
                    </ServiceSectionHeading>
                    <ServiceSectionText>
                      Learners can then be directed to specific parts of the model and
                      shown labels. They’re also able to click and drag to orbit around
                      and freely explore at any time.
                    </ServiceSectionText>
                  </ServiceTextRow>
                </ServiceSectionContent>
              </ServiceSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[1.81, 0.51, 0.43]}
              meshes={['Atmosphere', 'EarthFull']}
              labels={[
                'Pacific ring of fire',
                'Ruapehu',
                'St. Helens',
                'Krakatoa',
                'Parícutin',
                'Kīlauea',
              ]}
            />
            <EarthSection
              animations={['0:loop']}
              camera={[0.37, 1.02, 1.84]}
              meshes={['EarthPartial', 'Chunk']}
              labels={['Mantle', 'Outer core', 'Inner core']}
            >
              <ServiceSection>
                <ServiceSectionContent width="xl">
                  <ServiceTextRow justify="end" width="s">
                    <ServiceSectionHeading level={4} as="h3">
                      Animation
                    </ServiceSectionHeading>
                    <ServiceSectionText>
                      Learning designers can pick an animation included in the model to
                      play or loop for any section without having to use any complex
                      animation tools.
                    </ServiceSectionText>
                  </ServiceTextRow>
                </ServiceSectionContent>
              </ServiceSection>
            </EarthSection>
            <EarthSection
              scrimReverse
              animations={['0:loop']}
              camera={[0.37, 1.02, 1.84]}
              meshes={['Atmosphere', 'EarthFull']}
            />
          </Earth>
        </ThemeProvider>
        <ServiceSection>
          <ServiceSectionContent>
            <ServiceTextRow center centerMobile noMargin>
              <ServiceSectionHeading>Service outcomes</ServiceSectionHeading>
              <ServiceSectionText>
                Ultimately the Service was successful after Smart Sparrow and the aero
                platform were{' '}
                <Link href="https://www.prnewswire.com/news-releases/pearson-acquires-interactive-learning-technology-from-smart-sparrow-300987673.html">
                  acquired by Pearson in 2020
                </Link>{' '}
                to become a foundation for their next generation learning platform.
              </ServiceSectionText>
            </ServiceTextRow>
          </ServiceSectionContent>
        </ServiceSection>
      </ServiceContainer>
      <Footer />
    </Fragment>
  );
};
