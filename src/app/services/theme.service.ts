import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  renderer:Renderer2
  constructor(private rendererFac:RendererFactory2, @Inject(DOCUMENT) private doc:Document) {
      this.renderer = rendererFac.createRenderer(null,null)

   }

   enableDark(){
     this.renderer.addClass(this.doc.body,'dark-theme')
   }
   enableLight(){
     this.renderer.removeClass(this.doc.body,'dark-theme')
   }

   enableTafeTheme(){
     this.renderer.addClass(this.doc.body,'tafe-theme')
   }

   enableTmtlTheme(){
     this.renderer.addClass(this.doc.body,'tmtl-theme')
   }
}
