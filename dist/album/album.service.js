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
exports.AlbumService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const album_model_1 = require("./album.model");
const artist_model_1 = require("../artist/artist.model");
let AlbumService = class AlbumService {
    constructor(albumModel) {
        this.albumModel = albumModel;
    }
    async findAlbumsByArtist(artistId) {
        return this.albumModel.findAll({
            where: { artistId },
            include: { all: true },
        });
    }
    async findAlbumById(id) {
        return this.albumModel.findByPk(id, {
            include: { all: true },
        });
    }
    async findAll() {
        return this.albumModel.findAll({
            include: [artist_model_1.Artist],
        });
    }
    async create(albumData) {
        return this.albumModel.create(albumData);
    }
    async update(id, albumData) {
        const album = await this.findAlbumById(id);
        if (!album) {
            throw new common_1.NotFoundException('Album not found');
        }
        return album.update(albumData);
    }
    async delete(id) {
        const album = await this.findAlbumById(id);
        if (!album) {
            throw new common_1.NotFoundException('Album not found');
        }
        await album.destroy();
    }
};
exports.AlbumService = AlbumService;
exports.AlbumService = AlbumService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(album_model_1.Album)),
    __metadata("design:paramtypes", [Object])
], AlbumService);
//# sourceMappingURL=album.service.js.map