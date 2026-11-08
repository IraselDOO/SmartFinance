interface WorkflowVisualProps {
  kind: number;
}

export default function WorkflowVisual({ kind }: WorkflowVisualProps) {
  const id = `workflow-${kind}`;
  return (
    <svg aria-hidden="true" viewBox="0 0 320 190" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${id}-paper`} x1="56" y1="30" x2="240" y2="176" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#F2F3F2" />
        </linearGradient>
        <filter id={`${id}-shadow`} x="10" y="6" width="300" height="190" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#07111A" floodOpacity=".12" />
        </filter>
      </defs>
      <ellipse cx="160" cy="166" rx="125" ry="13" fill="#07111A" fillOpacity=".06" />
      {kind === 0 && (
        <g filter={`url(#${id}-shadow)`}>
          <path d="M73 29h112l40 40v91H73z" fill={`url(#${id}-paper)`} stroke="#DDE1E1" />
          <path d="M185 29v40h40" stroke="#DDE1E1" />
          <rect x="96" y="45" width="52" height="10" fill="#F9A307" />
          <path d="M96 88h89M96 104h104M96 120h80" stroke="#AAB1B3" strokeWidth="4" strokeLinecap="square" />
          <path d="M96 143h56" stroke="#07111A" strokeWidth="4" strokeLinecap="square" />
          <rect x="170" y="112" width="75" height="45" fill="#FFF" stroke="#DDE1E1" />
          <rect x="170" y="112" width="75" height="8" fill="#F9A307" />
          <path d="M184 130h44M184 141h28" stroke="#AAB1B3" strokeWidth="3" strokeLinecap="square" />
        </g>
      )}
      {kind === 1 && (
        <g filter={`url(#${id}-shadow)`}>
          <rect x="51" y="35" width="217" height="126" fill="#07111A" />
          <rect x="62" y="47" width="195" height="101" fill="#FBFCFA" />
          <rect x="62" y="47" width="195" height="21" fill="#F9A307" />
          <path d="M62 68h195M62 96h195M62 122h195M111 47v101M169 47v101M215 47v101" stroke="#DDE1E1" />
          <path d="M76 58h20M125 58h26M180 58h18M226 58h18" stroke="#07111A" strokeWidth="3" strokeLinecap="square" />
          <path
            d="M77 83h23M127 82h28M180 82h24M226 82h17M77 109h23M127 108h28M180 108h24M226 108h17M77 135h23M127 134h28M180 134h24M226 134h17"
            stroke="#899396"
            strokeWidth="3"
            strokeLinecap="square"
          />
        </g>
      )}
      {kind === 2 && (
        <g filter={`url(#${id}-shadow)`}>
          <path d="M80 26h122l39 38v98H80z" fill={`url(#${id}-paper)`} stroke="#DDE1E1" />
          <path d="M202 26v39h39" stroke="#DDE1E1" />
          <rect x="104" y="45" width="60" height="10" fill="#07111A" />
          <path d="M104 84h104" stroke="#AAB1B3" strokeWidth="4" strokeLinecap="square" />
          <path d="M104 100h78M104 116h46" stroke="#AAB1B3" strokeWidth="4" strokeLinecap="square" />
          <rect x="158" y="106" width="79" height="52" fill="#F9A307" stroke="#07111A" strokeWidth="2" />
          <path d="m177 131 12 11 28-31" stroke="#07111A" strokeWidth="5" strokeLinecap="square" strokeLinejoin="miter" />
        </g>
      )}
    </svg>
  );
}
