import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../classes/utilisateur';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
users:Utilisateur;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.users=new Utilisateur();
    this.users.grade="user";
  }
 adduser()
 {
let us=Object.assign({},this.users);
this.userService.create_NewUser(us);
alert("ajouté avec succés!");
window.location.replace("");


 }
}
