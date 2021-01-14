class Artist {

    static count = 0;
    _id = ++Artist.count;

    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

}

class Artwork extends Artist {

    static count = 0;
    _id = ++Artwork.count;

    constructor(name, artwork, year) {
        super(name);
        this._artwork = artwork;
        this._year = year;
    }

    get aname() {
        return this._artwork;
    }

    get info() {
        var info = { "name": this._artwork, "artist": this._name, "year": this._year };
        return info;
    }

    set aname(newAname) {
        this._artwork = newAname;
    }

    set info(newInfo) {
        // name.info = { artist: 'Имя', artwork: 'Название', year: 2021 };

        // Имя художника
        this._name = newInfo.artist;

        // Имя картины
        this._artwork = newInfo.artwork;

        // Год написания
        this._year = newInfo.year;
    }

}

// Создаём художника
let ivanov = new Artist('Иванов');
let sidorov = new Artist('Сидоров');
console.log('Создан художник: ' + ivanov.name);
console.log('Создан художник: ' + sidorov.name);
console.log('Создано художников: ' + Artist.count);

// Присваиваем картину
let kartina = new Artwork(ivanov.name, 'Моя первая картина', 2020);
console.log('Создана картина: ' + kartina.aname);
console.log(kartina.info);

// Меняем данные
ivanov.info = { artist: 'Иванов', artwork: 'Моя вторая картина', year: 2021 };
console.log(kartina.info);

// Создаем ещё 2 картины
let kartina2 = new Artwork(sidorov.name, 'Картина Сидорова', 2021);
let kartina3 = new Artwork(sidorov.name, 'Вторая картина Сидорова', 1997);
console.log(kartina2.info);
console.log(kartina3.info);

console.log('Создано картин: ' + Artwork.count);

/**
 * Вывод картин по конкретному художнику и количество его работ
 */

function find_by_artist(artistName) {

    // Массив с картинами
    var artworks = [kartina, kartina2, kartina3];
    console.log(artworks);

    // Массив с найдеными картинами
    var find = artworks.filter(item => item.name.indexOf(artistName) !== -1);
    console.log('Художник ' + artistName + ' создал ' + find.length + ' картин(ы)');
    console.log(find);

    return find;
}

find_by_artist('Сидоров');