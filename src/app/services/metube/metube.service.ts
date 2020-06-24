import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MetubeService {
  playlist = [
    { id: 'G4cJ4wviwS8', song: 'Tobias Rauscher - Still Awake (Original)' },
    { id: '3Ao2bGG3Qno', song: 'The Last of Us Part 2 TV Spot Soundtrack - True Faith by Lotte Kestner' },
    { id: 'KA1O3Ce46Bc', song: 'MAN WITH A MISSION 『FLY AGAIN 2019』' },
    { id: 'A67ZkAd1wmI', song: 'Caramella Girls - Caramelldansen (Official English Version)' },
    { id: 'WWB01IuMvzA', song: 'God knows... "The Melancholy of Haruhi Suzumiya" 【涼宮ハルヒの憂鬱】Kadokawa公認MAD【ﾍﾞｰｽ 演奏】' }
  ];
  constructor() { }

  find(id: string) {
    return this.playlist.find(item => item.id === id);
  }

}
