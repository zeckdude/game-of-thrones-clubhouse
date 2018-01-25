import { SET_BREADCRUMBS } from '../actions';

const initialBreadcrumbsState = [];

export default (breadcrumbsState = initialBreadcrumbsState, action) => {
  switch (action.type) {
    case SET_BREADCRUMBS:
      return action.breadcrumbs;
    default:
      return breadcrumbsState;
  }
};
