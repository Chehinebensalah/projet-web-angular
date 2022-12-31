import { Injectable } from '@angular/core';
import { AnneeAcademique } from '../universite/models/AnneeAcademique';
import { Inscription } from '../universite/models/Inscription';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  debut :number=2022;
  fin :number=2023;
  annee : AnneeAcademique = new AnneeAcademique();
  listeAnnnes : AnneeAcademique []=[]



  annees : AnneeAcademique [] = [

    {
      code:"001",
      annee_debut:this.debut,
      annee_fin:this.fin
    }
   
  ];


  
  ajouter(){
    this.debut = this.debut ;
    this.fin = this.fin ;
    
    this.annee = {
      code:"001",
      annee_debut:this.debut,
      annee_fin:this.fin
    }
    this.annees.push(
      this.annee
    )
    console.log(this.annees,"11111111111")
    this.listeAnnnes = this.annees;

    console.log(this.listeAnnnes,"2222222222")  
  }

  addInscrit(inscription:Inscription){

    this.inscriptions.push(inscription)

  }



  inscriptions:any=[
    {
      etudiant:{
        nom:"chehine",
        prenom:"ben salah",
        filiere :{
          code : "003",
          libelle :"cybersécurité",
          description :" vous autres on se verra bien dans peu de temps .."
        },
        status:true
      },
     
      annee: {
        code:"001",
        annee_debut:2022,
        annee_fin:2023
      },
 
    },
   
  
  ];


  constructor() { }
}
