const request = require('supertest');
const { expect } = require('chai');

const data = require('./data/recipes.json');
const app = require('./server');

describe('API', () => {
    context('/recipes', () => {
        it('Should return a list of recipes', () => {
            request(app)
                .get('/recipes')
                .expect('Content-Type', /json/)
                .then(res => {
                    const recipes = res.body.recipes;
                    expect(recipes).to.be.an('array');
                    expect(recipes).to.have.length(data.recipes.length);
                });
        });
    });
    context('/recipes/:id', () => {
        it('Should return a single recipe', () => {
            const id = 'lemon-chicken';
            return request(app)
                .get(`/recipes/${id}`)
                .expect('Content-Type', /json/)
                .then(res => {
                    const recipe = res.body;
                    expect(recipe).to.have.property('id', id);
                });
        });

        it('Should return a 404 if the recipe does not exist', () => {
            const id = 'not-a-recipe';
            return request(app)
                .get(`/recipes/${id}`)
                .expect(404)
        });
    });
});
