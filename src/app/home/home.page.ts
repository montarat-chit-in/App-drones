import { Component, TemplateRef, ViewChild } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { BottomSheetService } from "../@common/bottom-sheet/service/bottom-sheet.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  @ViewChild("brandConfirmation")
  brandConfirmation: TemplateRef<HTMLDivElement>;
  constructor(
    private modalCtrl: ModalController,
    private readonly bsService: BottomSheetService,
    public modalController: ModalController
  ) {}

  // อันนี้ใช้ทำอะไร?
  // เปิด action sheet พี่
  presentBottomSheet() {
    this.bsService.show({
      content: this.brandConfirmation,
      height: 600,
    });
  }

  closeBottomSheet() {
    this.bsService.close();
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
