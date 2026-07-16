import { AuthService } from "./service";


export class AuthController {


private service =
new AuthService();



async login(
email:string,
password:string
){

return this.service.login(
email,
password
);

}


}