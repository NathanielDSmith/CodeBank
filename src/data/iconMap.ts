import { IconType } from 'react-icons';
import {
  SiJavascript,
  SiPython,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiGo,
  SiJava,
  SiCsharp,
  SiRubyonrails,
  SiDocker,
  SiGit,
  SiFlutter,
  SiHtml5,
  SiCss3,
  SiPostgresql,
} from 'react-icons/si';
import { BsTextLeft, BsListOl, BsBraces, BsArrowRepeat } from 'react-icons/bs';

export interface IconEntry {
  icon: IconType;
  /** Brand colour — used so each logo renders in its official colour */
  color: string;
}

/**
 * Maps a topic route to its brand icon + colour.
 * CodeCard falls back to the emoji string for any route not listed here.
 */
export const TOPIC_ICON_MAP: Record<string, IconEntry> = {
  '/javascript-basics':   { icon: SiJavascript,   color: '#F7DF1E' },
  '/python':              { icon: SiPython,        color: '#3776AB' },
  '/typescript':          { icon: SiTypescript,    color: '#3178C6' },
  '/react-common-tasks':  { icon: SiReact,         color: '#61DAFB' },
  '/vue':                 { icon: SiVuedotjs,      color: '#4FC08D' },
  '/go':                  { icon: SiGo,            color: '#00ADD8' },
  '/java':                { icon: SiJava,          color: '#ED8B00' },
  '/csharp':              { icon: SiCsharp,        color: '#9B4F96' },
  '/rails':               { icon: SiRubyonrails,   color: '#CC0000' },
  '/docker-basics':       { icon: SiDocker,        color: '#2496ED' },
  '/git-daily-commands':  { icon: SiGit,           color: '#F05032' },
  '/flutter':             { icon: SiFlutter,       color: '#54C5F8' },
  '/html-structure':      { icon: SiHtml5,         color: '#E34F26' },
  '/css-layout-tricks':   { icon: SiCss3,          color: '#264de4' },
  '/sql-basics':          { icon: SiPostgresql,    color: '#4169E1' },

  // Generic concepts — green to stay on-theme
  '/string-manipulation': { icon: BsTextLeft,      color: '#4ade80' },
  '/array-operations':    { icon: BsListOl,        color: '#4ade80' },
  '/object-manipulation': { icon: BsBraces,        color: '#4ade80' },
  '/async-programming':   { icon: BsArrowRepeat,   color: '#4ade80' },
};
