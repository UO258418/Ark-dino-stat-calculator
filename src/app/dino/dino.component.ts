import { Component, OnInit } from '@angular/core';
import { Dino } from '../interfaces/dino';

@Component({
  selector: 'app-dino',
  templateUrl: './dino.component.html',
  styleUrls: ['./dino.component.css']
})
export class DinoComponent implements OnInit {

  dino: Dino = {
    name: 'Pteranodon',
    level: 100,
    baseHealth: 210,
    baseEnergy: 150,
    baseOxygen: 150,
    baseFood: 1200,
    baseWeight: 120,
    baseDamage: 100,
    baseSpeed: 100,
    baseTorpidity: 120
  };

  constructor() { }

  ngOnInit() {
  }

}
