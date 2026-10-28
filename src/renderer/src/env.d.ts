// Modified by HubenkoDias for Chisa (2026). Changes are marked with "Chisa:". See README.md.
interface Window {
  api?: {
    setIgnoreMouseEvents: (ignore: boolean) => void
    showContextMenu?: () => void
    onModeChanged: (callback: (mode: string) => void) => void
    onCursorPosition?: (
      callback: (pos: { x: number; y: number; width: number; height: number }) => void,
    ) => () => void
    takeScreenshot?: () => Promise<string | null>
  }
}