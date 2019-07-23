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
        return this.hasMany(Address, AddressAuthors, 'user_id');
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

    authors() {
        return this.hasMany(Authors, AddressAuthors, '', 'user_id');
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

}

// connect to firebase
beforeAll((done) => {
    connectToTestDatabase();
    done();
})
let author_ids: any = [];

describe('one to many query Class Test', () => {
    
    test('author has many address', async () => {
        let author = await Authors.first();
        let addresses = await author.address();
        expect(addresses).toBeInstanceOf(Array);
        expect(addresses.length).toBeGreaterThan(0);
        expect(addresses[0].pivot).toBeDefined();
        expect(addresses[0].pivot).toBeInstanceOf(AddressAuthors);
        expect(addresses[0]).toBeInstanceOf(Address);
        expect(addresses[0].pivot.user_id).toBe(author.id);
    });

    test('address has many author', async () => {
        let address = await Address.first();
        let authors = await address.authors();
        expect(authors).toBeInstanceOf(Array);
        expect(authors.length).toBeGreaterThan(0);
        expect(authors[0].pivot).toBeDefined();
        expect(authors[0].pivot).toBeInstanceOf(AddressAuthors);
        expect(authors[0]).toBeInstanceOf(Authors);
        expect(authors[0].pivot.address_id).toBe(address.id);
    });
});

afterAll(async () => {
    if (author_ids.length > 0) {
        await Authors.delete(author_ids);
    }
})