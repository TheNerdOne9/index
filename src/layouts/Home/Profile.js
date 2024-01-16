import profileKatakana from 'assets/katakana-profile.svg?url';
import profileImgLarge from 'assets/profile-large.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile.jpg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
    In the vast expanse of cyberspace, I&apos;m the mischievous elf, the code-wielding maestro, the cybersecurity whiz who turns vulnerabilities into punchlines. I&apos;m a certified cybersecurity consultant with a knack for transforming digital defenses into impenetrable fortresses, all while cracking jokes with the same proficiency I crack codes.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
    As a DevSecOps enthusiast, I&apos;ll weave security enchantments into your development processes, ensuring your systems are magically immune to cyber threats from the very start. My red team expertise is as meticulously as a ninja to probe your defenses, exposing every chink in your armor before the real hackers do.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
    Penetration testing? It&apos;s my playground. I&apos;ll relentlessly attack your systems, exposing every weakness and vulnerability, leaving you with a comprehensive roadmap for fortification that&apos;s as hilarious as it is effective. My training programs are designed to transform mere mortals into cybersecurity superheroes, equipping them with the knowledge and skills to protect their digital kingdoms from the clutches of cyber villains.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
But wait, there&apos;s more! I&apos;m also launching my freelancing service, bringing my cybersecurity expertise to your doorstep. Whether you&apos;re a small business or a large enterprise, I&apos;m ready to help you secure your digital realm with a dash of geeky humor and a whole lot of cybersecurity prowess. So, don&apos;t let hackers laugh their way to your digital bank account – contact me today and let&apos;s turn the tables on those cyber-bullies! 
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="https://www.linkedin.com/in/diogo-salvador"
                icon="send"
              >
                LinkedIn
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me standing in front of the Torii on Miyajima, an island off the coast of Hiroshima in Japan"
                />
                <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={visible}
                >
                  <use href={`${profileKatakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
