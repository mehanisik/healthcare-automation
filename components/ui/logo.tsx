'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import LightLogo from '#/public/logotextwhite.svg';
import LogoText from '#/public/textlogo.svg';
import { useTheme } from 'next-themes';



type LogoProps = {
  width?: number;
  height?: number;
}

export function Logo ({width=100, height=100}: LogoProps) {
  const theme = useTheme();
  const [logo, setLogo] = useState<string>(LogoText);
  useEffect(()=>{
    if(theme.theme === 'dark'){
      setLogo(LightLogo);
    }else{
      setLogo(LogoText);
    }
  },[theme.theme])

	return (
    <Link href="/" aria-label="GIRIT CONSULTING - Home" className='flex gap-5 transition-all duration-300'>
      {logo ? <Image src={logo} alt="GIRIT CONSULTING" width={width}  height={height} /> : null}
    </Link>
  );
}