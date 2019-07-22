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
    address() {
        return this.hasMany(Address, AddressAuthors);
    }
}

class Address extends MysqlModel {
    attribute = {
        address: '',
        detail: '',
    };
    constructor() {
        super();
        this.init();
    }

    users() {

    }

}
class AddressAuthors extends MysqlModel {
    attribute = {
        user_id: null,
        address_id: null
    };
    constructor() {
        super();
        this.init();
    }

    user() : Promise<Authors> {
        return this.belongsTo(Authors);
    }
}

// connect to firebase
beforeAll((done) => {
    connectToTestDatabase();
    done();
})
let author_ids: any = [];

describe('one to many query Class Test', () => {
    
    test('author has many post', async () => {
        
    });


});

afterAll(async () => {
    if (author_ids.length > 0) {
        await Authors.delete(author_ids);
    }
})