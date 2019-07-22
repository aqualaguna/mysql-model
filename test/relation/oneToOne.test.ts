import MysqlModel from '../../src';
import { connectToTestDatabase } from '../helper';

class Authors extends MysqlModel {
    attribute = {
        first_name: '',
        last_name: '',
        email: '',
        birthdate: new Date()
    };

    constructor() {
        super();
        this.init();
    }

    phone() : Promise<Phone> {
        return this.hasOne(Phone, 'user_id');
    }
}

class Phone extends MysqlModel {
    attribute = {
        user_id: null,
        phone_number: '082132123'
    };

    constructor() {
        super();
        this.init();
    }

    user() : Promise<Authors> {
        return this.belongsTo(Authors, 'user_id');
    }
}

// connect to firebase
beforeAll((done) => {
    connectToTestDatabase();
    done();
})
let author_ids: any = [];

describe('one to one query Class Test', () => {
    
    test('author has one phone', async () => {
        let author : Authors= await Authors.first();
        let result = (await author.phone());
        expect(result).not.toBeNull();
        expect(result.user_id).toBe(author.id);
        
    });

    test('phone has one author', async () => {
        let phone : Phone = await Phone.first();
        let user = (await phone.user());
        expect(user).toBeDefined();
        expect(phone.user_id).toBe(user.id);
    });
});

afterAll(async () => {
    if (author_ids.length > 0) {
        await Authors.delete(author_ids);
    }
})