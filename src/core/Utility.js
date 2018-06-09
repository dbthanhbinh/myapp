import Config from '../config'

const Utility = {
    formatPrice (price) {
        let currency = Config.price.currency
        let setFirst = Config.price.setFirst
        let prefix = ''
        let lastfix = ''
        if (setFirst)
            prefix = currency + ' '
        else
            lastfix = ' ' + currency

        let priceFormat = price.toFixed(0).replace(/./g, function(c, i, a) {
            return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
        })

        return prefix + priceFormat + lastfix
    },

    price (price, discount) {
        if (!Number.isInteger(price) || !Number.isInteger(discount))
            return Config.price.default
        if (price < 0 || discount < 0) {
            return Config.price.default
        }
        if (price < discount) {
            return Utility.formatPrice(price)
        }

        return Utility.formatPrice(discount)
    }
}

export  default Utility