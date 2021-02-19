import { TemplateRef } from '@angular/core';

export class BottomSheetConfig<T = any> {
  id?: number;
  content: string | TemplateRef<HTMLElement> | (new (...args: any[]) => T);
  data?: Partial<T>;
  customCss?: string;
  height?: number;
  canClose?: boolean;
  canBack?: boolean;
}
