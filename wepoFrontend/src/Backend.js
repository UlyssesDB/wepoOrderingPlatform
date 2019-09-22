let admin = {
    name: '',
    email: '',
    phone: '',
    password: '',
}

let products = [
    {
        product: '',
        supplier: '',
        price: '',
    },
]

let clients = [
    {
        clientNumber: '',
        client: '',
        billTo: '',
        shipTo: '',
        pickup: Boolean,
        delivery: Boolean,
        email: '',
        phone: '',
        password: '',
        products: [],
    },
]

let orders = [
    {
        orderNumber: Number,
        client: '',
        billTo: '',
        shipTo: '',
        pickup: Boolean,
        delivery: Boolean,
        phone: '',
        products: [],
    },
]

admin = {
    name: 'wepo',
    email: 'placeholder@placeholder.com',
    phone: '000-000-0000',
    password: 'wepo',
}

clients.push({
    clientNumber: '00',
    client: 'meat retailer',
    billTo: 'a place',
    shipTo: 'another place',
    pickup: false,
    delivery: true,
    email: 'meatr@gmail.com',
    phone: '123-123-1234',
    password: 'meatret',
    products: [],
})

export { admin, products, clients, orders };