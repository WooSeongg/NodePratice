import { even, odd } from './var.mjs';

function CheckOddOrEnven(num){
    if (num % 2){
        return odd;
    }
    return even;
}

export default CheckOddOrEnven;