import { Controller, Post } from '@nestjs/common';
import {UserService} from "../services/user.service";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('solve-problem')
    async solveProblem(): Promise<{ updatedCount: number }> {
        const updatedCount = await this.userService.solveUsersProblem();
        return { updatedCount };
    }
}