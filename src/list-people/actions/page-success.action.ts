import { createAction, props, Action } from '@ngrx/store';
import { DataTable } from '../entities';

export interface PageSuccessAction extends Action {
  page: number,
  limit: number
  data: DataTable
}
export const pageSuccessType = '[list-people] Page obtained successfully';
export const pageSuccess = createAction(
  pageSuccessType,
  props<{page: number, limit: number, data: DataTable}>()
);