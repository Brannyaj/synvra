import Link from 'next/link';
import { trackGetStarted } from '@/utils/analytics';

interface GetStartedButtonProps {
  className?: string;
  source: string;
  fullWidth?: boolean;
}

export default function GetStartedButton({ className = '', source, fullWidth = false }: GetStartedButtonProps) {
  const handleClick = () => {
    trackGetStarted(source);
  };

  return (
    <Link href="/get-started">
      <button 
        onClick={handleClick}
        className={`button-primary ${fullWidth ? 'w-full' : ''} ${className}`}
      >
        Get Started
      </button>
    </Link>
  );
} 