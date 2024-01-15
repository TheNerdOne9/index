import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      
      width="66"
      height="40"
      viewBox="0 0 166 140"
      x="0"
      y="0"
      ref={ref}
      {...props}
      >
      <defs>
          <clipPath id={clipId}>
          <path d="m209.45 209.47h0.23c12.85 0 23.27-10.42 23.27-23.27s-10.42-23.27-23.27-23.27h-0.23c-12.85 0-23.27 10.42-23.27 23.27s10.42 23.27 23.27 23.27"/>
          <path d="m302.55 209.47h0.23c12.85 0 23.27-10.42 23.27-23.27s-10.42-23.27-23.27-23.27h-0.23c-12.85 0-23.27 10.42-23.27 23.27-0.01 12.85 10.41 23.27 23.27 23.27"/>
          <path d="m256 46.56v23.27c38.63 0.01 73.4 15.59 98.74 40.9 25.31 25.34 40.89 60.1 40.9 98.74v23.27c0 6.13 2.48 12.12 6.82 16.46 4.33 4.33 10.33 6.82 16.46 6.82h23.27c12.84 0.02 23.25 10.43 23.27 23.27-0.02 12.84-10.43 23.25-23.27 23.27h-23.27c-6.13 0-12.12 2.48-16.46 6.82-4.33 4.33-6.82 10.33-6.82 16.46v69.82c0 4.54 1.39 9.13 3.91 12.91l22.42 33.64h-189.34c-62.55 0.01-113.95-49.48-116.28-112l-23.26 0.87h23.27v-5.26c0-6.13-2.48-12.12-6.82-16.46-4.33-4.33-10.33-6.82-16.46-6.82h-23.26c-12.84-0.02-23.25-10.43-23.27-23.27 0.02-12.84 10.43-23.25 23.27-23.27h23.27c6.13 0 12.12-2.48 16.46-6.82 4.33-4.33 6.82-10.33 6.82-16.46v-23.27c0.01-38.63 15.59-73.4 40.9-98.74 25.34-25.31 60.1-40.89 98.74-40.9v-23.28h-23.27v0.02c0 6.13 2.48 12.12 6.82 16.46 4.33 4.33 10.33 6.82 16.46 6.82v-23.27h23.27v-0.02c0-6.13-2.48-12.12-6.82-16.46-4.33-4.33-10.33-6.82-16.46-6.82-102.84 0.02-186.18 83.35-186.19 186.18-38.57 0.02-69.8 31.25-69.82 69.82 0.02 38.57 31.25 69.8 69.82 69.82h23.27v-23.27h-23.27v5.26l0.02 0.87c3.3 87.55 75.2 156.79 162.79 156.8h0.12-0.02 232.73c8.61 0 16.46-4.7 20.52-12.29s3.62-16.72-1.15-23.89l-42.64-63.96v-39.5c38.57-0.02 69.8-31.25 69.82-69.82-0.02-38.57-31.25-69.8-69.82-69.82-0.02-102.83-83.36-186.16-186.19-186.18v23.28h23.27-23.27z"/>
          <path d="m232.73 302.56v23.27h46.55c6.13 0 12.12-2.48 16.46-6.82 4.33-4.33 6.82-10.33 6.82-16.46-0.02-25.72-20.83-46.53-46.55-46.55-25.72 0.02-46.53 20.83-46.55 46.55 0 6.13 2.48 12.12 6.82 16.46 4.33 4.33 10.33 6.82 16.46 6.82v-23.27h46.53v-23.27h-46.55v23.27h23.28-23.27z"/>
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
