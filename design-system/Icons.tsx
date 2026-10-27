import * as React from "react";

/* PROVISÓRIOS: troque pelos SVGs oficiais de polvo e plataforma. */
type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

export const OctopusIcon = ({ size = 48, ...rest }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" aria-hidden="true" {...rest}>
    <path d="M10 22a14 14 0 0 1 28 0v4H10z" />
    <circle cx="19" cy="21" r="1.6" fill="currentColor" />
    <circle cx="29" cy="21" r="1.6" fill="currentColor" />
    <path d="M12 26c0 8-4 9-6 12M19 26c0 7-2 10-4 13M26 26v13M33 26c0 7 2 10 4 13M36 26c0 8 4 9 6 12" />
  </svg>
);

export const PlatformIcon = ({ size = 48, ...rest }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" aria-hidden="true" {...rest}>
    <path d="M6 14h36M10 14v8h28v-8M24 22v22M14 44l10-10 10 10M4 14h40" />
  </svg>
);
