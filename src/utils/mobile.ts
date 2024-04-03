
export function getDevice(userAgent: string): string {
  return /(Android|iPhone|iPod|iOS|SymbianOS|Windows Phone)/gi.test(userAgent)
    ? "mobile"
    : /iPad/gi.test(userAgent)
    ? "ipad"
    : "pc";
}


export function screenMaxIs(width: number): boolean {
  return window.screen.width <= width;
}
