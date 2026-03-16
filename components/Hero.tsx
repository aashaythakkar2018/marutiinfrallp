"use client";
import Script from "next/script";

export default function Hero() {
    return (
        <section className="relative w-full aspect-video flex items-center justify-center overflow-hidden bg-white mt-[100px] lg:mt-0">
            {/* Wistia Scripts */}
            <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
            <Script src="https://fast.wistia.com/embed/4fqmrwcb4d.js" type="module" strategy="lazyOnload" />

            {/* Background Video Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-black">
                {/* 
                  We use an absolute viewport-filling container.
                  The Wistia player is styled via CSS to behave like object-fit: cover.
                */}
                <div
                    className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center overflow-hidden"
                >
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        wistia-player[media-id='4fqmrwcb4d']:not(:defined) { 
                            background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/4fqmrwcb4d/swatch'); 
                            display: block; 
                            filter: blur(5px); 
                            height: 100%;
                            width: 100%;
                            object-fit: contain;
                        }
                        wistia-player[media-id='4fqmrwcb4d'] {
                            width: 100% !important;
                            height: 100% !important;
                            object-fit: contain !important;
                        }
                        /* Attempt to position the iframe correctly inside shadow DOM if possible */
                        wistia-player {
                            --wistia-player-control-bar-display: none;
                        }
                    `}} />

                    {/* @ts-ignore - Custom Element */}
                    <wistia-player
                        media-id="4fqmrwcb4d"
                        autoPlay="true"
                        muted="true"
                        playbar="false"
                        playButton="false"
                        controlsVisibleOnLoad="false"
                        fullscreenButton="false"
                        playbackRateControl="false"
                        settingsControl="false"
                        volumeControl="false"
                        endVideoBehavior="loop"
                        videoFoam="false"
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    ></wistia-player>
                </div>
                {/* Removed overlay gradient to allow original video colors */}
            </div>

            {/* Content Layer */}
            {/* Content removed */}

        </section>
    )
}
