import {AbsoluteFill} from 'remotion';
import {HandWord} from './handword';
import {RoughArrow, RoughCircle, RoughUnderline} from './strokes';

const base = '#f7f3e9';
const accent = '#e9bf55';

const Artwork = () => (
  <svg
    width="1080"
    height="1920"
    viewBox="0 0 1080 1920"
    aria-label="An idea turns into action, drawn by hand"
  >
    <HandWord value="idea" x={170} y={500} scale={1.72} start={0} end={54} seed={2} color={base} />

    <RoughUnderline
      paths={[
        'M 177 625 C 238 616 299 623 360 626 C 391 628 420 623 447 625',
        'M 184 638 C 244 631 301 637 357 639 C 391 642 418 635 441 637',
      ]}
      start={56}
      end={76}
      color={base}
      width={5.4}
    />

    <RoughArrow
      shaft="M 484 649 C 545 680 596 737 618 803 C 637 860 622 918 580 957"
      head="M 583 929 Q 581 948 580 957 Q 595 950 613 947"
      start={80}
      end={120}
      color={base}
      width={7.2}
    />

    <HandWord value="acción" x={379} y={1015} scale={1.45} start={125} end={205} seed={5} color={accent} />

    <RoughCircle
      paths={[
        'M 340 1015 C 419 960 680 963 754 1029 C 814 1082 777 1192 655 1216 C 526 1242 370 1206 336 1133 C 318 1094 322 1051 340 1015',
        'M 350 1007 C 447 974 681 978 760 1042 C 808 1081 777 1178 668 1208',
      ]}
      start={210}
      end={232}
      color={accent}
      width={5.8}
    />
  </svg>
);

export const HumanHanddrawOverlay = () => (
  <AbsoluteFill style={{backgroundColor: 'transparent'}}>
    <Artwork />
  </AbsoluteFill>
);

export const HumanHanddrawPreview = () => (
  <AbsoluteFill style={{backgroundColor: '#171b1d'}}>
    <Artwork />
  </AbsoluteFill>
);
