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
exports.SearchService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const artist_model_1 = require("../artist/artist.model");
const album_model_1 = require("../album/album.model");
const song_model_1 = require("../song/song.model");
const sequelize_2 = require("sequelize");
let SearchService = class SearchService {
    constructor(artistModel, albumModel, songModel) {
        this.artistModel = artistModel;
        this.albumModel = albumModel;
        this.songModel = songModel;
    }
    async search(query) {
        const artists = await this.artistModel.findAll({
            where: { name: { [sequelize_2.Op.like]: `%${query}%` } },
        });
        const albums = await this.albumModel.findAll({
            where: { title: { [sequelize_2.Op.like]: `%${query}%` } },
        });
        const songs = await this.songModel.findAll({
            where: { title: { [sequelize_2.Op.like]: `%${query}%` } },
        });
        return { artists, albums, songs };
    }
};
exports.SearchService = SearchService;
exports.SearchService = SearchService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(artist_model_1.Artist)),
    __param(1, (0, sequelize_1.InjectModel)(album_model_1.Album)),
    __param(2, (0, sequelize_1.InjectModel)(song_model_1.Song)),
    __metadata("design:paramtypes", [Object, Object, Object])
], SearchService);
//# sourceMappingURL=search.service.js.map