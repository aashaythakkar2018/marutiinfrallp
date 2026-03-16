import * as React from 'react';

declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                'media-id'?: string;
                autoPlay?: string;
                muted?: string;
                playbar?: string;
                playButton?: string;
                controlsVisibleOnLoad?: string;
                fullscreenButton?: string;
                playbackRateControl?: string;
                settingsControl?: string;
                volumeControl?: string;
                endVideoBehavior?: string;
                videoFoam?: string;
            };
        }
    }
}
