export const fadeIn = (element: HTMLElement, delay: number = 0, duration: number = 500) => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  
  setTimeout(() => {
    element.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  }, delay);
};

export const fadeInElements = (selector: string, staggerDelay: number = 100) => {
  const elements = document.querySelectorAll<HTMLElement>(selector);
  
  elements.forEach((element, index) => {
    fadeIn(element, index * staggerDelay);
  });
};

export const initializeScrollAnimations = () => {
  const animatedElements = document.querySelectorAll<HTMLElement>('[data-animate]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;
        const delay = Number(element.dataset.delay || 0);
        
        fadeIn(element, delay);
        observer.unobserve(element);
      }
    });
  }, { threshold: 0.1 });
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
};