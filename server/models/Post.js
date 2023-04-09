const { json } = require('express');
const db = require('../config/db');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const { use } = require('../routes/postRoutes');
require("dotenv").config();
class Post {
    static hard(){
        let sql = `select * from UserProfile`;
        return db.execute(sql);
    }
    static registerForHardik(req){
        console.log(req)
        let name = req.name;
        let username = req.username;
        let password = req.password;
        let sql = `insert into UserProfile(name,username,password) values('${name}','${username}','${password}')`;
        return db.query(sql).then((res) => {
            console.log(res)
            return 1
        }).catch(error => {
            throw error;
        })
    }
    static register(obj) {
        let name = obj.name;
        let username = obj.username;
        let password = obj.password;
        let sql = `SELECT COUNT(username) as count FROM UserProfile WHERE username = '${username}';`;
        return db.query(sql).then(async ([row]) => {
            console.log(row[0].count)
            if (row[0].count != 0) {
                //  REGISTERATION NOT POSSIBLE
                console.log("NOT UNIQUE USERNAME")
            }
            else {
                // INSERT into TABLE
                const hashedPassword = await bcrypt.hash(password, 10)
                let ins = `INSERT INTO UserProfile(name, username, password) values(?,?,?);`;
                let res = [name, username, hashedPassword];
                return db.query(ins, res).then(([row]) => {
                    return 1
                }).catch(error => {
                    throw error;
                })
            }
        }).catch(error => {
            throw error;
        })
    };
    static async login(username, password) {
        let sql = `SELECT COUNT(username) as count FROM UserProfile WHERE username = '${username}';`;
        return db.query(sql).then(([row]) => {
            console.log(row[0].count)
            if (row[0].count == 0) {
                //  WRONG USERNAME AND PASSWORD
                console.log("INVALID CREDENTIALS")
            }
            else {
                // LOGIN
                let ins = `SELECT * FROM UserProfile WHERE username = '${username}';`;
                return db.query(ins).then(async ([row]) => {
                    try {
                        if (await bcrypt.compare(password, row[0].password)) {
                            var jsonToken = jwt.sign({ result: { username: row[0].username, password: password } }, process.env.ACCESS_KEY)
                            return jsonToken
                        }
                    } catch (error) {
                        console.log("WRONG PASSWORD")
                        return "wrong password"
                    }
                }).catch(error => {
                    throw error;
                })
            }
        }).catch(error => {
            throw error;
        })
    }
}

module.exports = Post;