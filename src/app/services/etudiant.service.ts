import { Injectable } from '@angular/core';
import { Etudiant } from '../universite/models/Etudiant';


@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  

  constructor() { }

  etudiants:any=[
    {
      nom:"manel",
      prenom:"ben mouloud",
      filiere:
      {
        code : "001",
        libelle :"Genie Logiciel",
        description :" de la programmation -- non je rigoles"
      },
      status:true
    },
    {
      nom:"Mariem",
      prenom:"Fekih",
      filiere:
      {
        code : "002",
        libelle :"RSS",
        description :" du réseau orienté objet Ahh!!!! n'importe qw"
      },
      status:false
    },
    {
      nom:"chehine",
      prenom:"ben salah",
      filiere :{
        code : "003",
        libelle :"cybersécurité",
        description :" vous autres on se verra bien dans peu de temps .."
      },
      status:true
    },
    {
      nom:"oumayma",
      prenom:"limeme",
      filiere :{
        code : "004",
        libelle :"IA",
        description :" rien à dire , je passes .."
      },
      status:false
    }
  
  ];

  

  ajouterEtudiant(etudiant:Etudiant):void{
  
    this.etudiants.push(

      etudiant
    )
  }


  afficherEtudiants(){

      return this.etudiants

  }
}
