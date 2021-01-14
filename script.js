class RangeValidator {
    constructor(from, to) {
        this._from = from;
        this._to = to;
    }
    get from() {
        return this._from;
    }

    get to() {
        return this._to;
    }
    get range() {
        var range = [this._from, this._to];
        return range;
    }

    set from(newFrom) {
        this._from = newFrom;
    }

    set to(newTo) {
        this._to = newTo;
    }

    validate(num, min = this._from, max = this._to) {
        let n = Number(num);
        return (!isNaN(n) && n >= min && n <= max);
    }

}

let newRange = new RangeValidator(1, 99);
console.log('Изначальный Range: ' + newRange.range);
newRange.from = 50;
console.log('Новый Range заданный через сеттер: ' + newRange.range);
console.log('Число 44 входит в диапазон Range: ' + newRange.validate(44));