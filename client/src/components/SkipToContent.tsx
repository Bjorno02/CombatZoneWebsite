/**
 * SkipToContent - Accessibility component for keyboard navigation
 * 
 * Allows keyboard users to skip repetitive navigation and jump directly to main content.
 * Required for WCAG 2.1 Level A compliance (2.4.1 Bypass Blocks).
 * 
 * The link is visually hidden until focused, then appears at the top of the viewport.
 */
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="
        sr-only focus:not-sr-only
        focus:fixed focus:top-4 focus:left-4 focus:z-[100]
        focus:bg-primary focus:text-white
        focus:px-4 focus:py-2 focus:rounded
        focus:font-bold focus:uppercase focus:tracking-wider focus:text-sm
        focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary
        transition-all
      "
    >
      Skip to main content
    </a>
  );
}
