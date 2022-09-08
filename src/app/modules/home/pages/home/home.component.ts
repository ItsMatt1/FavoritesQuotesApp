import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    // animation triggers go here
  ]
})
export class HomeComponent implements OnInit {

  public Quotes: Array<[Personagem: string, Quote: number]> = [];

  public animationLyrics: string = '';

  public showLyrics: boolean = false;

  public image: string = '';

  constructor() { }

  public Clicked() {
    let quoteNumber = this.getRandomInt(1, 5)

    this.playAudio(quoteNumber);
    console.log(this.showLyrics)
    this.showLyrics = true;
  }

  public playAudio(quoteNumber: number) {
    let audio = new Audio();

    switch (quoteNumber) {
      case 1:
        this.Quotes[0] = ["Kayn", 1]
        this.animationLyrics = "The weak run. Stay and fight! Did such foolishness lead to your imprisonment?";
        audio.src = "../../../assets/sounds/kayn_foolishness.ogg";
        audio.load();
        audio.play();
        break
      case 2:
        this.image = '../../../assets/invoker.jpg'
        this.Quotes[1] = ["Invoker", 1]
        this.animationLyrics = "I am a beacon of knowledge blazing out across a black sea of ignorance.";
        audio.src = "../../../assets/sounds/invoker_beacon.ogg";
        audio.load();
        audio.play();
        break
      case 3:
        this.animationLyrics = "もう これ で... 終わって も いい...  だから... ありったけ を... 貴様 を 殺す... ピトー"
        break
      case 4:
        this.Quotes[3] = ["Gideon", 1]
        this.animationLyrics = "Queen Marika has high hopes for us. That we continue to struggle. Unto eternity."
        audio.src = "../../../assets/sounds/gideon_struggle.mp3";
        audio.load();
        audio.play();
        break
      case 5:
        this.Quotes[4] = ["Malenia", 1]
        this.animationLyrics = ""
    }
  }

  public getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  ngOnInit(): void {
  }

}
