export interface BaseResponseDto<T>{
    success:boolean,
    results:T,
    message:string,
    errors:ValidationError
}

interface ValidationError{
    propertyName:string,
    errorMessage:string
}