import {Composition} from 'remotion';
import {HumanHanddrawOverlay, HumanHanddrawPreview} from './scene';

export const Root = () => (
  <>
    <Composition
      id="HumanHanddrawOverlay"
      component={HumanHanddrawOverlay}
      durationInFrames={300}
      fps={30}
      width={1080}
      height={1920}
    />
    <Composition
      id="HumanHanddrawPreview"
      component={HumanHanddrawPreview}
      durationInFrames={300}
      fps={30}
      width={1080}
      height={1920}
    />
  </>
);
