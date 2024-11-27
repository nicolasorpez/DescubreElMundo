import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-puntos-interes',
  standalone: true,
  templateUrl: './puntos-interes.component.html',
  styleUrls: ['./puntos-interes.component.css'],
  imports: [CommonModule, MenuComponent]
})
export class PuntosInteresComponent {
  lugares = [
    {
      nombre: 'Torre Eiffel',
      descripcion: 'Un icónico monumento en París, Francia.',
      imagen: 'https://cdn-imgix.headout.com/media/images/c90f7eb7a5825e6f5e57a5a62d05399c-25058-BestofParis-EiffelTower-Cruise-Louvre-002.jpg?auto=format&w=1051.2&h=540&q=90&fit=fit',
      coordenadas: { lat: 48.890730, lng: 2.294550 }
    },
    {
      nombre: 'Estatua de la Libertad',
      descripcion: 'Símbolo de libertad en Nueva York, EE.UU.',
      imagen: 'https://media.admagazine.com/photos/6531e24db213103073ad3736/master/w_1600%2Cc_limit/estatua-de-la-libertad-en-ny.jpg',
      coordenadas: { lat: 40.748434, lng: -74.006689 }
    },
    {
      nombre: 'Gran Muralla China',
      descripcion: 'Una de las maravillas del mundo en China.',
      imagen: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/e0ba/live/a4463970-c4e3-11ee-be3f-71c082ac4827.jpg.webp',
      coordenadas: { lat: 40.431908, lng: 116.570373 }
    },
    {
      nombre: 'Taj Mahal',
      descripcion: 'Un mausoleo de mármol en la India.',
      imagen: 'https://s1.significados.com/foto/cultural-tourism-5264542-1920_bg.jpg?class=article',
      coordenadas: { lat: 27.175277, lng: 78.042128 }
    },
    {
      nombre: 'Coliseo Romano',
      descripcion: 'Un anfiteatro histórico en Roma, Italia.',
      imagen: 'https://marcelogardinetti.wordpress.com/wp-content/uploads/2023/10/coliseo-romano-c2a9yana-marudova.jpg',
      coordenadas: { lat: 41.890210, lng: 12.490020 }
    },
    {
      nombre: 'Machu Picchu',
      descripcion: 'Una antigua ciudadela inca en Perú.',
      imagen: 'https://caminoincamachupicchu.org/cmingutd/wp-content/uploads/2021/06/machu-picchu-llama.jpg',
      coordenadas: { lat: -13.163333, lng: -72.516667 }
    }/* ,
    {
      nombre: 'Cristo Redentor',
      descripcion: 'Un monumento de Jesucristo en Río de Janeiro, Brasil.',
      imagen: 'https://www.rio.com/images/rio-de-janeiro/cristo-redentor.jpg',
      coordenadas: { lat: -22.906847, lng: -43.210487 }
    },
    {
      nombre: 'Chichén Itzá',
      descripcion: 'Una antigua ciudad maya en México.',
      imagen: 'https://www.mexicoescultura.com/wp-content/uploads/2019/03/Chichen-Itza-1.jpg',
      coordenadas: { lat: 20.682778, lng: -88.568333 }
    },
    {
      nombre: 'La Alhambra',
      descripcion: 'Un palacio y fortaleza en Granada, España.',
      imagen: 'https://www.spain.info/export/sites/corpus/es/_jcr_content/par/imagen.dam_0.jpg',
      coordenadas: { lat: 37.176333, lng: -3.588611 }
    },
    {
      nombre: 'El Partenón',
      descripcion: 'Un antiguo templo en Atenas, Grecia.',
      imagen: 'https://www.greece-is.com/wp-content/uploads/2019/03/partnenon-1.jpg',
      coordenadas: { lat: 37.971667, lng: 23.726389 }
    } */
  ];

  abrirMapa(event: any, lugar: any) {
    console.log('Función abrirMapa llamada');
    event.preventDefault();
    const coordenadas = lugar.coordenadas;
    window.open(`https://www.google.com/maps/place/${coordenadas.lat},${coordenadas.lng}`, '_blank');
  }
}