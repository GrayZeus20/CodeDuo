/* CodeDuo — TopicIcon: Ikon vektor resmi (SVG) untuk kurikulum teknologi.
 * Bebas dependensi eksternal, tajam di semua resolusi, 100% offline-ready.
 */
'use strict';

export default function TopicIcon({ id, className = '', size = 36 }) {
  const s = size;

  switch (id) {
    case 'html':
      /* Official HTML5 Shield Logo */
      return (
        <svg className={`topic-svg topic-svg--html ${className}`} width={s} height={s} viewBox="0 0 48 48" fill="none" aria-label="HTML5 Icon">
          <path d="M7 4L11 41.5L24 45L37 41.5L41 4H7Z" fill="#E44D26" />
          <path d="M24 7.5V41.8L34.3 39L37.7 7.5H24Z" fill="#F16529" />
          <path d="M24 15.5H16.2L16.8 22H24V15.5ZM24 28.5V28.4L17.4 28.4L17.8 33.2L24 34.9V28.5Z" fill="#EBEBEB" />
          <path d="M24 15.5V22H31.2L30.6 28.4L24 28.5V34.9L30.2 33.2L31.8 15.5H24Z" fill="#FFFFFF" />
        </svg>
      );

    case 'css':
      /* Official CSS3 Shield Logo */
      return (
        <svg className={`topic-svg topic-svg--css ${className}`} width={s} height={s} viewBox="0 0 48 48" fill="none" aria-label="CSS3 Icon">
          <path d="M7 4L11 41.5L24 45L37 41.5L41 4H7Z" fill="#1572B6" />
          <path d="M24 7.5V41.8L34.3 39L37.7 7.5H24Z" fill="#33A9DC" />
          <path d="M24 15.5H15.4L16 22H24V15.5ZM24 28.5H19.7L20.1 33.2L24 34.9V28.5Z" fill="#EBEBEB" />
          <path d="M24 15.5V22H31.2L30.8 26.2H24V32.7L28.2 31.5L28.5 28.5H32.8L32.2 35.2L24 37.5V37.4L17.8 35.2L17.3 29.5H21.6L21.8 31.7L24 32.3V28.5H31.5L32 22H24V15.5Z" fill="#FFFFFF" />
        </svg>
      );

    case 'js':
      /* Official JavaScript Badge Logo */
      return (
        <svg className={`topic-svg topic-svg--js ${className}`} width={s} height={s} viewBox="0 0 48 48" fill="none" aria-label="JavaScript Icon">
          <rect width="48" height="48" rx="8" fill="#F7DF1E" />
          <path d="M22 17V33C22 37 19.5 39 16 39C13 39 11 37.5 10 35.5L13.8 33.2C14.4 34.2 15.1 35 16 35C17.2 35 18 34.2 18 32.5V17H22Z" fill="#000000" />
          <path d="M38 17.5V21.5C35 21.5 33 22.5 33 24.5C33 26.5 34.5 27.5 37.5 28.5C41.5 30 43 32 43 35C43 39 39.5 41 35.5 41C31 41 28.5 38.5 27.5 36L31.5 33.5C32.2 35 33.8 36.8 35.5 36.8C37.2 36.8 38.5 36 38.5 34.8C38.5 33.2 37 32.5 34 31.2C30 29.5 28.5 27.5 28.5 24.5C28.5 20.8 31.5 17.5 36 17.5H38Z" fill="#000000" />
        </svg>
      );

    case 'ts':
      /* Official TypeScript Badge Logo */
      return (
        <svg className={`topic-svg topic-svg--ts ${className}`} width={s} height={s} viewBox="0 0 48 48" fill="none" aria-label="TypeScript Icon">
          <rect width="48" height="48" rx="8" fill="#3178C6" />
          <path d="M12 21H24V25H20V37H16V25H12V21Z" fill="#FFFFFF" />
          <path d="M37 21V24.5C34.5 24.5 33 25.2 33 26.8C33 28.2 34.2 29 36.5 29.8C39.8 31 41 32.5 41 34.8C41 37.8 38.2 39.5 35 39.5C31.5 39.5 29.2 37.5 28.5 35.5L32 33.5C32.5 34.8 33.8 36 35 36C36.2 36 37.2 35.5 37.2 34.5C37.2 33.2 36 32.6 33.5 31.6C30.5 30.2 29.2 28.8 29.2 26.5C29.2 23.5 31.8 21 35.5 21H37Z" fill="#FFFFFF" />
        </svg>
      );

    case 'sql':
      /* SQL Database Cylinder Disks with Query Bracket */
      return (
        <svg className={`topic-svg topic-svg--sql ${className}`} width={s} height={s} viewBox="0 0 48 48" fill="none" aria-label="SQL Icon">
          <rect width="48" height="48" rx="8" fill="#1E3A5F" />
          {/* Database disks */}
          <ellipse cx="24" cy="14" rx="15" ry="5.5" fill="#3B82F6" />
          <ellipse cx="24" cy="13" rx="14" ry="4.5" fill="#60A5FA" />
          <path d="M9 14V22C9 25 15.7 27.5 24 27.5C32.3 27.5 39 25 39 22V14" stroke="#2563EB" strokeWidth="2" fill="none" />
          <path d="M9 22V30C9 33 15.7 35.5 24 35.5C32.3 35.5 39 33 39 30V22" stroke="#2563EB" strokeWidth="2" fill="none" />
          <path d="M9 30V38C9 41 15.7 43.5 24 43.5C32.3 43.5 39 41 39 38V30" stroke="#1D4ED8" strokeWidth="2" fill="none" />
          {/* SQL badge overlay */}
          <rect x="13" y="21" width="22" height="13" rx="3.5" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
          <text x="24" y="30.5" fill="#38BDF8" fontSize="8.5" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.5">SQL</text>
        </svg>
      );

    case 'db':
      /* Relational Database Tables */
      return (
        <svg className={`topic-svg topic-svg--db ${className}`} width={s} height={s} viewBox="0 0 48 48" fill="none" aria-label="Database Icon">
          <rect width="48" height="48" rx="8" fill="#0D5C75" />
          {/* Main DB Cylinder */}
          <ellipse cx="24" cy="11" rx="14" ry="5" fill="#06B6D4" />
          <path d="M10 11V21C10 23.8 16.3 26 24 26C31.7 26 38 23.8 38 21V11" fill="#0891B2" />
          <ellipse cx="24" cy="21" rx="14" ry="5" fill="#06B6D4" opacity="0.6" />
          <path d="M10 21V31C10 33.8 16.3 36 24 36C31.7 36 38 33.8 38 31V21" fill="#0891B2" />
          <ellipse cx="24" cy="31" rx="14" ry="5" fill="#06B6D4" opacity="0.6" />
          <path d="M10 31V39C10 41.8 16.3 44 24 44C31.7 44 38 41.8 38 39V31" fill="#0E7490" />
          <ellipse cx="24" cy="39" rx="14" ry="5" fill="#22D3EE" opacity="0.8" />
          {/* Center LED glow disk */}
          <circle cx="24" cy="21" r="2.5" fill="#FFFFFF" />
          <circle cx="24" cy="31" r="2.5" fill="#FFFFFF" />
        </svg>
      );

    case 'ds':
      /* Data Structure: Binary Tree & Linked Nodes */
      return (
        <svg className={`topic-svg topic-svg--ds ${className}`} width={s} height={s} viewBox="0 0 48 48" fill="none" aria-label="Data Structure Icon">
          <rect width="48" height="48" rx="8" fill="#581C87" />
          {/* Connection Lines */}
          <line x1="24" y1="14" x2="14" y2="26" stroke="#C084FC" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="24" y1="14" x2="34" y2="26" stroke="#C084FC" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="14" y1="26" x2="10" y2="38" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
          <line x1="14" y1="26" x2="20" y2="38" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
          <line x1="34" y1="26" x2="38" y2="38" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
          {/* Nodes */}
          <circle cx="24" cy="14" r="6" fill="#A855F7" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="14" cy="26" r="5" fill="#9333EA" stroke="#FFFFFF" strokeWidth="1.8" />
          <circle cx="34" cy="26" r="5" fill="#9333EA" stroke="#FFFFFF" strokeWidth="1.8" />
          <circle cx="10" cy="38" r="4" fill="#7E22CE" stroke="#E9D5FF" strokeWidth="1.5" />
          <circle cx="20" cy="38" r="4" fill="#7E22CE" stroke="#E9D5FF" strokeWidth="1.5" />
          <circle cx="38" cy="38" r="4" fill="#7E22CE" stroke="#E9D5FF" strokeWidth="1.5" />
        </svg>
      );

    case 'api':
      /* API Interface & Cloud Endpoints */
      return (
        <svg className={`topic-svg topic-svg--api ${className}`} width={s} height={s} viewBox="0 0 48 48" fill="none" aria-label="API Icon">
          <rect width="48" height="48" rx="8" fill="#BE123C" />
          {/* Center API Hexagon */}
          <path d="M24 8L37 15.5V30.5L24 38L11 30.5V15.5L24 8Z" fill="#F43F5E" stroke="#FECDD3" strokeWidth="2" />
          {/* Connectors */}
          <circle cx="24" cy="8" r="3" fill="#FFFFFF" />
          <circle cx="37" cy="15.5" r="3" fill="#FFFFFF" />
          <circle cx="37" cy="30.5" r="3" fill="#FFFFFF" />
          <circle cx="24" cy="38" r="3" fill="#FFFFFF" />
          <circle cx="11" cy="30.5" r="3" fill="#FFFFFF" />
          <circle cx="11" cy="15.5" r="3" fill="#FFFFFF" />
          {/* API Text */}
          <text x="24" y="26.5" fill="#FFFFFF" fontSize="10.5" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.5">API</text>
        </svg>
      );

    case 'rest':
      /* REST API: Bidirectional HTTP arrows & endpoints */
      return (
        <svg className={`topic-svg topic-svg--rest ${className}`} width={s} height={s} viewBox="0 0 48 48" fill="none" aria-label="REST API Icon">
          <rect width="48" height="48" rx="8" fill="#0F766E" />
          {/* Circular arrows route */}
          <path d="M14 18H31L27 14M34 30H17L21 34" stroke="#5EEAD4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="13" cy="18" r="4" fill="#14B8A6" stroke="#FFFFFF" strokeWidth="1.5" />
          <circle cx="35" cy="30" r="4" fill="#14B8A6" stroke="#FFFFFF" strokeWidth="1.5" />
          {/* REST Badge */}
          <rect x="15" y="21" width="18" height="9" rx="3" fill="#115E59" stroke="#99F6E4" strokeWidth="1.2" />
          <text x="24" y="27.5" fill="#CCFBF1" fontSize="6.5" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">REST</text>
        </svg>
      );

    case 'web':
      /* Modern Web Architecture & Building Blocks */
      return (
        <svg className={`topic-svg topic-svg--web ${className}`} width={s} height={s} viewBox="0 0 48 48" fill="none" aria-label="Web Blocks Icon">
          <rect width="48" height="48" rx="8" fill="#0369A1" />
          {/* Browser window */}
          <rect x="7" y="8" width="34" height="32" rx="4" fill="#0C4A6E" stroke="#38BDF8" strokeWidth="1.5" />
          {/* Window header */}
          <rect x="7" y="8" width="34" height="8" rx="4" fill="#0284C7" />
          <circle cx="11.5" cy="12" r="1.5" fill="#EF4444" />
          <circle cx="15.5" cy="12" r="1.5" fill="#FBBF24" />
          <circle cx="19.5" cy="12" r="1.5" fill="#10B981" />
          {/* Modular layout blocks */}
          <rect x="10" y="19" width="8" height="18" rx="2" fill="#38BDF8" opacity="0.85" />
          <rect x="21" y="19" width="17" height="8" rx="2" fill="#7DD3FC" />
          <rect x="21" y="29" width="8" height="8" rx="2" fill="#BAE6FD" />
          <rect x="30" y="29" width="8" height="8" rx="2" fill="#E0F2FE" />
        </svg>
      );

    default:
      return <span className={`topic-icon-fallback ${className}`}>{id}</span>;
  }
}
