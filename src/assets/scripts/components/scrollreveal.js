import ScrollReveal from "scrollreveal";

export const scrollRevealInit = () => {
  const config = {
    origin: 'bottom',
    duration: 500,
    delay: 100,
    distance: '50px',
    viewFactor: 0.1,
    easing: 'ease',
    scale: 1,
    interval: 0,
  };

  const nodeList = document.querySelectorAll('.sr-item');
  ScrollReveal().reveal(nodeList, config);

  const configGroup = config;
  configGroup.interval = 200;

  const nodeListGroup = document.querySelectorAll('.sr-group > *');
  ScrollReveal().reveal(nodeListGroup, configGroup);
}
