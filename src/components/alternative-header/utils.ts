export const getUnderlineLeftPosition = (
  elements: HTMLDivElement[],
  activeIndex: number,
): number =>
  elements.slice(0, activeIndex).reduce((acc, tabElement) => {
    if (tabElement) {
      return acc + tabElement.offsetWidth;
    }

    return acc;
  }, 0);

export const getUnderlineWidth = (
  elements: HTMLDivElement[],
  activeIndex: number,
): number => {
  const activeTabNode = elements[activeIndex];

  return activeTabNode?.offsetWidth || 0;
};
