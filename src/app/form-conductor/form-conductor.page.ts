import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-form-conductor',
  templateUrl: './form-conductor.page.html',
  styleUrls: ['./form-conductor.page.scss'],
})
export class FormConductorPage implements OnInit {
  private animation!:Animation;
  constructor(private aCtrl:AnimationController) { }

  ngOnInit() {
  }
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
