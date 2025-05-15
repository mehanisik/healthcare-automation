import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import LogoText from '@/public/textlogo.svg';
import Image from 'next/image';
import LightLogo from '@/public/logotextwhite.svg';
import { useTheme } from 'next-themes';



export function Logo () {
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
      {logo ? <Image src={logo} alt="GIRIT CONSULTING" width={100}  height={100} /> : null}
    </Link>
  );
}