import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PartnersComponent } from './components/partners/partners.component';
import { SectionComponent } from './components/section/section.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { TickerComponent } from './components/ticker/ticker.component';
import { VideosComponent } from './components/videos/videos.component';
import { TourismComponent } from './components/tourism/tourism.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { CoronaVirusComponent } from './components/corona-virus/corona-virus.component';
import { ComplaintComponent } from './components/complaint/complaint.component';
import { HomeComponent } from './components/home/home.component';
import { GovernorWordComponent } from './components/governor-word/governor-word.component';
import { MessageComponent } from './components/message/message.component';
import { GoalsComponent } from './components/goals/goals.component';
import { VisionComponent } from './components/vision/vision.component';
import { StructureComponent } from './components/structure/structure.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { RulesComponent } from './components/rules/rules.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { DecisionsComponent } from './components/decisions/decisions.component';
import { GuideComponent } from './components/guide/guide.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { AgreementsComponent } from './components/agreements/agreements.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { HotelsComponent } from './components/tourism/hotels/hotels.component';
import { GiftsComponent } from './components/tourism/gifts/gifts.component';
import { PlacesComponent } from './components/tourism/places/places.component';
import { RestaurantsComponent } from './components/tourism/restaurants/restaurants.component';
import { StatisticsComponent } from './components/tourism/statistics/statistics.component';
import { EduInstituteComponent } from './components/edu-institute/edu-institute.component';
import { FactsComponent } from './components/facts/facts.component';
import { PublicsafetyComponent } from './components/publicsafety/publicsafety.component';
import { BethlehemNumbersComponent } from './components/bethlehem-numbers/bethlehem-numbers.component';
import { AboutBethlehemComponent } from './components/about-bethlehem/about-bethlehem.component';
import { ElectronicGuideComponent } from './components/electronic-guide/electronic-guide.component';
import { InvestMapComponent } from './components/invest-map/invest-map.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainSectionComponent,
    NavigationComponent,
    PartnersComponent,
    SectionComponent,
    SiteHeaderComponent,
    TickerComponent,
    VideosComponent,
    TourismComponent,
    AnnouncementComponent,
    CoronaVirusComponent,
    ComplaintComponent,
    HomeComponent,
    GovernorWordComponent,
    MessageComponent,
    GoalsComponent,
    VisionComponent,
    StructureComponent,
    ActivitiesComponent,
    ProjectsComponent,
    RulesComponent,
    ErrorPageComponent,
    DecisionsComponent,
    GuideComponent,
    PublicationsComponent,
    AgreementsComponent,
    ArticlesComponent,
    HotelsComponent,
    GiftsComponent,
    PlacesComponent,
    RestaurantsComponent,
    StatisticsComponent,
    EduInstituteComponent,
    FactsComponent,
    PublicsafetyComponent,
    BethlehemNumbersComponent,
    AboutBethlehemComponent,
    ElectronicGuideComponent,
    InvestMapComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    NgxEditorModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    IvyCarouselModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
