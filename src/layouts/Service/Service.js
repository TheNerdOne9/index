import { Button } from 'components/Button';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { tokens } from 'components/ThemeProvider/theme';
import { Transition } from 'components/Transition';
import { useParallax } from 'hooks';
import { forwardRef, useRef } from 'react';
import { classes, cssProps, msToNum, numToMs } from 'utils/style';
import styles from './Service.module.css';
import { Fragment } from 'react';

const initDelay = 300;

export function ServiceHeader({
  title,
  description,
  linkLabel = 'Visit website',
  url,
  roles,
  className,
}) {
  return (
    <Section className={classes(styles.header, className)} as="section">
      <div
        className={styles.headerContent}
        style={cssProps({ initDelay: numToMs(initDelay) })}
      >
        <div className={styles.details}>
          <Heading className={styles.title} level={2} as="h1">
            {title}
          </Heading>
          <Text className={styles.description} size="xl" as="p">
            {description}
          </Text>
          {!!url && (
            <Button
              secondary
              iconHoverShift
              className={styles.linkButton}
              icon="chevronRight"
              href={url}
            >
              {linkLabel}
            </Button>
          )}
        </div>
        {!!roles?.length && (
          <ul className={styles.meta}>
            {roles?.map((role, index) => (
              <li
                className={styles.metaItem}
                style={cssProps({ delay: numToMs(initDelay + 300 + index * 140) })}
                key={role}
              >
                <Text secondary>{role}</Text>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  );
}

export const ServiceContainer = ({ className, ...rest }) => (
  <article className={classes(styles.Service, className)} {...rest} />
);

export const ServiceSection = forwardRef(
  (
    {
      className,
      light,
      padding = 'both',
      fullHeight,
      backgroundOverlayOpacity = 0.9,
      backgroundElement,
      children,
      ...rest
    },
    ref
  ) => (
    <section
      className={classes(styles.section, className)}
      data-light={light}
      data-full-height={fullHeight}
      ref={ref}
      {...rest}
    >
      {!!backgroundElement && (
        <div
          className={styles.sectionBackground}
          style={cssProps({ opacity: backgroundOverlayOpacity })}
        >
          {backgroundElement}
        </div>
      )}
      <Section className={styles.sectionInner} data-padding={padding}>
        {children}
      </Section>
    </section>
  )
);

export const ServiceBackground = ({ opacity = 0.7, className, ...rest }) => {
  const imageRef = useRef();

  useParallax(0.6, value => {
    if (!imageRef.current) return;
    imageRef.current.style.setProperty('--offset', `${value}px`);
  });

  return (
    <Transition in timeout={msToNum(tokens.base.durationM)}>
      {visible => (
        <div
          className={classes(styles.backgroundImage, className)}
          data-visible={visible}
        >
          <div className={styles.backgroundImageElement} ref={imageRef}>
            <Image alt="Presentation 4" role="presentation" {...rest} />
          </div>
          <div className={styles.backgroundScrim} style={cssProps({ opacity })} />
        </div>
      )}
    </Transition>
  );
};

export const ServiceImage = ({ className, alt, ...rest }) => (
  <div className={classes(styles.image, className)}>
    <Image reveal alt={alt} delay={300} {...rest} />
  </div>
);

export const ServiceSectionContent = ({ className, width = 'l', ...rest }) => (
  <div
    className={classes(styles.sectionContent, className)}
    data-width={width}
    {...rest}
  />
);

const as = "";
const level = 1;
const align = 'auto';
const weight = 'medium';
const clampedLevel = Math.min(Math.max(level, 0), 5);
const Component = as || `h${Math.max(clampedLevel, 1)}`;
import { Divider } from 'components/Divider';
export const ServiceSectionHeading = ({ className, level = 3, as = 'h2',indexText,visible,titleId, ...rest }) => (
  /**/
  <Fragment>
      <Heading
        className={classes(styles.sectionHeading, className)}
        as={as}
        level={level}
        align="auto"
        {...rest}
      />
        <Divider
          notchWidth="64px"
          notchHeight="8px"
        ><span className={styles.indexNumber} > {indexText} </span></Divider>
        
      <Heading
        level={3}
        as="h2"
        className={styles.title}
        data-visible={visible}
        id={titleId}
      >
      </Heading>
    </Fragment>
);

export const ServiceSectionText = ({ className, ...rest }) => (
  <Text className={classes(styles.sectionText, className)} size="l" as="p" {...rest} />
);

export const ServiceTextRow = ({
  center,
  stretch,
  justify = 'center',
  width = 'm',
  noMargin,
  className,
  centerMobile,
  ...rest
}) => (
  <div
    className={classes(styles.textRow, className)}
    data-center={center}
    data-stretch={stretch}
    data-center-mobile={centerMobile}
    data-no-margin={noMargin}
    data-width={width}
    data-justify={justify}
    {...rest}
  />
);

export const ServiceSectionColumns = ({ className, centered, ...rest }) => (
  <ServiceSectionContent
    className={classes(styles.sectionColumns, className)}
    data-centered={centered}
    {...rest}
  />
);
