import { NgModule } from '@angular/core';
import { MyMusicListRouting } from './music-list-routing.module';
import { MyMusicItemComponent } from './components/item/music-item.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MyMusicListService } from './music-list.service';
import { MyMusicListComponent } from './components/list/music-list.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, MyMusicListRouting],
  exports: [MyMusicListComponent, MyMusicItemComponent],
  declarations: [MyMusicListComponent, MyMusicItemComponent],
  providers: [MyMusicListService],
})
export class MyMusicListModule {}
