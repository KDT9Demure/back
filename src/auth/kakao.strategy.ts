import {PassportStrategy} from "@nestjs/passport";
import {Strategy} from "passport-jwt";
import {AuthService} from "./auth.service";

export class KakaoStrategy extends PassportStrategy(Strategy,'kakao'){
    constructor(private readonly authService:AuthService) {

        super({

        });
    }
}