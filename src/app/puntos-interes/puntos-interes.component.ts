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
      nombre: 'Galerías Tamarindos',
      descripcion: 'Un moderno centro comercial en Iguala de la Independencia.',
      imagen: 'http://www.galeriastamarindos.com/wp-content/uploads/2021/10/3.2-1-1536x864.jpg', // Reemplazar con una URL válida
      coordenadas: { lat: 18.345678, lng: -99.540123 }
    },
    {
      nombre: 'Hotel Real 1900',
      descripcion: 'Un hotel histórico ubicado en el centro de la ciudad.',
      imagen: 'https://cdn.easy-rez.com/production/hotels/508f1866dc46853262d97fb75b7d6af7/public/.crops/tmb_01__1_.jpg_0.64014300-1499961298.jpg', // Reemplazar con una URL válida
      coordenadas: {  lat: 18.345222,lng: -99.541667 }
    },
    {
      nombre: 'Bufetes El Bambú',
      descripcion: 'Un restaurante popular con una variedad de platillos.',
      imagen: 'https://eventumcool.com/wp-content/uploads/2022/11/AF1QipOa4xBglt8UNi_tlwkdywLmpBDQ-Giz4v5bQD8Tw408-h544-k-no.jpeg', // Reemplazar con una URL válida
      coordenadas: { lat: 18.345763412868724, lng: -99.53621327900696 }, 
    },
    {
      nombre: 'Bufetes El Arroyo',
      descripcion: 'Un lugar famoso por su comida típica local.',
      imagen: 'https://lh5.googleusercontent.com/p/AF1QipMa2vdxbSb_-ONoUFFTXN5LXYM9k9xF1mGMqi79', // Reemplazar con una URL válida
      coordenadas: { lat: 18.346000, lng: -99.542000 }
    },
    {
      nombre: 'Museo de la Bandera',
      descripcion: 'Un museo dedicado a la historia de la bandera de México.',
      imagen: 'https://live.staticflickr.com/2629/3975189367_9a6e06283e_b.jpg', // Reemplazar con una URL válida
      coordenadas: { lat: 18.345000, lng: -99.540000 }
    },
    {
      nombre: 'Asta Bandera Monumental',
      descripcion: 'Una de las astas bandera más grandes de México.',
      imagen: 'https://www.maravillasenmexico.com.mx/wp-content/uploads/2021/11/feria-bandera-iguala-2022.jpeg', // Reemplazar con una URL válida
      coordenadas: { lat: 18.345300, lng: -99.541000 }
    }
  ];
  /* ,
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
  ;

  abrirMapa(event: any, lugar: any) {
    console.log('Función abrirMapa llamada');
    event.preventDefault();
    const coordenadas = lugar.coordenadas;
    window.open(`https://www.google.com/maps/place/${coordenadas.lat},${coordenadas.lng}`, '_blank');
  }
}