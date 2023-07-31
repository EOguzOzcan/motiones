import Link from 'next/link';

import { NavSection } from '@/layout/NavSection';
import { VideoSection } from '@/layout/VideoSection';

import { Background } from '../background/Background';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const VideoBackground = () => {
  return (
    <video autoPlay loop muted className="h-[700px] w-full object-cover ">
      <source src="/video.mp4" type="video/mp4" />
    </video>
  );
};

const Hero = () => {
  return (
    <Background color="bg-gray-100">
      <VideoSection>
        <VideoBackground />

        <NavSection yPadding="py-6">
          <NavbarTwoColumns logo={<Logo xl />}>
            <li>
              <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
                GitHub
              </Link>
            </li>
            <li>
              <Link href="/">Sign in</Link>
            </li>
          </NavbarTwoColumns>
        </NavSection>
      </VideoSection>
    </Background>
  );
};

export { Hero };
