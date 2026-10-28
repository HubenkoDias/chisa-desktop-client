interface Window {
  api?: {
    setIgnoreMouseEvents: (ignore: boolean) => void
    showContextMenu?: () => void
    onModeChanged: (callback: (mode: string) => void) => void
    onCursorPosition?: (
      callback: (pos: { x: number; y: number; width: number; height: number }) => void,
    ) => () => void
  }
}