import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap  } from "rxjs/operators"; 

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html', 
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute,
    private paisService: PaisService ) { }

  ngOnInit(): void {

     this.activateRoute.params
         .pipe(
          switchMap( ({id}) => this.paisService.getPaisPorCodigo(id) )
         )
         .subscribe( resp => {
          console.log(resp);
          
         })

    // this.activateRoute.params
    // .subscribe(({id}) =>{
    //   console.log(id);
    //   this.paisService.getPaisPorCodigo(id)
    //       .subscribe( pais =>{
    //         console.log(pais);
          
    //       })
    // })
  }
}
