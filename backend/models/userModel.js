const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const  validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    }, 
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    isSuper:{
        type: Boolean,
        required: false
    },
    isBuyer:{
        type: Boolean,
        required: false
    },
    about_me:{
        type: Number,
        required: false
    },
    rating:{
        type: Number,
        required: false
    }
}, { timestamps: true })


//static signup method
userSchema.statics.signup = async function(name, email, password){
    
    // validation
    if ( !email || !password || !name){
        throw Error('All fields must be filled')
    }
    if ( !validator.isEmail(email) ){
        throw Error('Email is not valid!')
    }
    if ( !validator.isStrongPassword(password, {minSymbols: 0}) ){
         throw Error('Password not strong enough!')
    }

    // checing if given email already exists
    const exists = await this.findOne({email})

    if (exists) {
        throw Error('Email already in use!')
    }

    // hasing password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    // creating user & saving in DB
    const user = await this.create({ 
        name,
        email, 
        password: hash,
        isSuper: false,
        isBuyer: false,
        about_me: '',
        rating: null
    })

    return user
}


//static login method
userSchema.statics.login = async function(email, password){
    // validation
    if ( !email || !password){
        throw Error('All fields must be filled!')
    }

    // checing if given email exists
    const user = await this.findOne({email})

    if (!user) {
        throw Error('Incorrect email!')
    }

    //matching password
    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error('Incorrect password')
    }

    return user
}

module.exports = mongoose.model('User', userSchema)