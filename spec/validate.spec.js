import { validate } from '../src/js/_helpers';

describe('validate', () => {
    
    it('is exported as function', () => {
        expect(typeof validate).toBe('function');
    });

    it('resolves when no rules are present for field', (done) => {
        validate({
            credentials: {
                something: 'else'
            }
        }).then(() => {
            done();
        })
    });

    it('rejects when min length condition is not reached', (done) => {
        validate({
            credentials: {
                something: 'else'
            },
            validation: {
                something: {
                    minLength: 5
                }
            }
        }).catch((e) => {
            expect(e).toBe('something must have at least 5 characters');
            done();
        })
    });

    it('resolves when min length condition is reached', (done) => {
        validate({
            credentials: {
                something: 'this must be valid'
            },
            validation: {
                something: {
                    minLength: 5
                }
            }
        }).then(() => {
            done();
        })
    });
});
