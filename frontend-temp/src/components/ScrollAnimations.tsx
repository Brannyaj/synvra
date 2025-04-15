import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
  useEffect(() => {
    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1
          }
        }
      );
    });

    // Animate cards with fade
    const cards = document.querySelectorAll('.glass-effect');
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            end: 'top 40%',
            scrub: 1
          }
        }
      );
    });

    // Text reveal animation
    const textElements = document.querySelectorAll('.text-reveal');
    textElements.forEach((text) => {
      gsap.fromTo(
        text,
        {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: text,
            start: 'top 85%',
            end: 'top 15%',
            scrub: 1
          }
        }
      );
    });

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return null;
}
