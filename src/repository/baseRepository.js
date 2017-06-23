export class BaseRepository {
    constructor(context) {
        this.context = context

    }

    findById(x) {
        return x;
    }
}