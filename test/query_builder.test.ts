import QueryBuilder from '../src/builder/QueryBuilder';
import {now} from '../src/type';

describe('Query Builder Class Test', () => {
    it('should pass where builder', () => {
        let qb = new QueryBuilder();
        qb.whereNull('test')
        .where('user_count', '>', 10)
        .whereOr('name', '=', 'david')
        .whereOr('created_at', '>', now);
        expect(qb.toString()).toBe(`WHERE user_count > 10 OR name = 'david' OR created_at > CURRENT_TIMESTAMP() `)
    });
})