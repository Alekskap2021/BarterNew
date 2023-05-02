import useMatchMedia from "use-match-media-hook";

export const useMedia = () => {
  const queries = ["(max-width: 768px)", "(max-width: 1024px)"];
  const [isMobile, isTablet] = useMatchMedia(queries);

  return { isMobile, isTablet };
};
