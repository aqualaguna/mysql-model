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

    posts() : Promise<Posts[]> {
        return this.hasMany(Posts);
    }
}

class Posts extends MysqlModel {
    attribute = {
        title: '',
        description: '',
        content: '',
        date: new Date(),
        author_id: null
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
        let author : Authors= await Authors.first();
        let result = (await author.posts());
        expect(result).toBeInstanceOf(Array);
        expect(result.length > 0).toBeTruthy();
        expect(result.map((t: any) => t.author_id)).toEqual(expect.arrayContaining([
            author.id
        ]))
    });

    test('post has one author', async () => {
        let post : Posts = await Posts.first();
        let user = (await post.user());
        expect(user).toBeDefined();
        expect(post.author_id).toBe(user.id);
    });


});

afterAll(async () => {
    if (author_ids.length > 0) {
        await Authors.delete(author_ids);
    }
})