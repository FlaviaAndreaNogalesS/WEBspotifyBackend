"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const express = require("express");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: 'Content-Type, Accept',
    });
    app.use('/musica', (req, res, next) => {
        res.setHeader('Content-Type', 'audio/mp3');
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    }, express.static((0, path_1.join)(__dirname, '..', 'musica')));
    app.use('/imagenes', (req, res, next) => {
        res.setHeader('Content-Type', 'image/jpeg');
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    }, express.static((0, path_1.join)(__dirname, '..', 'imagenes')));
    await app.listen(4000);
}
bootstrap();
//# sourceMappingURL=main.js.map