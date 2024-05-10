import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FooterComponent],
  template: `
    <main>
      <div class="conteneur">
        <div class="texte">
          <p>
          Ensemble, nous sommes dévoués à faire de votre visite dans notre magasin une expérience <br>
          inoubliable. Que vous soyez un collectionneur passionné, un amateur curieux ou un parent à la<br>
          recherche du cadeau parfait, nous sommes là pour vous guider, vous inspirer et vous faire rêver. <br>
          Bienvenue Au Petit Village !
          </p>
        </div>
        <div class="image"><img [src]="equipe" alt="photo représentant 3 femmes et 2 hommes composant l'équie de vente"></div>
      </div>
      <div class="conteneur">
        <div class="image"><img [src]="magasin" alt=""></div>
        <div class="texte">
          <p>
          Pénétrez dans notre magasin et plongez dans un monde où les irréductibles Gaulois règnent en maîtres ! <br>
          Des étagères débordantes de trésors gaulois vous attendent, des figurines vibrantes <br>
          qui célèbrent les exploits épiques d'Astérix, Obélix et de tout le village d'irréductibles. <br>
          Que vous soyez un guerrier intrépide, un druide sage ou un simple amateur de potion magique, <br>
          votre quête pour trouver la figurine parfaite commence chez Figurines Fantastiques, <br>
          là où même les Romains se joignent à la fête dans des scènes hilarantes et des batailles mythiques. <br>
          Alors, enfilez votre casque ailé et préparez-vous à vivre des aventures gauloises inoubliables <br>
          dès le premier pas dans notre magasin !
          </p>
        </div>
      </div>
      <div class="conteneur">
        <div class="texte">
        <p>
            Plongez dans notre vaste collection de figurines, où chaque étagère regorge de trésors uniques et<br>
            fascinants, y compris des pièces emblématiques de l'univers d'Astérix et Obélix.<br>
            Partez à l'aventure avec les irréductibles Gaulois dans des figurines captivantes représentant leurs exploits héroïques, <br>
            leurs querelles avec les Romains et leurs festins mémorables. Des personnages légendaires comme Astérix, Obélix, Panoramix et <br>
            Idéfix prennent vie sous forme de figurines finement détaillées, vous transportant dans le village d'Astérix pour des aventures épiques et hilarantes. <br>
            Ajoutez une touche de magie gauloise à votre collection avec nos figurines d'Astérix et Obélix, où l'humour,<br>
            l'aventure et la camaraderie sont toujours au rendez-vous.
          </p>
        </div>
        <div class="div_entreprise"><img [src]="entreprise" alt="" class="entreprise"></div>
      </div>
      <app-footer></app-footer>
    </main>
  `,
  styleUrl: "./about.component.css"
})
export class AboutComponent {
  equipe:string ="assets/images/equipe.jpeg"
  magasin:string ="assets/images/magasin.jpeg"
  entreprise:string ="assets/images/logo.jpg"

}
