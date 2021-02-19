import { AnimationController, Animation } from '@ionic/angular';
const animCtrl = new AnimationController();

export const modalEnterAnim = (baseEl: HTMLElement): Animation => {
  const wrapperAnim = animCtrl
    .create()
    .addElement(baseEl.querySelector('.modal-wrapper'))
    .fill('both')
    .keyframes([
      { offset: 0, transform: 'translate(100%)' },
      { offset: 1, transform: 'translate(0)' },
    ])
    .duration(350);

  return animCtrl.create().addElement(baseEl).addAnimation([wrapperAnim]);
};

export const modalLeaveAnim = (baseEl: HTMLElement): Animation => {
  return modalEnterAnim(baseEl).direction('reverse');
};
