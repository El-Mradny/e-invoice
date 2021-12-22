// const calculateAge = birthdate =>
//     Math.floor((new Date().getTime() - birthdate.getTime()) / (1000 * 60 * 60 * 24 * 365.25))

// const toJavaString = date => {
//     // console.log('date', date)
//     return date.toISOString().replace('T', ' ').replace('Z', '')
// }

const enviroment = {
    "id": "3e601cc9-dd64-4512-b430-c0a7a1dc2211",
    "name": "EEI - SIT Env",
    "values": [
        {
            "key": "apiBaseUrl",
            "value": "https://api.sit.invoicing.eta.gov.eg",
            "enabled": true
        },
        {
            "key": "idSrvBaseUrl",
            "value": "https://id.sit.eta.gov.eg",
            "enabled": true
        },
        {
            "key": "clientId",
            "value": "",
            "enabled": true
        },
        {
            "key": "clientSecret",
            "value": "",
            "enabled": true
        },
        {
            "key": "generatedAccessToken",
            "value": "",
            "enabled": true
        }
    ],
    "_postman_variable_scope": "environment",
    "_postman_exported_at": "2020-06-29T19:50:55.011Z",
    "_postman_exported_using": "Postman/7.27.1"
}


const getJwtUser = () => sessionStorage.getItem("jwtUser") ? JSON.parse(sessionStorage.getItem("jwtUser")) : null
const setJwtUser = user => user ? sessionStorage.setItem("jwtUser", JSON.stringify(user)) : sessionStorage.removeItem("jwtUser")

const authFetch = (url, options) => {
    const jwtUser = getJwtUser()
    if (jwtUser) {
        options = options || {}
        options.headers = options.headers || {}
        options.headers.Authorization = `Bearer ${jwtUser.token}`
    }
    return fetch(url, options)
}

const uploadImage = async (imageFile, name) => {
    console.log('imageFile object', imageFile)
    const body = new FormData()
    body.append('file', imageFile, name)
    const result = await authFetch('/images', {
        method: 'POST',
        body
    })
    console.log('uploadImage result', result)
    return result
}

const email = async (to, subject, text) => {
    const result = await fetch('/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to, subject, text })
    })
    console.log('email result', result)
    return result
}

const uploadFile = async (imageFile, name) => {
    console.log('imageFile object', imageFile)
    const body = new FormData()
    body.append('file', imageFile, name)
    const result = await authFetch('/images', {
        method: 'POST',
        body
    })
    console.log('uploadImage result', result)
    return result
}

class DB {

    constructor(table) {
        this.table = table
    }

    async create(set, item) {
        console.log(item)
        // const response =
        await authFetch(`/${this.table}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(item)
            }
        )
        // console.log('create response', response)
        set(await this.findAll())
    }

    async remove(set, id) {
        // const response =
        await authFetch(`/${this.table}/${id}`,
            {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            }
        )
        // console.log('response', response)
        set(await this.findAll())
    }

    async update(set, item) {
        // const response =
        await authFetch(`/${this.table}/${item.id}`,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(item)
            }
        )
        // console.log('response', response)
        set(await this.findAll())
    }

    reformatOne(item) {
        // console.log('reformatOne in', item)
        if (item) {
            const { _links, ...rest } = item
            const id = _links.self.href.split(`${this.table}/`)[1]
            item = { id, ...rest }
            // console.log('reformatOne out', item)
        }
        return item
    }

    reformatAll(items) {
        // console.log('reformatAll in', items)
        items = items._embedded[this.table].map(item => this.reformatOne(item))
        // console.log('reformatAll out', items)
        return items
    }

    async find(query) {
        // access the server through url, issuing GET request
        // for url: http://localhost:8080/registers (for example)
        const response = await authFetch(`/${this.table}/${query}`,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        // console.log('response', response)
        if (response.ok) {
            const json = await response.json()
            // console.log('json', json)
            return json
        }
        else {
            return undefined
        }
    }

    async findAll() {
        return this.reformatAll(await this.find(""))
    }

    async findOne(id) {
        return this.reformatOne(await this.find(id))
    }
}

class Invoices extends DB {

    constructor() {
        super("invoices")
    }

    async getAll() {
        // access the server through url, issuing GET request
        // for url: https://trial.mobiscroll.com/content/countries.json (for example)
        try{
            const response = await fetch(`https://api.sit.invoicing.eta.gov.eg/api/v1.0/documenttypes`,
                {
                    method: "GET",
                    mode: "no-cors",
                    headers:{
                        'Accept': 'application/json',
                        'Accept-Language': 'ar',
                        'Content-type':'application/json'
                    }
                });
            console.log('error code', response.statusCode ) // for debug
            console.log('res', response.status) // for debug
            const json = await response.json()
            console.log('json', json) // for debug
            return json
        }
        catch (err){
            console.log('error', err)
        }
    }

    async getOne(id) {
        // access the server through url, issuing GET request
        // for url: https://trial.mobiscroll.com/content/countries.json (for example)
        try{
            const response = await fetch(`https://api.sit.invoicing.eta.gov.eg/api/v1.0/documenttypes/${id}`,
                {
                    method: "GET",
                    mode: "no-cors",
                    headers:{
                        'Accept': 'application/json',
                        'Accept-Language': 'ar',
                        'Content-type':'application/json'
                    }
                });
            console.log('error code', response.statusCode ) // for debug
            console.log('res', response.status) // for debug
            const json = await response.json()
            console.log('json', json) // for debug
            return json
        }
        catch (err){
            console.log('error', err)
        }
    }

    async Create(id) {
        // access the server through url, issuing GET request
        // for url: https://trial.mobiscroll.com/content/countries.json (for example)
        try{
            const response = await fetch(`https://api.sit.invoicing.eta.gov.eg//api/v1.0/documentsubmissions/`,
                {
                    method: "GET",
                    mode: "no-cors",
                    headers:{
                        'Accept': 'application/json',
                        'Accept-Language': 'ar',
                        'Content-type':'application/json'
                    }
                });
            console.log('error code', response.statusCode ) // for debug
            console.log('res', response.status) // for debug
            const json = await response.json()
            console.log('json', json) // for debug
            return json
        }
        catch (err){
            console.log('error', err)
        }
    }
}

class Users extends DB {

    constructor() {
        super("users")
    }

    reformatOne(item) {
        if (item) {
            item = super.reformatOne(item)
            item = { ...item, birthdate: new Date(item.birthdate), createaccountdate: new Date(item.createaccountdate) }
            return item
        }
        else return undefined
    }

    async findByRole(role) {
        return this.reformatAll(await this.find(`search/findByRole?role=${role}`))
    }

}

class Products extends DB {

    constructor() {
        super("products")
    }

    reformatOne(item) {
        item = super.reformatOne(item)
        item = { ...item, id: 1 * item.id, date: new Date(item.date) }
        return item
    }

    async findByNameContaining(name) {
        return this.reformatAll(await this.find(`search/findByNameContaining?name=${name}`))
    }

    async findByNameContainingIgnoreCase(name) {
        return this.reformatAll(await this.find(`search/findByNameContainingIgnoreCase?name=${name}`))
    }

    //ASC>small    Dec>Big
    async SortByLowestPrice() {
        return this.reformatAll(await this.find(`search/findByOrderByPriceAsc`))
    }

    async SortByHighestPrice() {
        return this.reformatAll(await this.find(`search/findByOrderByPriceDesc`))
    }

    async SortByNewest() {
        return this.reformatAll(await this.find(`search/findByOrderByDateDesc`))
    }

    async SortByOldest() {
        return this.reformatAll(await this.find(`search/findByOrderByDateAsc`))
    }

    async findByCategory(categ) {
        return this.reformatAll(await this.find(`search/findByCategory?category=${categ}`))
    }


    async findByCategoryAndPriceLowest(categ) {
        return this.reformatAll(await this.find(`search/findByCategoryOrderByPriceAsc?category=${categ}`))
    }

    async findByCategoryAndPriceHighest(categ) {
        return this.reformatAll(await this.find(`search/findByCategoryOrderByPriceDesc?category=${categ}`))
    }


    async findByCategoryAndSortByNewest(categ) {
        return this.reformatAll(await this.find(`search/findByCategoryOrderByDateDesc?category=${categ}`))
    }

    async findByCategoryAndSortByOldest(categ) {
        return this.reformatAll(await this.find(`search/findByCategoryOrderByDateAsc?category=${categ}`))
    }

    async findDistinctCategory() {
        return [...new Set((await this.findAll()).map(user => user.category))]
    }

    async findByName(name) {
        return this.reformatAll(await this.find(`search/findByName?name=${name}`))
    }

    async findByCategoryOrderBySoldcountDesc(categ) {
        return this.reformatAll(await this.find(`search/findByCategoryOrderBySoldcountDesc?category=${categ}`))
    }


    async SortByHighestSelling() {
        return this.reformatAll(await this.find(`search/findByOrderBySoldcountDesc`))
    }

}

class Carts extends DB {

    constructor() {
        super("carts")
    }

    reformatOne(item) {
        item = super.reformatOne(item)
        item = { ...item, id: 1 * item.id , checkoutdate: new Date(item.checkoutdate)}
        return item
    }

    async findByUseridAndStatus(userid, status) {
        return this.reformatAll(await this.find(`search/findByUseridAndStatus?userid=${userid}&status=${status}`))
    }

    async findByUserid(id) {
        return this.reformatAll(await this.find(`search/findByUserid?id=${id}`))
    }

    async findByUseridAndStatusAndOrderStatus(userid, status,Order) {
        return this.reformatAll(await this.find(`search/findByUseridAndStatusAndOrderstatus?userid=${userid}&status=${status}&Order=${Order}`))
    }


    async findByUseridAndId(user,cartId) {
        return this.reformatAll(await this.find(`search/findByUseridAndId?userid=${user}&&id=${cartId}`))
    }



    async findByShippingid(id) {
        return this.reformatAll(await this.find(`search/findByShippingid?id=${id}`))
    }

    async findByPaymentid(id) {
        return this.reformatAll(await this.find(`search/findByPaymentid?id=${id}`))
    }
}

class Sales extends DB {

    constructor() {
        super("sales")
    }

    reformatOne(item) {
        item = super.reformatOne(item)
        item = { ...item, id: 1 * item.id , startdate: new Date(item.startdate), enddate: new Date(item.enddate)}
        return item
    }

    async findByProductid(id) {
        return this.reformatAll(await this.find(`search/findByProductid?id=${id}`))
    }

}

class Cartitems extends DB {

    constructor() {
        super("cartitems")
    }

    reformatOne(item) {
        item = super.reformatOne(item)
        item = { ...item, id: 1 * item.id}
        return item
    }

    async findByProductid(id) {
        return this.reformatAll(await this.find(`search/findByProductid?id=${id}`))
    }

    async findByProductidAndCartid(productid, cartid) {
        return this.reformatAll(await this.find(`search/findByProductidAndCartid?productid=${productid}&cartid=${cartid}`))
    }

    async findByCartid(id) {
        return this.reformatAll(await this.find(`search/findByCartid?id=${id}`))
    }

    async findByPackageidAndCartid(Packageid, cartid) {
        return this.reformatAll(await this.find(`search/findByPackageidAndCartid?packageid=${Packageid}&cartid=${cartid}`))
    }


}

class Addresses extends DB {

    constructor() {
        super("addresses")
    }

    async getAll() {
        // access the server through url, issuing GET request
        // for url: https://trial.mobiscroll.com/content/countries.json (for example)
        try{
            const response = await fetch(`https://sdk.preprod.invoicing.eta.gov.eg/files/CountryCodes.json`,
                {
                    method: "GET",
                    mode: "no-cors",
                    headers:{
                        // 'Accept': 'application/json',
                        // 'Accept-Language': 'en',
                        'Content-type':'application/json'
                    }
                }
                );
            // console.log('res', response) // for debug
            console.log('error code', response.status ) // for debug
            const json = await response.json()
            // console.log('json', json) // for debug
            return json
        }
        catch (err){
            console.log('error', err)
        }


    }

    reformatAll(items) {
        console.log('reformatAll in', items)
        // items = items._embedded[this.table].map(item => this.reformatOne(item))
        console.log('reformatAll out', items)
        return items
    }


    reformatOne(item) {
        item = super.reformatOne(item)
        item = { ...item, id: 1 * item.id}
        return item
    }

    async findByProductid(id) {
        return this.reformatAll(await this.find(`search/findByProductid?id=${id}`))
    }

    async findByProductidAndCartid(productid, cartid) {
        return this.reformatAll(await this.find(`search/findByProductidAndCartid?productid=${productid}&cartid=${cartid}`))
    }

    async findByCartid(id) {
        return this.reformatAll(await this.find(`search/findByCartid?id=${id}`))
    }

    async findByPackageidAndCartid(Packageid, cartid) {
        return this.reformatAll(await this.find(`search/findByPackageidAndCartid?packageid=${Packageid}&cartid=${cartid}`))
    }


}

const db = {
    getJwtUser,
    setJwtUser,
    uploadImage,
    email,
    uploadFile,
    Products: new Products(),
    Addresses: new Addresses(),
    Users: new Users(),
    Carts: new Carts(),
    Cartitems: new Cartitems(),
    Sales: new Sales(),
    Invoices: new Invoices()
}

export default db