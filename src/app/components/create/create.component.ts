import { Component, OnInit } from '@angular/core';
//import { PollService } from './poll.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  message = "Intrebarea a fost adresata cu succes!"
  confirm(){
    alert(this.message);
  }
  constructor(){}//private pollService: PollService) {}

  ngOnInit(): void {
  }

}
