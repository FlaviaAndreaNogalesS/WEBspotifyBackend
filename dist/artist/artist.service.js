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
exports.ArtistService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const artist_model_1 = require("./artist.model");
const genre_model_1 = require("../genres/genre.model");
let ArtistService = class ArtistService {
    constructor(artistModel) {
        this.artistModel = artistModel;
    }
    async findArtistsByGenre(genre_id) {
        return this.artistModel.findAll({ where: { genre_id } });
    }
    async findAll() {
        return this.artistModel.findAll({
            include: [genre_model_1.Genre],
        });
    }
    async findById(id) {
        const artist = await this.artistModel.findByPk(id, {
            include: [genre_model_1.Genre],
        });
        if (!artist) {
            throw new common_1.NotFoundException('Artist not found');
        }
        return artist;
    }
    async create(artistData) {
        return this.artistModel.create(artistData);
    }
    async update(id, artistData) {
        const artist = await this.findById(id);
        if (!artist) {
            throw new common_1.NotFoundException('Artist not found');
        }
        return artist.update(artistData);
    }
    async delete(id) {
        const artist = await this.findById(id);
        if (!artist) {
            throw new common_1.NotFoundException('Artist not found');
        }
        await artist.destroy();
    }
};
exports.ArtistService = ArtistService;
exports.ArtistService = ArtistService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(artist_model_1.Artist)),
    __metadata("design:paramtypes", [Object])
], ArtistService);
//# sourceMappingURL=artist.service.js.map