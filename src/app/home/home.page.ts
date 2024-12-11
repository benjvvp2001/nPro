import { Component } from '@angular/core';
import { NavController } from "@ionic/angular";
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private animation!:Animation;
  constructor(private nCtrl:NavController, private aCtrl:AnimationController) {}

  ngAfterViewInit(){
    this.animation = this.aCtrl.create()
    .addElement(document.querySelector('.square') as HTMLElement)
    .iterations(Infinity)
    .duration(7000)
    .keyframes([
      { offset: 0, transform: 'translateX(1px) rotate(0deg)', opacity: '1' },
      { offset: 0.5, transform: 'translateX(300px) rotate(180deg)', opacity: '1' },
      { offset: 0.8, transform: 'translateX(600px) rotate(360deg)', opacity: '0.5 ' }
    ]);
    this.animation.play();
  }

}
