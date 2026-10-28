// Modified by HubenkoDias for Chisa (2026). Changes are marked with "Chisa:". See README.md.
import { useCallback } from 'react';
import { useWebSocket } from '@/context/websocket-context';
import { useMediaCapture } from './use-media-capture';

export function useTriggerSpeak() {
  const { sendMessage } = useWebSocket();
  const { captureAllMedia } = useMediaCapture();

  const sendTriggerSignal = useCallback(
    async (actualIdleTime: number) => {
      const images = await captureAllMedia();

      // Chisa: if no screen stream is running, take a one-shot screenshot so she
      // can comment on what is on the screen when she speaks up on her own.
      if (!images.some((img) => img.source === 'screen')) {
        try {
          const shot = await (window as any).api?.takeScreenshot?.();
          if (shot) {
            images.push({ source: 'screen', data: shot, mime_type: 'image/jpeg' });
          }
        } catch (err) {
          console.warn('Chisa: screenshot failed, speaking without it', err);
        }
      }

      sendMessage({
        type: "ai-speak-signal",
        idle_time: actualIdleTime,
        images,
      });
    },
    [sendMessage, captureAllMedia],
  );

  return {
    sendTriggerSignal,
  };
}