import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components';
import { DetailPersonComponent } from './container';
import { StoreModule } from '@ngrx/store';
import { FEATURE_DETAIL_PEOPLE } from './selectors';
import { reducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { DetailsPeopleEffects } from './effects';

@NgModule({
  declarations: [ DetailPersonComponent ],
  imports: [
    CommonModule,
    ComponentsModule,
    StoreModule.forFeature(FEATURE_DETAIL_PEOPLE, reducer),
    EffectsModule.forFeature([DetailsPeopleEffects])
  ],
  exports: [ DetailPersonComponent ]
})
export class DetailPersonModule {}