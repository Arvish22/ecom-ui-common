export class Address {

    type : string | null = null;
    street : string | null = null;
    state : string | null = null;
    country : string | null = null;
    city : string | null = null;
    pincode : string | null = null;
    user : string | null = null;
    
    constructor(options?: Partial<Address>) {
        Object.assign(this, options);
    }
}
