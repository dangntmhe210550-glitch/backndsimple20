import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import db from '../db.js'

const router = express.Router()

router.post('/register', async (req, res) => {
    const { username , password } = req.body
    // luu ten ng dung va encrypt passwd
    const hashedPassword = bcrypt.hashSync(password, 8)
    // hashed password

    //them user vao db
    try {
        const user = await prisma.user.create({
            data: {
                username,
                password: hashedPassword
            }
        })
        const defaultTodo = `Hello :) add ur first to do`

        await prisma.todo.create({
            data: {
                task: defaultTodo,
                userId : user.id
            }
        })


        //create token
        const token = jwt.sign({ id: result.lastInsertRowid }, process.env.JWT_SECRET, {expiresIn: '24h'})
        res.json({ token })
    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)

    }
})

router.post('/login', async (req, res) => {

    //khi login cta co email, va cbi tim passwd associated vs email do
    //nhung no bi encrypt roi, gio cta lms de so sanh vs cai mat khau ma ho ms nhap
    //nen minh phai encrypt cai mk ho vua nhap va so sanh vs mk trong db

    const { username, password} = req.body

    try {
        const user = await prisma.user.findUnique({
            where:{
                username : username
            }
        })


        if (!user) { return res.status(404).send({ message: "User not found"}) }

        const passwordIsValid = bcrypt.compareSync(password, user.password)

        if (!passwordIsValid) { return res.status(401).send({ message: "Invalid password"}) }
        console.log(user)

        const token = jwt.sign({ id: user.id },  process.env.JWT_SECRET, {expiresIn: '24h'})
        res.json({ token })

    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
}) 


export default router
