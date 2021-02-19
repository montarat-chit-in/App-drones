import { AnimationController, Animation } from '@ionic/angular';

const animCtrl = new AnimationController();

export const getIonPageElement = (element: HTMLElement) => {
  if (element.classList.contains('ion-page')) {
    return element;
  }

  const ionPage = element.querySelector(
    ':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs'
  );
  if (ionPage) {
    return ionPage;
  }
  // idk, return the original element so at least something animates and we don't have a null pointer
  return element;
};

export const navAnimation = (_: HTMLElement, opts: any): Animation => {
  const backDirection = opts.direction === 'back';
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;

  const enteringPageEl = getIonPageElement(enteringEl);

  const rootTransition = animCtrl.create();

  const enterTransition = animCtrl.create();
  const leavingTransition = animCtrl.create();

  leavingTransition.addElement(getIonPageElement(leavingEl)).duration(250);

  enterTransition
    .addElement(enteringPageEl)
    .duration(250)
    .fill('both')
    .beforeRemoveClass('ion-page-invisible');

  if (!backDirection) {
    enterTransition
      .keyframes([
        { offset: 0, transform: 'translate(100%)' },
        { offset: 1, transform: 'translate(0)' },
      ])
      .afterClearStyles(['border']);

    leavingTransition.keyframes([
      { offset: 0, opacity: 1 },
      { offset: 1, opacity: 0.1 },
    ]);
  } else {
    enterTransition.keyframes([
      { offset: 0, opacity: 0.1 },
      { offset: 1, opacity: 1 },
    ]);

    leavingTransition
      .keyframes([
        { offset: 0, transform: 'translate(0)' },
        { offset: 1, transform: 'translate(100%)' },
      ])
      .afterClearStyles(['border']);
  }

  rootTransition.addAnimation([enterTransition, leavingTransition]);

  return rootTransition;
};
