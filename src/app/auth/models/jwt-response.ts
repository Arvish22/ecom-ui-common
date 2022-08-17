export class JwtResponse {
    token : string | null = null;
	type : string | null = null;

    public constructor(init?:Partial<JwtResponse>) {
        Object.assign(this, init);
    }
}
