import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { BottomSheetContainerComponent } from "./bottom-sheet/container/bottom-sheet-container.component";
import { BottomSheetService } from "./bottom-sheet/service/bottom-sheet.service";

import { ProductCoverImageRPipe } from "./pipes/product-image-cover.pipe";

const BASE_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  IonicModule,
];
const COMPONENTS = [BottomSheetContainerComponent];
const PROVIDERS = [BottomSheetService];
const PIPES = [ProductCoverImageRPipe];

@NgModule({
  imports: [...BASE_MODULES],
  declarations: [...COMPONENTS, ...PIPES],
  providers: [...PROVIDERS],
  exports: [...BASE_MODULES, ...COMPONENTS, ...PIPES],
})
export class AppCommonModule {}
