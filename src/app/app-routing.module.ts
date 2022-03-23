import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AboutBethlehemComponent } from './components/about-bethlehem/about-bethlehem.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { AgreementsComponent } from './components/agreements/agreements.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { BethlehemNumbersComponent } from './components/bethlehem-numbers/bethlehem-numbers.component';

import { ComplaintComponent } from './components/complaint/complaint.component';
import { DecisionsComponent } from './components/decisions/decisions.component';
import { EduInstituteComponent } from './components/edu-institute/edu-institute.component';
import { ElectronicGuideComponent } from './components/electronic-guide/electronic-guide.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { FactsComponent } from './components/facts/facts.component';
import { GoalsComponent } from './components/goals/goals.component';
import { GovernorWordComponent } from './components/governor-word/governor-word.component';
import { GuideComponent } from './components/guide/guide.component';
import { HomeComponent } from './components/home/home.component';
import { InvestMapComponent } from './components/invest-map/invest-map.component';
import { MessageComponent } from './components/message/message.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { PublicsafetyComponent } from './components/publicsafety/publicsafety.component';
import { RulesComponent } from './components/rules/rules.component';
import { StructureComponent } from './components/structure/structure.component';
import { GiftsComponent } from './components/tourism/gifts/gifts.component';
import { HotelsComponent } from './components/tourism/hotels/hotels.component';
import { PlacesComponent } from './components/tourism/places/places.component';
import { RestaurantsComponent } from './components/tourism/restaurants/restaurants.component';
import { StatisticsComponent } from './components/tourism/statistics/statistics.component';
import { VisionComponent } from './components/vision/vision.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'governorWord', component: GovernorWordComponent },
  { path: 'message', component: MessageComponent },
  { path: 'goals', component: GoalsComponent },
  { path: 'vision', component: VisionComponent },
  { path: 'structure', component: StructureComponent },
  { path: 'about', component: AboutBethlehemComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'facts', component: FactsComponent },
  { path: 'publicSafety', component: PublicsafetyComponent },
  { path: 'institute', component: EduInstituteComponent },
  { path: 'numbers', component: BethlehemNumbersComponent },
  { path: 'investMap', component: InvestMapComponent },
  { path: 'electronicGuide', component: ElectronicGuideComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'complaint', component: ComplaintComponent },
  { path: 'decisions', component: DecisionsComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'agreements', component: AgreementsComponent },
  { path: 'articles/:id', component: ArticlesComponent },
  { path: 'tourism/places', component: PlacesComponent },
  { path: 'tourism/restaurants', component: RestaurantsComponent },
  { path: 'tourism/statistics', component: StatisticsComponent },
  { path: 'tourism/gifts', component: GiftsComponent },
  { path: 'tourism/hotels', component: HotelsComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
