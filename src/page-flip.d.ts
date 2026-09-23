declare module 'page-flip' {
  export class PageFlip {
    constructor(element: HTMLElement, setting: Record<string, any>);
    loadFromHTML(items: NodeListOf<HTMLElement> | HTMLElement[]): void;
    destroy(): void;
    flipNext(corner?: any): void;
    flipPrev(corner?: any): void;
    flip(page: number, corner?: any): void;
    turnToPage(page: number): void;
    turnToNextPage(): void;
    turnToPrevPage(): void;
    getPageCount(): number;
    getCurrentPageIndex(): number;
    on(event: string, callback: (e: any) => void): void;
    off(event: string, callback: (e: any) => void): void;
  }
}
