import { ResponseModel } from './responseModel';

export inteface ListResponseModel<T> extends ResponseModel{
	data:T[];
}