import { Error } from "./form-error.styled";

function FormError(props: any) {
    const {description} = props

    return ( 
        <Error>{description}</Error>
     );
}

export default FormError;