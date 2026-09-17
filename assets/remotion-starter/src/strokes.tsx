import {Easing, interpolate, useCurrentFrame} from 'remotion';

const drawEase = Easing.bezier(0.2, 0.72, 0.22, 1);

export type StrokeProps = {
  d: string;
  start: number;
  end: number;
  color?: string;
  width?: number;
};

export const Stroke = ({
  d,
  start,
  end,
  color = '#f7f3e9',
  width = 7,
}: StrokeProps) => {
  const frame = useCurrentFrame();
  if (frame < start) return null;

  return (
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      pathLength={100}
      strokeDasharray={100}
      strokeDashoffset={interpolate(frame, [start, end], [100, 0], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: drawEase,
      })}
    />
  );
};

export const RoughArrow = ({
  shaft,
  head,
  start,
  end,
  color,
  width = 7,
}: {
  shaft: string;
  head: string;
  start: number;
  end: number;
  color?: string;
  width?: number;
}) => {
  const headDuration = Math.max(4, Math.round((end - start) * 0.2));
  return (
    <>
      <Stroke d={shaft} start={start} end={end - headDuration} color={color} width={width} />
      <Stroke d={head} start={end - headDuration} end={end} color={color} width={width * 0.92} />
    </>
  );
};

export const RoughUnderline = ({
  paths,
  start,
  end,
  color,
  width = 5,
}: {
  paths: string[];
  start: number;
  end: number;
  color?: string;
  width?: number;
}) => (
  <>
    {paths.map((d, index) => {
      const segment = (end - start) / paths.length;
      return (
        <Stroke
          key={d}
          d={d}
          start={start + index * segment}
          end={start + (index + 1) * segment}
          color={color}
          width={width - index * 0.35}
        />
      );
    })}
  </>
);

export const RoughCircle = ({
  paths,
  start,
  end,
  color,
  width = 6,
}: {
  paths: string[];
  start: number;
  end: number;
  color?: string;
  width?: number;
}) => (
  <RoughUnderline paths={paths} start={start} end={end} color={color} width={width} />
);
