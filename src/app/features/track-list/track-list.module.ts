import { NgModule } from '@angular/core';
import { MyTrackListRouting } from './track-list-routing.module';
import { MyTrackItemComponent } from './components/item/track-item.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MyTrackListService } from './track-list.service';
import { MyTrackListComponent } from './components/list/track-list.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, MyTrackListRouting],
  exports: [MyTrackListComponent, MyTrackItemComponent],
  declarations: [MyTrackListComponent, MyTrackItemComponent],
  providers: [MyTrackListService],
})
export class MyTrackListModule {}
