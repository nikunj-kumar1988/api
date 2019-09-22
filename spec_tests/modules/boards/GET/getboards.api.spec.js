const superTest = require('supertest');
const request = superTest(global.ENV);
const config = require('config');
const apiKey = global.APIKEY;
const apiToken = global.APITOKEN;
const joi = require('@hapi/joi');

