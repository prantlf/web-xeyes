declare type Offset = {
  x: number;
  y: number;
};
export declare type Position = 'center' | 'top' | 'bottom' | 'left' | 'right' | 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft' | number | Offset;
export declare type Radius = 'natural' | 'circular';
declare type Options = {
  distance?: number;
  reset?: boolean;
  radius?: Radius;
  position?: Position;
  delay?: number;
  trigger?: Window | HTMLElement;
  onReset?: () => void;
};
declare class Iris {
  el: HTMLElement;
  width: number;
  height: number;
  offset: Offset;
  constructor(el: any);
  resetOffset(): void;
  setOffset({ x, y }: Offset): void;
}
export declare class Eye {
  el: HTMLElement;
  width: number;
  height: number;
  distance: number;
  position: Offset;
  iris: Iris;
  mousemove: (MouseEvent: any) => void;
  mouseenter: (MouseEvent: any) => void;
  mouseleave: (MouseEvent: any) => void;
  options: Options;
  constructor(el: HTMLElement, irisEl: HTMLElement);
  follow(mouse: Offset): void;
  setPosition(position: Position): void;
}
export declare function attachEye(irisEl: HTMLElement, options?: Options): Eye;
export declare function detachEye(eye: Eye): void;
export declare function startFollowing(eye: Eye): void;
export declare function stopFollowing(eye: Eye): void;
export {};
