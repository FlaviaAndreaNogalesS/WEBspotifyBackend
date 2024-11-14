"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const genre_model_1 = require("./genre.model");
let GenreService = class GenreService {
    constructor(genreModel) {
        this.genreModel = genreModel;
    }
    async findAll() {
        return this.genreModel.findAll();
    }
    async findById(id) {
        const genre = await this.genreModel.findByPk(id);
        if (!genre) {
            throw new common_1.NotFoundException('Genre not found');
        }
        return genre;
    }
    async create(genreData) {
        return this.genreModel.create(genreData);
    }
    async update(id, genreData) {
        const genre = await this.findById(id);
        if (!genre) {
            throw new common_1.NotFoundException('Genre not found');
        }
        return genre.update(genreData);
    }
    async delete(id) {
        const genre = await this.findById(id);
        if (!genre) {
            throw new common_1.NotFoundException('Genre not found');
        }
        await genre.destroy();
    }
};
exports.GenreService = GenreService;
exports.GenreService = GenreService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(genre_model_1.Genre)),
    __metadata("design:paramtypes", [Object])
], GenreService);
//# sourceMappingURL=genre.service.js.map