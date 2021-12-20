export const scrollNext = (id) => {
  const wrapper = document.querySelector(`.slider-${id}`);
  wrapper.scrollLeft += 1400;
};

export const scrollBack = (id) => {
  const wrapper = document.querySelector(`.slider-${id}`);
  wrapper.scrollLeft -= 1400;
};
