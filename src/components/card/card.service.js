import API from '../../services/api'

const  CardService = {
    listing (callback) {
        API.get('products/' + API.commons.listing, (err, result) => {
            if (err) return callback(err)
            result.then(function(e) {
                return callback(e, null)
            })
        })
    },

    detail (id, callback) {
        API.get('products/' + API.commons.detail + '/' + id, (err, result) => {
            if (err) return callback(err)
            result.then(function(e) {
                return callback(e, null)
            })
        })
    }
}
export default  CardService