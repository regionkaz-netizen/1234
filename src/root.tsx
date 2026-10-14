import React from 'react';
import {Composition} from 'remotion';
import {NewYearReel} from './new-year-reel';
export const Root: React.FC = () => <Composition id="NewYearReel" component={NewYearReel} durationInFrames={450} fps={30} width={1080} height={1920}/>;
