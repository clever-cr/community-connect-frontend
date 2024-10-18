import { servicesActions } from '.';
import { createService, getAllServices } from './service';


export const createServices = (data: any) => async (dispatch: any) => {
  try {
    dispatch(servicesActions.setIsLoading(true));
    const response = await createService(data);
    if (response) {
      dispatch(servicesActions.setIsLoading(false));
    }
  } catch (error) {
    console.log('error', error);
  }
};

export const getServices = (query: string) => async (dispatch: any) => {
  try {
    dispatch(servicesActions.setIsLoading(true));
    const response = await getAllServices(query);
    if (response) {
      dispatch(servicesActions.setIsLoading(false));
      dispatch(servicesActions.setAll({ service: response.data || [] }));
    }
  } catch (error) {
    console.log('error', error);
  }
};
