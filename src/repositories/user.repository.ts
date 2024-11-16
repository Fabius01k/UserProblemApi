import { Repository } from 'typeorm';
import {User} from "../entities/user.entity";
import {Injectable} from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(User)
        protected userRepository: Repository<User>
    ) {}

    async solveUsersProblem(): Promise<number> {
        const { affected } = await this.userRepository.createQueryBuilder()
            .update(User)
            .set({ problems: false })
            .where('problems = true')
            .execute();
        return affected || 0;
    }
}
