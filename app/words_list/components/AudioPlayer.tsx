"use client";
import React from "react";

function AudioPlayer() {
  return (
    <div>
      <audio controls>
        <source
          src="https://ltvavdcgdrfqhlfpgkks.supabase.co/storage/v1/object/public/luga/audio.mp3?t=2023-11-06T06:18:10.366Z"
          type="audio/mpeg"
        >
          <p className="text-sm text-foreground-light">
            Your browser does not support the audio element.
          </p>
        </source>
      </audio>
    </div>
  );
}

export default AudioPlayer;
