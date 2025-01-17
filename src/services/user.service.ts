import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {User} from "../entities/user.entity";
import {UserRepository} from "../repositories/user.repository";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private readonly userRepository: UserRepository,
    ) {}

    async solveUsersProblem(): Promise<number> {
        return this.userRepository.solveUsersProblem();
    }
}