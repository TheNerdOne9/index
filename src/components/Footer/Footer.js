import { Link } from 'components/Link';
import { Text } from 'components/Text';
import { classes } from 'utils/style';
import styles from './Footer.module.css';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <Link secondary className={styles.link} href="https://www.figma.com/@Hamish" target="_self">
      {`© ${new Date().getFullYear()} Designed by Hamish Williams.`}
      </Link>
    </Text>
  </footer>
);
