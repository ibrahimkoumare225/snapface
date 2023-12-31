import { Component, OnInit,Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  constructor(private faceSnapsService:FaceSnapService,
    private router: Router
    ){}
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!:string;
  buttonText!:string;
  
  

  ngOnInit() {
      this.buttonText = 'Like!';
  }
  onSnap(){
    if(this.buttonText==='Like!'){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'DisLike';
      
    }else{
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Like!';
    }
  }
  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }

}


