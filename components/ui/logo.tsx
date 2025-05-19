'use client';
import React from 'react';
import { useTheme } from 'next-themes';

interface LogoProps {
  type?: 'icon' | 'text';
  color?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
  forceColor?: boolean; // If true, will use the color prop regardless of theme
}

const IconPaths: React.FC<{ fillColor: string }> = ({ fillColor }) => (
  <>
    <path
      fill={fillColor}
      d="M186.01,69.06h52.26c0-5.44.04-10.88.04-16.32,0-19.92-4.03-33.69-12.08-41.31-8.06-7.62-23.22-11.43-45.48-11.43H57.56C35,0,19.77,3.89,11.86,11.65,3.95,19.41,0,33.84,0,54.93v122.39c0,21.24,3.95,35.71,11.86,43.4,7.91,7.69,23.14,11.53,45.7,11.53h123.19c1.73,0,3.41-.02,5.05-.07,19.79-.54,33.35-4.36,40.65-11.46,7.91-7.69,11.86-22.16,11.86-43.4v-79.98H97.47v39.55h88.33v51.64H54.05V41.53h131.75c-.23,0,.21,24.74.21,27.53Z"
    />
    <path
      fill={fillColor}
      d="M269.47,177.32c0,21.24,3.95,35.71,11.86,43.4,7.3,7.1,20.86,10.92,40.65,11.46v-95.29h88.33v-39.55h-140.84v79.98Z"
    />
    <polygon
      fill={fillColor}
      points="321.98 29.63 321.98 0 269.47 .27 269.47 69.18 410.31 69.18 410.31 29.63 321.98 29.63"
    />
  </>
);

const TextLogoPaths: React.FC<{ fillColor: string }> = ({ fillColor }) => (
  <>
    <path
      fill={fillColor}
      d="M186.01,69.06h52.26c0-5.44.04-10.88.04-16.32,0-19.92-4.03-33.69-12.08-41.31-8.06-7.62-23.22-11.43-45.48-11.43H57.56C35,0,19.77,3.89,11.86,11.65,3.95,19.41,0,33.84,0,54.93v122.39c0,21.24,3.95,35.71,11.86,43.4,7.91,7.69,23.14,11.53,45.7,11.53h123.19c1.73,0,3.41-.02,5.05-.07,19.79-.54,33.35-4.36,40.65-11.46,7.91-7.69,11.86-22.16,11.86-43.4v-79.98H97.47v39.55h88.33v51.64H54.05V41.53h131.75c-.23,0,.21,24.74.21,27.53Z"
    />
    <path
      fill={fillColor}
      d="M263.47,130.27v45.05c0,21.24,3.95,35.71,11.86,43.4,7.3,7.1,20.86,10.92,40.65,11.46V97.27h-52.51v33Z"
    />
    <rect fill={fillColor} x="263.47" y="41.27" width="52.51" height="28" />
    <path
      fill={fillColor}
      d="M507.47,130.27v45.05c0,21.24,3.95,35.71,11.86,43.4,7.3,7.1,20.86,10.92,40.65,11.46V97.27h-52.51v33Z"
    />
    <rect fill={fillColor} x="507.47" y="41.27" width="52.51" height="28" />
    <path
      fill={fillColor}
      d="M341.47,97.34v79.98c0,21.24,3.95,35.71,11.86,43.4,7.3,7.1,20.86,10.92,40.65,11.46v-95.29h88.33v-39.55h-140.84Z"
    />
    <path
      fill={fillColor}
      d="M637.98,94.34v-29.34l-52.51.27v109.05c0,21.24,3.95,35.71,11.86,43.4,7.3,7.1,20.86,10.92,40.65,11.46v-95h88.33v-39.84h-88.33Z"
    />
  </>
);

export const Logo: React.FC<LogoProps> = ({
  type = 'icon',
  color = '#63493f', 
  width,
  height,
  className,
  onClick,
  ariaLabel,
  forceColor = false,
}) => {
  const { theme } = useTheme();
  const isIcon = type === 'icon';
  const viewBox = isIcon ? '0 0 410.31 232.25' : '0 0 726.31 232.25';
  
  const defaultWidth = isIcon ? '40px' : '150px';
  const displayWidth = width ?? defaultWidth;
  const displayHeight = height ?? undefined;

  const defaultColors = {
    light: '#63493f',
    dark: '#ffffff',  
  };

  const fillColor = forceColor ? color : (theme === 'dark' ? defaultColors.dark : defaultColors.light);

  const defaultAriaLabel = isIcon ? 'Company Icon' : 'Company Logo with Text';
  const finalAriaLabel = ariaLabel || defaultAriaLabel;

  const style: React.CSSProperties = {
    cursor: onClick ? 'pointer' : 'default',
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={displayWidth}
      height={displayHeight}
      className={className}
      onClick={onClick}
      style={style}
      aria-label={finalAriaLabel}
      role="img"
    >
      {isIcon ? <IconPaths fillColor={fillColor} /> : <TextLogoPaths fillColor={fillColor} />}
    </svg>
  );
};