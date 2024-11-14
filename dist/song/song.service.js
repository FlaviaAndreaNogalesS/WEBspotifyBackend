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
exports.SongService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const song_model_1 = require("./song.model");
const album_model_1 = require("../album/album.model");
let SongService = class SongService {
    constructor(songModel) {
        this.songModel = songModel;
    }
    async findSongById(songId) {
        return this.songModel.findByPk(songId);
    }
    async findAll() {
        return this.songModel.findAll({
            include: [album_model_1.Album],
        });
    }
    async create(songData) {
        return this.songModel.create(songData);
    }
    async update(id, songData) {
        const song = await this.findSongById(id);
        if (!song) {
            throw new common_1.NotFoundException('Song not found');
        }
        return song.update(songData);
    }
    async delete(id) {
        const song = await this.findSongById(id);
        if (!song) {
            throw new common_1.NotFoundException('Song not found');
        }
        await song.destroy();
    }
};
exports.SongService = SongService;
exports.SongService = SongService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(song_model_1.Song)),
    __metadata("design:paramtypes", [Object])
], SongService);
//# sourceMappingURL=song.service.js.map